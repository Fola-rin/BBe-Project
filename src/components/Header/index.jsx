import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component Imports
import LoginModal from "../Modal";

//Asset imports
import shopLogo from "../../assets/shop-logo.svg";
import waitlistLogo from "../../assets/waitlist-logo.svg";
import userIcon from "../../assets/user-icon.svg";

const Header = ({ logoName }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className="shadow-header p-header relative">
				<div className="m-auto flex justify-between items-center">
					<div className="w-1/2 flex justify-start">
						<div className="h-10 relative">
							<img
								src={
									logoName === "shop"
										? shopLogo
										: logoName === "waitlist"
										? waitlistLogo
										: waitlistLogo
								}
								alt="BBe waitlist Logo"
								className="h-full"
							/>
							<Link
								to={
									logoName === "shop"
										? "/shop"
										: logoName === "waitlist"
										? "/"
										: "/"
								}
								className="absolute h-full w-full top-0 left-0"
							/>
						</div>
					</div>
					{/* <div className="absolute h-full w-full flex justify-center items-center top-0 right-0 z-1-"> */}
					<div className="flex">
						<span className="p-3 inline-block whitespace-nowrap text-FF0000 hover:text-c50101">
							<Link
								to={
									logoName === "shop"
										? "/"
										: logoName === "waitlist"
										? "/shop"
										: "shop"
								}
							>
								{logoName === "shop"
									? "BBeShop"
									: logoName === "waitlist"
									? "BBe"
									: "BBe"}
							</Link>
						</span>
						<span className="p-3 whitespace-nowrap hover:text-c50101">
							<Link to="/">
								{logoName === "shop"
									? "Our App"
									: logoName === "waitlist"
									? "Join Waitlist"
									: "Join Waitlist"}
							</Link>
						</span>
					</div>
					{/* </div> */}
					<div className="w-1/2 flex justify-end items-center">
						{logoName === "waitlist" && (
							<>
								<span className="font-source-code font-normal text-sm text-code-green pr-4">
									VERIFIED ACCESS
								</span>
								<button
									onClick={() => {
										setShowModal(true);
										document.body.classList.add("overflow-hidden");
									}}
								>
									<img src={userIcon} alt="user-icon" className="w-7" />
								</button>
							</>
						)}
					</div>
				</div>
			</div>
			{showModal && (
				<LoginModal showModal={showModal} setShowModal={setShowModal} />
			)}
		</>
	);
};

export default Header;
