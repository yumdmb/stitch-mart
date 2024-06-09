import "./Profile.css";
import HeaderAfterLogin from "../Header/HeaderAfterLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} from "../../redux/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background-color">
      <div className="containers py-5">
        <div className="card" style={{ width: "27rem" }}>
          <div
            className="card-header text-white"
            style={{ backgroundColor: "#0B1E33" }}
          >
            Profile Settings
          </div>
          <div className="tab-content">
            <form onSubmit={handleSubmit} className="card-body">
              <div
                className="d-flex justify-content-center"
                style={{ height: "100%" }}
              >
                <img
                  src={formData.profilePicture || currentUser.profilePicture}
                  alt="Avatar"
                  className="d-block ui-w-40 rounded-circle border border-4 border-dark-subtle"
                  style={{ width: "12vw", height: "12vw" }}
                />
                <div className="media-body d-flex flex-column align-items-center text-center justify-content-center p-4">
                  <label
                    className="btn btn-outline-dark"
                    onClick={() => fileRef.current.click()}
                  >
                    Upload new photo
                    <input
                      type="file"
                      className="account-settings-fileinput"
                      hidden
                      accept="image/*"
                      ref={fileRef}
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                  <p className="text-sm self-center">
                    {imageError ? (
                      <span className="text-red-700">
                        Error uploading image (file size must be less than 2 MB)
                      </span>
                    ) : imagePercent > 0 && imagePercent < 100 ? (
                      <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
                    ) : imagePercent === 100 ? (
                      <span className="text-green-700">
                        Image uploaded successfully
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
              <hr className="border-light m-0" />
              <div className="card-body pt-3">
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input
                    defaultValue={currentUser.username}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                    // value={user?.userName}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input
                    defaultValue={currentUser.email}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    // value={user?.email}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Passsword</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    // value={user?.password}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="d-flex justify-content-end pt-4">
                                <button type="button" className="btn text-light" style={{ backgroundColor: "#0B1E33" }} onClick={handleSaveChangeClick}>Save Changes</button>
                            </div>   */}
                {/* <div class="d-flex justify-content-center mt-3">
                              <button className='btn btn-block text-light mt-3' style={{ backgroundColor: "#0B1E33", width: "18rem" }} >
                                  {loading ? 'Loading...' : 'Update'}
                              </button>
                            </div>  
                            </div>
                            </form>
                                <div className='d-flex justify-content-between mt-3'>
                                    <button 
                                    className='text-danger cursor-pointer'
                                    onClick={handleDeleteAccount}
                                    >
                                      Delete Account
                                    </button>
                                    <button 
                                    className='text-danger cursor-pointer'
                                    onClick={handleSignOut}>
                                      Sign Out
                                    </button>
                                </div>
                                <p className='text-danger mt-3'>{error && 'Something went wrong!'}</p>
                                <p className='text-success mt-3'>
                                {updateSuccess && 'User is updated successfully!'}
                                </p> */}
              </div>
              <div className="container">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex justify-content-center mt-3">
                      <button
                        class="btn btn-block text-light"
                        style={{ backgroundColor: "#0B1E33", width: "18rem" }}
                      >
                        {loading ? "Loading..." : "Update"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="container">
              {/* <div class="row">
                <div class="col-12">
                  <div class="d-flex justify-content-center mt-3">
                    <button
                      class="btn btn-block text-light"
                      style={{ backgroundColor: "#0B1E33", width: "18rem" }}
                    >
                      {loading ? "Loading..." : "Update"}
                    </button>
                  </div>
                </div>
              </div> */}
              <div class="row mt-3">
                <div class="d-flex justify-content-center col-12">
                  <button
                    class="btn btn-block btn-outline-danger"
                    style={{ width: "18rem" }}
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
                <div class="d-flex justify-content-center col-12 mt-3">
                  <button
                    class="btn btn-block btn-outline-danger"
                    style={{ width: "18rem" }}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <p class="text-danger fw-bolder fs-7 ">{error && "Something went wrong!"}</p>
                  <p class="text-success  fw-bolder fs-7 ">
                    {updateSuccess && "User credentials updated successfully!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
