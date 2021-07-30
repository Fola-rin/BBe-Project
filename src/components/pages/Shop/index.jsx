import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Helmet } from "react-helmet";

//Component imports
import Header from "../../Header";
import Footer from "../../Footer";
import ItemModal from "../../ItemModal";
import ItemCard from "./ItemCard";

//asset imports
import person1 from "../../../assets/persons/person-05.png";
import person4 from "../../../assets/persons/person-08.png";
import person5 from "../../../assets/persons/person-09.png";
import person6 from "../../../assets/persons/person-10.png";
import person7 from "../../../assets/persons/person-11.png";
import person8 from "../../../assets/persons/person-12.png";
import loadingGif from "../../../assets/loading-buffering.gif";

const Shop = ({ match }) => {
	let itemId = match.params.id;
	const endPoint = "https://jsonplaceholder.typicode.com/photos";

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const fetchItems = async () => {
		const data = await axios
			.get(endPoint)
			.then((res) => {
				return res;
			})
			.catch((error) => {
				return error.message;
			});
		return data;
	};

	const { data, status } = useQuery("items", fetchItems);

	console.log(status);
	return (
		<>
			<Helmet>
				<title>BBe Shop</title>
				<link rel="icon" href="/favicon1.ico" />
			</Helmet>
			<Header logoName="shop" />
			<div className="p-header mt-28 pb-0">
				<div className="text-center mb-28">
					<h1 className="text-6xl font-bold m-auto mb-8">Shop With Freedom</h1>
					<p className="capitalize max-w-sm m-auto">
						Sell and Buy Products of your Choice.
					</p>
				</div>
				<div className="flex justify-between relative mb-28 rounded-lg h-460 overflow-hidden">
					<img
						src={person1}
						alt="person image"
						className="w-full object-cover object-top"
					/>
				</div>
			</div>
			<div className="p-header mt-28 bg-E5E5E5">
				{status === "loading" && (
					<div className="flex justify-center items-center">
						<img src={loadingGif} className="w-24" />
					</div>
				)}

				<div className="grid grid-cols-3 gap-4 px-10 py-20">
					{status === "success" &&
						data &&
						(typeof data === "string" ? (
							<p className="text-center text-red-500 font-medium text-lg">
								{data}
							</p>
						) : (
							data.data.slice(0, 6).map((item, id) => {
								return (
									<ItemCard
										key={id}
										imgUrl={item.url}
										itemId={item.id}
										title={item.title}
									/>
								);
							})
						))}
				</div>
			</div>
			<div className="p-header mt-28">
				<div className="mb-56">
					<p className="font-bold text-center uppercase tracking-0.15 mb-5">
						Shopping made super easy
					</p>
					<h2 className="text-6xl font-bold m-auto mb-8 text-center mb-5">
						Shop with freedom
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
						Our App is in beta and coming <br /> soon <span>🎉</span>
					</p>
				</div>
			</div>
			{itemId && <ItemModal itemId={itemId} />}
			<Footer logoName="shop" />
		</>
	);
};

export default Shop;
