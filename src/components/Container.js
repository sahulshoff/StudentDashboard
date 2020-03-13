import React, { Component } from "react";
import Chart from "./Chart";
import ChartData from "./ChartData";
import CheckBox from "./CheckBox";

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			assignmentScore: ChartData
		};
	}

	onSubmit(event) {
		event.preventDefault();
	}
	toggle(event) {
		this.setState(prevState => ({
			assignmentScore: this.state.assignmentScore.filter(score => {
				return score.name === "Evelyn";
			})
		}));
	}

	render() {
		const currentTotal = 0;
		const funScore = this.state.assignmentScore.map(score => {
			return score.funFactor;
		});
		console.log(funScore);
		const reducer = (accumulator, item) => {
			return accumulator + item;
		};

		const filteredNumbers = funScore.reduce(reducer, currentTotal);
		// funScore.reduce(currentTotal, item => {
		// 			return item + currentTotal;
		// 		});

		console.log(filteredNumbers);

		return (
			<div id="container">
				<div className="header">
					<h1>Student Dashboard</h1>
				</div>

				<div className="checkboxes">
					<span>
						<input
							value="Evelyn"
							type="checkbox"
							onClick={this.toggle.bind(this)}
						/>
						<label>Evelyn</label>
					</span>
					<span>
						<input
							name="Storm"
							type="checkbox"
							onClick={this.toggle.bind(this)}
						/>
						<label>Storm</label>
					</span>
				</div>

				<Chart assingmentscores={this.state.assignmentScore} />
			</div>
		);
	}
}

export default Container;
