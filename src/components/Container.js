import React, { Component } from "react";
import Chart from "./Chart";

class Container extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id="container">
				{/* <CheckBox /> */}
				<Chart />
			</div>
		);
	}
}

export default Container;
