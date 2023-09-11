import React, { useEffect, useState } from "react";
import "./styles.css";
import ChevronDown from "../icons/chevron-down.svg";
import SearchIcon from "../icons/search.svg";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [noOfTabs, setNoOfTabs] = useState(0);
	const tabWidth = 120;
	const logoWidth = 180;
	const searchBarWidth = 300;
	const headerPadding = 64;
	const searchBarMargin = 20;

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const headerOptions = [
		"HOME",
		"ELECTRONICS",
		"BOOKS",
		"MUSIC",
		"CLOTHING",
		"GAMES",
		"FURNITURE",
		"ASBC",
		"TRAVEL",
		"BOTANICAL",
		"CATEGORY NAME",
	];

	useEffect(() => {
		let tabsListWidth =
			window.innerWidth -
			logoWidth -
			searchBarWidth -
			2 * searchBarMargin -
			2 * headerPadding;
		if (tabsListWidth < 0) {
			tabsListWidth = 0;
		}
		setNoOfTabs(parseInt(tabsListWidth / tabWidth), 10);
	}, []);

	window.addEventListener("resize", (e) => {
		let tabsListWidth =
			window.innerWidth -
			logoWidth -
			searchBarWidth -
			2 * searchBarMargin -
			2 * headerPadding;
		if (tabsListWidth < 0) {
			tabsListWidth = 0;
		}
		setNoOfTabs(parseInt(tabsListWidth / tabWidth), 10);
	});

	let visibleTabs = headerOptions.slice(0, noOfTabs);
	let dropdownItems = [];
	if (noOfTabs > 0 && headerOptions.length > noOfTabs) {
		dropdownItems = headerOptions.slice(noOfTabs - 1, headerOptions.length);
	} else {
		dropdownItems = headerOptions.slice(0, headerOptions.length);
	}
	visibleTabs = visibleTabs.slice(0, -1);

	return (
		<div className="header-main">
			<div className="heading-name">E-COMM</div>
			<div className="header-items">
				{visibleTabs.map((ele) => (
					<a href="/" className="header-tab">
						{ele}
					</a>
				))}
				{dropdownItems.length > 0 && (
					<div>
						<div onClick={() => toggleDropdown()} className="header-dropdown">
							MORE
							<img alt="down" src={ChevronDown} />
							<div
								className={`${
									isDropdownOpen ? "show-dropdown" : "remove-dropdown"
								}`}
							>
								{dropdownItems.map((e) => (
									<option className="dropdown-option">{e}</option>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="search-bar">
				<img alt="search" src={SearchIcon} />
				<input
					className="search-input"
					type="search"
					placeholder="Search something"
				></input>
			</div>
		</div>
	);
};

export default Header;
