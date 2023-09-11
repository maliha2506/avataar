import React, { useState } from "react";
import classNames from "classnames";
import "./styles.css";
import LeftArrow from "../icons/arrow-left.svg";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(2);
	const length = slides.length;

	const [slideStyles, setSlideStyles] = useState([
		{
			width: `${(3 * 100) / 24}%`,
			zIndex: 1,
			position: "absolute",
			left: 0,
			transition: `all 0.3s ease-in-out`,
		},
		{
			width: `${(6 * 100) / 24}%`,
			zIndex: 2,
			position: "absolute",
			left: `${(2 * 100) / 24}%`,
			transition: `all 0.3s ease-in-out`,
		},
		{
			width: `${(12 * 100) / 24}%`,
			zIndex: 3,
			position: "absolute",
			left: `${(6 * 100) / 24}%`,
			transition: `all 0.3s ease-in-out`,
		},
		{
			width: `${(6 * 100) / 24}%`,
			zIndex: 2,
			position: "absolute",
			left: `${(16 * 100) / 24}%`,
			transition: `all 0.3s ease-in-out`,
		},
		{
			width: `${(3 * 100) / 24}%`,
			zIndex: 1,
			position: "absolute",
			left: `${(21 * 100) / 24}%`,
			transition: `all 0.3s ease-in-out`,
		},
	]);

	const setMainImage = (d) => {
		let k = 0;
		let tempArr = new Array(length);
		for (let i = d; i < length; i++) {
			tempArr[k] = slideStyles[i];
			k++;
		}
		for (let i = 0; i < d; i++) {
			tempArr[k] = slideStyles[i];
			k++;
		}
		setSlideStyles(tempArr);
	};

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		setMainImage(length - 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		setMainImage(1);
	};

	const onClickDot = (index) => {
		let diff = -index + current;
		if (diff < 0) {
			setMainImage(diff + 5);
		} else {
			setMainImage(diff);
		}
		setCurrent(index);
	};

	return (
		<div className="slider">
			{slides.map((slide, index) => {
				return (
					<div
						onClick={() => onClickDot(index)}
						className="slide"
						style={slideStyles[index]}
						key={index}
					>
						<img className="slider-img" src={slide.image} alt="" />
					</div>
				);
			})}
			<div className="slider-dots">
				<img
					onClick={prevSlide}
					alt="left"
					className="left-arrow"
					src={LeftArrow}
				/>
				{slides.map((slide, index) => (
					<div
						key={index}
						onClick={() => onClickDot(index)}
						className={classNames("slider-dot", { active: index === current })}
					></div>
				))}
				<img
					onClick={nextSlide}
					alt="right"
					className="right-arrow"
					src={LeftArrow}
				/>
			</div>
		</div>
	);
};

export default Slider;
