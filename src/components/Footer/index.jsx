import React from "react";
import { Link } from "react-router-dom";

// asset Imports
import shopLogo from "../../assets/shop-logo.svg";
import waitlistLogo from "../../assets/waitlist-logo.svg";
import linkIcon from "../../assets/link-icon.svg";
import appleCard from "../../assets/app-icon-03.png";
import androidCard from "../../assets/app-icon-02.png";
import webCard from "../../assets/use-web-card.svg";
import facebookIcon from "../../assets/social-media-icons/facebook.svg";
import linkedInIcon from "../../assets/social-media-icons/linkedin.svg";
import twitterIcon from "../../assets/social-media-icons/twitter.svg";
import instagramIcon from "../../assets/social-media-icons/instagram.svg";
import youtubeIcon from "../../assets/social-media-icons/youtube.svg";
import nigeriaFlag from "../../assets/nigeria-flag.svg";

// import appleSvgCard from "../../assets/apple-svg.svg";
// import androidSvgCard from "../../assets/android-svg.svg";
// import webSvgCard from "../../assets/web-svg.svg";

const Footer = ({ logoName }) => {
	return (
		<div className="p-header font-red-hat-text">
			<div className="w-1/2 m-auto mb-24">
				<p className="text-center mb-4 font-medium">Coming Soon On:</p>
				<div className="flex justify-center ">
					<a
						href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga&hl=en&gl=US"
						target="_blank"
					>
						<img
							src={androidCard}
							className="h-12 py-3 pr-3 box-content opacity-50"
						/>
					</a>
					<a
						href="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
						target="_blank"
					>
						<img src={appleCard} className="h-12 p-3 box-content opacity-50" />
					</a>
					<Link to="/">
						<img src={webCard} className="h-12 p-3 box-content opacity-50" />
					</Link>
				</div>
			</div>
			<div className="flex justify-between mb-14">
				<div className="h-8 relative">
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
					<Link to="/" className="absolute h-full w-full top-0 left-0" />
				</div>
				<div className="relative flex items-start hover:text-hover-blue">
					<h5 className="whitespace-nowrap px-2 font-medium">
						Lawrence Price & Company
					</h5>
					<img src={linkIcon} alt="" />

					<Link to="/" className="absolute h-full w-full top-0 left-0" />
				</div>
			</div>
			<div className="mb-8">
				<div className="flex justify-between ">
					<div>
						<h5 className="h4 mb-5 font-medium">Coming Soon On: </h5>
						<div className="flex ">
							<a
								href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga&hl=en&gl=US"
								target="_blank"
							>
								<img
									src={androidCard}
									className="h-12 py-3 pr-3 box-content"
									alt=""
								/>
							</a>
							<a
								href="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
								target="_blank"
							>
								<img src={appleCard} className="h-12 p-3 box-content" alt="" />
							</a>
							<Link to="/">
								<img src={webCard} className="h-12 p-3 box-content" alt="" />
							</Link>
						</div>
					</div>
					<div>
						<h5 className="pl-1 mb-5 font-medium">Follow Us on Social Media</h5>
						<div className="flex ">
							<a href="https://web.facebook.com/" target="_blank">
								<img
									src={facebookIcon}
									className="py-1 pr-1"
									alt="facebook icon"
								/>
							</a>
							<a href="https://www.linkedin.com/" target="_blank">
								<img src={linkedInIcon} className="p-1" alt="linkedin icon" />
							</a>
							<a
								href="https://twitter.com/"
								target="_blank"
								className="flex items-center"
							>
								<img src={twitterIcon} className="p-1" alt="twitter icon" />
							</a>
							<a href="https://www.instagram.com/" target="_blank">
								<img src={instagramIcon} className="p-1" alt="instagram icon" />
							</a>
							<a href="https://www.youtube.com/" target="_blank">
								<img
									src={youtubeIcon}
									className="py-1 pl-1"
									alt="yotube Icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-gray-300" />
			<div className="mt-8 flex justify-between">
				<p className="font-medium text-sm">
					Copyright © {new Date().getFullYear()}{" "}
					{logoName === "shop"
						? "BBe Shop"
						: logoName === "waitlist"
						? "BBe App"
						: "BBe App"}
					. All rights reserved.
				</p>
				<div className="flex items-center">
					<img src={nigeriaFlag} className="pr-2 h-3" alt="Nigerian Flag" />
					<span className="font-medium text-sm">Nigeria</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
