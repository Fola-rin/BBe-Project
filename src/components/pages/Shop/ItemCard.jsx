import React from "react";
import { Link } from "react-router-dom";

import person1 from "../../../assets/persons/person-05.png";

const ItemCard = ({ imgUrl, title, itemId }) => {
	return (
		<div className="bg-white w-4/5 rounded-xl overflow-hidden mx-auto mb-8">
			<div className="h-36 relative">
				<img
					src={imgUrl}
					alt="person image"
					className="object-cover h-full w-full"
				/>
				<Link
					to={`/shop/${itemId}`}
					className="absolute h-full w-full top-0 left-0"
					onClick={() => document.body.classList.add("overflow-hidden")}
				/>
			</div>
			<div className="p-5 pt-3">
				<h3 className="text-3xl mb-2 font-medium whitespace-nowrap overflow-hidden overflow-ellipsis w-3/4">
					<Link
						to={`/shop/${itemId}`}
						onClick={() => document.body.classList.add("overflow-hidden")}
					>
						{title}
					</Link>
				</h3>
				<h5 className="text-06AB0D text-xl font-medium">#{itemId * 1000}</h5>
				<div className="flex justify-end items-center text-sm">
					<p className="bg-black text-white h-5 w-5 flex justify-center items-center font-medium rounded-full">
						<span>f</span>
					</p>
					<span className="pl-1.5 text-747272">fruit.ng</span>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
