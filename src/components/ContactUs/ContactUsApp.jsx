import HeaderAfterLogin from "../Header/HeaderAfterLogin";
import ContactUsForm from "./ContactUsForm";
import FeedbackForm from "./FeedbackForm";

function ContactUsApp() {
  return (
    <div>
      <HeaderAfterLogin />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 80px)", backgroundColor: "#ffba42" }}>
        <div style={{ display: "flex" }}>
          <ContactUsForm />
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUsApp;