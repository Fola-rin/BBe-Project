import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";

//Component imports
import Header from "../../Header";
import Footer from "../../Footer";

//asset imports
import person1 from "../../../assets/persons/person-05.png";
import person2 from "../../../assets/persons/person-06.png";
import person3 from "../../../assets/persons/person-07.png";
import person4 from "../../../assets/persons/person-08.png";
import person5 from "../../../assets/persons/person-09.png";
import person6 from "../../../assets/persons/person-10.png";
import person7 from "../../../assets/persons/person-11.png";
import person8 from "../../../assets/persons/person-12.png";

const Waitlist = () => {
	const [choice, setChoice] = useState(true);
	const [email, setEmail] = useState("");
	const [phoneNum, setPhoneNum] = useState("");
	const [loading, setLoading] = useState(false);
	const [join, setJoin] = useState(false);
	const [error, setError] = useState(false);

	const handleClick = () => {
		if (phoneNum !== "" || email !== "") {
			setLoading(true);
			setJoin(false);
			setError(false);
			setTimeout(() => {
				setPhoneNum("");
				setEmail("");
				setLoading(false);
				setJoin(true);
			}, 1000);
		} else {
			setJoin(false);
			setError(true);
		}
	};
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>BBe</title>
				<link rel="icon" href="/favicon.ico" />
			</Helmet>
			<Header logoName="waitlist" />
			<div className="p-header mt-28">
				<div className="text-center mb-28">
					<h1 className="text-6xl font-bold max-w-md m-auto mb-8">
						Grow above and beyond
					</h1>
					<p className="capitalize max-w-sm m-auto">
						one platform to manage records, pay , Access grants, and run your
						business.
					</p>
				</div>
				<div className="flex justify-between relative mb-28">
					<div className="w-1/2">
						<img src={person3} alt="person image" />
					</div>
					<div className="w-1/2 flex flex-col">
						<div>
							<img src={person1} alt="person image" />
						</div>
						<div className="absolute bottom-0 right-0 w-1/2">
							<img src={person2} alt="person image" />
						</div>
					</div>
				</div>
				<div className="mb-56">
					<p className="font-bold text-center uppercase tracking-0.15 mb-5">
						financials for businesses small & large
					</p>
					<h2 className="text-6xl font-bold m-auto mb-8 text-center mb-5">
						freedom begins here!
					</h2>
					<div className="w-1/4 m-auto h-20 relative mb-6">
						<img
							src={person4}
							alt="person image"
							className="absolute h-full top-0 left-0"
						/>

						<img
							src={person5}
							alt="person image"
							className="absolute h-full top-0 left-1/5"
						/>

						<div className="w-full h-full absolute">
							<img
								src={person6}
								alt="person image"
								className="h-full top-0 left-0 mx-auto text-center"
							/>
						</div>
						<img
							src={person7}
							alt="person image"
							className="absolute h-full top-0 right-1/5"
						/>
						<img
							src={person8}
							alt="person image"
							className="absolute h-full top-0 right-0"
						/>
					</div>
					<p className="text-center m-auto w-96 text-2xl mb-24">
						Be amongst the First to Get the News When we Launch! <span>🎉</span>
					</p>
					{!choice && (
						<p className="text-5A7889 text-center text-lg font-medium mb-4 hover:text-3f5461">
							<span
								className="cursor-pointer"
								onClick={() => {
									setChoice(true);
									setPhoneNum("");
									setError(false);
								}}
							>
								I think an e-mail will do
							</span>
						</p>
					)}

					<form className="mb-4 flex justify-center">
						<div className="w-auto inline-block m-auto">
							{choice ? (
								<input
									className="appearance-none border border-input-color rounded-full w-80 p-5 text-gray-700 placeholder-input-color leading-tight focus:outline-none focus:shadow-outline "
									id="email"
									type="text"
									placeholder="Your Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							) : (
								<>
									<label className="p-4">Phone number</label>
									<input
										className="appearance-none border border-input-color rounded-full w-80 p-5 text-gray-700 placeholder-input-color leading-tight focus:outline-none focus:shadow-outline "
										id="phone"
										type="tel"
										placeholder="i.e  +234 0800 000 0000"
										value={phoneNum}
										onChange={(e) => setPhoneNum(e.target.value)}
										required
									/>
								</>
							)}
							<button
								className="bg-0066FF ml-3 text-lg rounded-full p-4  hover:bg-0049b7 text-white font-medium rounded focus:outline-none focus:shadow-outline"
								type="button"
								onClick={handleClick}
							>
								{loading ? "Please wait..." : "Join Waitlist"}
							</button>
						</div>
					</form>
					{choice && (
						<p className="text-5A7889 text-center text-lg  font-medium hover:text-3f5461">
							<span
								className="cursor-pointer"
								onClick={() => {
									setChoice(false);
									setEmail("");
									setError(false);
								}}
							>
								I would prefer an SMS instead.
							</span>
						</p>
					)}
					{join && (
						<p className="text-center text-0049b7 font-medium mt-10 text-lg">
							Thanks for joining our waitlist! <span>🎉</span>
						</p>
					)}
					{error && (
						<p className="text-center text-red-500 mt-10 text-sm">
							Please check the input field and try again
						</p>
					)}
				</div>
			</div>
			<Footer logoName="waitlist" />
		</>
	);
};

export default Waitlist;
