import React, { useState } from "react";

import xIcon from "../../assets/x-icon.svg";
import checkmarkIcon from "../../assets/checkmark.svg";

const LoginModal = ({ showModal, setShowModal }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [showPassword, setShowPassword] = useState(true);

	const handleClick = () => {
		if (password !== "" && username !== "") {
			setLoading(true);
			setSuccess(false);
			setError(false);
			setTimeout(() => {
				setPassword("");
				setUsername("");
				setLoading(false);
				setSuccess(true);
			}, 1000);
		} else {
			setSuccess(false);
			setError(true);
		}
	};

	return (
		<>
			<div className=" bg-black bg-opacity-25 justify-end items-start flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-1/2 p-header">
					<div className="border-0 rounded-lg relative shadow-lg mt-20 flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-center justify-between p-6 pt-10 border-solid border-blueGray-200 rounded-t">
							<h3 className="text-4xl font-medium">Private Access</h3>
							<span className="font-source-code font-normal text-sm text-code-green pr-4 flex">
								<span className="pr-1">VERIFIED ACCESS</span>{" "}
								<img src={checkmarkIcon} />
							</span>
							<button
								className="p-1 bg-transparent border-0 text-black leading-none outline-none focus:outline-none absolute top-1 right-1"
								onClick={() => {
									setShowModal(false);
									document.body.classList.remove("overflow-hidden");
								}}
							>
								<img src={xIcon} />
							</button>
						</div>
						<form className="mb-4 p-6">
							<div className="w-full block m-auto">
								<input
									className="appearance-none border border-input-color rounded-full w-full p-5 mb-5 text-gray-700 placeholder-input-color leading-tight focus:outline-none focus:shadow-outline "
									id="username"
									type="text"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								<div className="relative mb-5">
									<input
										className="appearance-none border border-input-color rounded-full w-full p-5 text-gray-700 placeholder-input-color leading-tight focus:outline-none focus:shadow-outline "
										id="password"
										type={showPassword ? "password" : "text"}
										placeholder="Enter Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<span className="absolute top-0 right-0 p-5 pr-3 text-sm hover:text-3f5461">
										<button
											onClick={(e) => {
												setShowPassword(!showPassword);
												e.preventDefault();
											}}
										>
											Show me
										</button>
									</span>
								</div>
							</div>
							<button
								className="bg-FF0000 text-lg rounded-full p-4  hover:bg-c50101 text-white font-medium rounded w-1/3 focus:outline-none focus:shadow-outline"
								type="button"
								onClick={handleClick}
							>
								{loading ? "Please wait..." : "Access"}
							</button>
							{error && (
								<p className="text-center text-red-500 mt-10 text-sm">
									Please check the input field and try again
								</p>
							)}
							{success && (
								<p className="text-center text-0049b7 font-medium mt-10 text-lg">
									You have Access! <span>🎉</span>
								</p>
							)}
						</form>
						<p className="uppercase text-xs p-5 text-gray-400 tracking-wider">
							Verified Access: Only Verified User is allowed to access Blackbox
							Website via this login. User profiles are created based on unique
							request. NOTE: Your Access to the Blackbox website might and can
							be limited at any point in time.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginModal;
