import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{backgroundColor:""}}>
      <div className="container py-5 px-5" style={{backgroundColor:"#FFBA42"}}>
        <div className="p-2 text-center bg-body-tertiary rounded-3">
            <h1 className="text-body-emphasis">Crafting beautiful stories, one stitch at a time</h1>
            <p className="lead">
            —get in touch <code>today</code>
            </p>
        </div>
    </div>  
      <div className="b-example-divider" ></div>
        <div className="container" >
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact Us</Link></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 Stitch-Mart, Inc</p>
            </footer>
        </div>
        <div className="b-example-divider"></div>
    </div>
  );
};
export default Footer;
