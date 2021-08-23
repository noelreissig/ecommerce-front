import { Form } from "react-bootstrap";
import NavComponent from "../../Navbar/Navbar";
function Contact() {
	return (
		<div>
			<div className="mt-5 ">
				<NavComponent />
				<div className={`p-3 text-center`}>
					<h1>Habla con nosotros</h1>
				</div>
			</div>
			<div className="container w-50 text-light p-3">
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
				</Form>
			</div>
		</div>
		// </div>
	);
}
export default Contact;
