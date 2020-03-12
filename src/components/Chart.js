import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import ChartData from "./ChartData";

const Chart = () => {
	return (
		<div id="chart">
			<VictoryChart domainPadding={20}>
				<VictoryAxis tickFormat={ChartData.map(projname => projname.project)} />
				<VictoryAxis dependentAxis tickValues={["1", "2", "3", "4", "5"]} />
				<VictoryBar data={ChartData} x={"project"} y={"funFactor"} />
			</VictoryChart>
		</div>
	);
};

export default Chart;
