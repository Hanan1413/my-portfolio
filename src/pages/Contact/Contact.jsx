import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container ">
      <h1 style={{ textAlign: "center" }}>Contact Information</h1>

      <div className="contact-card margin-bottom hover-scale duration-500">
        <p className="font-size"> Cellphone: 0569382756</p>
      </div>
      <div className="contact-card hover-scale duration-500 ">
        <p className="font-size"> Email: ihanan977@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
