import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const NavBar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	//open/close contact modal
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);

	return (
		<div className="nav">
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="white">
					                    
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
					                
				</svg>
			</button>

			<div
				className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink data-cy="my-work" to="/my-work">
					My Work
				</NavLink>
				<NavLink onClick={handleOpen}>Contact</NavLink>
				<Contact openModal={openModal} handleClose={handleClose} />
			</div>
		</div>
	);
};

export default NavBar;
