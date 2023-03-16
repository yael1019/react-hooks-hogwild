import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";


function App() {

	const [greased, setGreased] = useState(false);
	const [sortPigs, setSortPigs] = useState("All");

	function greasedCb() {
		setGreased(!greased)
	}

	function sortCb(e) {
		setSortPigs(e.target.value);
	}

	return (
		<div className="App">
			<Nav greasedCb={ greasedCb } sortCb={ sortCb } />
			<HogsContainer hogs={ hogs } greased={ greased } sortPigs={ sortPigs } />
		</div>
	);
}

export default App;
