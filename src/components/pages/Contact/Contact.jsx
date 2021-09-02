import { Form, Button } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
function Contact() {
  return (
    <div className="min-vh-100">
      <div className="mt-5 ">
        <NavComponent />
        <div className={`p-3 text-center`}>
          <h1>Habla con nosotros</h1>
        </div>
      </div>
      <div className="container w-25  p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Tu nombre</Form.Label>
            <Form.Control type="text" placeholder="Dinos tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Dinos tu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Tu mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-5">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
