import ContactUs from "./ContactUs";
import HeaderAfterLogin from "../Header/HeaderAfterLogin";
import ContactForm from "./ContactForm";
import FeedbackForm from "./FeedbackForm";
function ContactUsApp() {
  return (
    <div style={{backgroundColor:"#ffba42"}}>
      <HeaderAfterLogin />
      <ContactForm />
      <FeedbackForm />
    </div>
  );
}

export default ContactUsApp;
