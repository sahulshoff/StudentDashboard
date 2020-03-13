import React from "react";
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
	VictoryZoomContainer
} from "victory";

const Chart = ({ assingmentscores }) => {
	return (
		<div id="chart">
			<VictoryChart
				domainPadding={80}
				width={3000}
				height={700}
				containerComponent={
					<VictoryZoomContainer
						allowZoom={false}
						responsive={false}
						theme={VictoryTheme.material}
					/>
				}
			>
				<VictoryGroup offset={20}>
					<VictoryBar
						data={assingmentscores}
						x={"project"}
						y={"diffFactor"}
						barWidth={20}
					/>
					<VictoryBar
						barWidth={20}
						data={assingmentscores}
						x={"project"}
						y={"funFactor"}
					/>
				</VictoryGroup>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 10,
							angle: -30,
							padding: 25
						}
					}}
					tickFormat={assingmentscores.map(projectname => projectname.project)}
				/>

				<VictoryAxis dependentAxis tickValues={["1", "2", "3", "4", "5"]} />
			</VictoryChart>
		</div>
	);
};

export default Chart;
