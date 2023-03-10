import { useState } from 'react';
import Contact from './Contact';

const Footer = () => {
	const [openModal, setOpenModal] = useState(false);

	//open/close contact modal
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);

	return (
		<div className="footer-container">
			<p>Interested in collaborating?</p>
			<button
				data-cy="contact-me-btn"
				className="contact-btn"
				onClick={handleOpen}>
				Contact Me
			</button>
			<div className="social-media">
				<a
					href="https://github.com/Schmidt1697"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fa-brands fa-github" title="GitHub"></i>
				</a>

				<a
					href="https://www.linkedin.com/in/annaschmidt1697/"
					rel="noopener noreferrer"
					target="_blank">
					<i className="fa-brands fa-linkedin" title="LinkedIn"></i>
				</a>

				<a
					href="https://medium.com/@marshall1697"
					target="_blank"
					rel="noopener noreferrer"
					title="Medium Blog">
					<i className="fa-brands fa-medium"></i>
				</a>
			</div>
			<Contact openModal={openModal} handleClose={handleClose} />
		</div>
	);
};

export default Footer;
