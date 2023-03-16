import React from "react";
import piggy from "../assets/porco.png";
import Greased from "./Greased";
import Sort from './Sort';

const Nav = ({ greasedCb, sortCb }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<Greased greasedCb={ greasedCb } />
			<Sort sortCb={ sortCb } />
		</div>
	);
};

export default Nav;
