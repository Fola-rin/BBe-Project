import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import xIcon from "../../assets/x-icon-white.svg";
import cartIcon from "../../assets/cart-icon.svg";
import loadingGif from "../../assets/loading-buffering.gif";

const ItemModal = ({ itemId }) => {
	console.log(itemId);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setSuccess(false);
		setTimeout(() => {
			setLoading(false);
			setSuccess(true);
		}, 1000);
	};
	const fetchItem = async () => {
		const data = await axios
			.get(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
			.then((res) => {
				return res;
			})
			.catch((error) => {
				return error.message;
			});
		return data;
	};

	const { data, status } = useQuery("item", fetchItem, { cacheTime: 0 });

	console.log(data);

	return (
		<>
			<div className=" bg-black bg-opacity-25 justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-35-percent">
					<div className="border-0 rounded-lg relative shadow-lg  flex flex-col justify-center w-full bg-white outline-none min-h-400 focus:outline-none">
						{status === "loading" && (
							<div className="flex justify-center items-center">
								<img src={loadingGif} className="w-24" alt="" />
							</div>
						)}
						{status === "error" && (
							<div className="flex justify-center items-center">
								<p className="text-red-500">oops an error occured ☠️</p>
							</div>
						)}

						{status === "success" &&
							data &&
							(typeof data === "string" ? (
								<p className="text-center text-red-500 font-medium text-lg">
									{data}
								</p>
							) : (
								<>
									<div className="overflow-hidden rounded-t">
										<Link
											className="p-1 z-10 bg-transparent border-0 text-black leading-none outline-none focus:outline-none absolute top-1 right-1"
											onClick={() => {
												document.body.classList.remove("overflow-hidden");
											}}
											to="/shop"
										>
											<img src={xIcon} className="w-6" alt="" />
										</Link>
										<div className="h-72">
											<img
												src={data.data.url}
												alt="person image"
												className="object-cover h-full w-full"
											/>
										</div>
									</div>

									<div className="p-5 pt-3">
										<h3 className="text-6xl font-medium whitespace-nowrap overflow-hidden overflow-ellipsis w-3/4 leading-normal">
											<Link to={`/shop/${itemId}`}>{data.data.title}</Link>
										</h3>
										<h5 className="text-06AB0D text-xl font-bold mb-7">
											#{itemId * 1000}
										</h5>
										<p className="text-xl mb-5 h-20">{data.data.title}</p>
										<div className="flex justify-start items-center text-lg">
											<p className="bg-black text-white h-7 w-7 flex justify-center items-center font-medium rounded-full">
												<span>f</span>
											</p>
											<span className="pl-1.5 text-747272">fruit.ng</span>
										</div>
										<div className="flex justify-end">
											<div className="flex items-center cursor-pointer">
												<span className="whitespace-nowrap mr-1">
													Add to cart
												</span>
												<img src={cartIcon} alt="" />
											</div>
											<button
												className="bg-0066FF ml-5 text-xl rounded-full p-4  hover:bg-0049b7 text-white font-medium rounded focus:outline-none focus:shadow-outline"
												type="button"
												onClick={handleClick}
											>
												{loading ? "Please wait..." : "Buy Now"}
											</button>
										</div>
										{success && (
											<p className="text-center text-0049b7 font-medium mt-10 text-lg">
												Thanks for buying our Product! <span>🎉</span>
											</p>
										)}
									</div>
								</>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemModal;
