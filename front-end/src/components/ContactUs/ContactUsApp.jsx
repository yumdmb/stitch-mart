import HeaderAfterLogin from "../Header/HeaderAfterLogin";
import ContactUsForm from "./ContactUsForm";
import StoreLocation from "./StoreLocation";

function ContactUsApp() {
  return (
    <div>
      <HeaderAfterLogin />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 80px)", backgroundColor: "#ffba42" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>
          <ContactUsForm />
          <StoreLocation />
        </div>
      </div>
    </div>
  );
}

export default ContactUsApp;