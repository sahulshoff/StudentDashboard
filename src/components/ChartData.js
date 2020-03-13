import React from "react-dom";

const ChartData = [
	{
		name: "Evelyn",
		project: "SCRUM",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D1-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W1D2-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D2-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W1D2-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D2-5",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D3-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D3-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D3-4",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W1D3-5",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "Guess-the-number",
		diffFactor: 5,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W1D4-1",
		diffFactor: 4,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "Kleurentoggle",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "Galgje",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W2D1-1",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W2D1-2",
		diffFactor: 2,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W2D2-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D2-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D3-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D3-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W2D3-3",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W2D4-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W2D4-3",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "Filmzoeker",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D1-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D1-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D1-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D1-4",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W3D2-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D2-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W3D2-3",
		diffFactor: 3,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W3D3-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "W3D3-2",
		diffFactor: 4,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W3D3-3",
		diffFactor: 3,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W3D3-4",
		diffFactor: 4,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W3D4-1",
		diffFactor: 5,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W3D4-2",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "Todo-List",
		diffFactor: 2,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D2-1",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D2-2",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D2-3",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D2-4",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D3-1",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D3-3",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D3-4",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W4D3-5",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "Next-Level CSS",
		diffFactor: 1,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W5D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Evelyn",
		project: "Lil_Playlist",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "W6D1-1",
		diffFactor: 5,
		funFactor: 5
	},
	{
		name: "Evelyn",
		project: "W6D2-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Evelyn",
		project: "Eindopdracht",
		diffFactor: 5,
		funFactor: 5
	},
	{
		name: "Aranka",
		project: "SCRUM",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W1D1-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W1D2-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W1D2-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W1D2-3",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W1D2-4",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W1D2-5",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W1D3-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W1D3-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W1D3-4",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W1D3-5",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "Guess-the-number",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W1D4-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "Kleurentoggle",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "Galgje",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W2D1-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D1-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D2-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D2-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D2-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D3-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W2D3-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W2D3-3",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W2D4-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W2D4-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "Filmzoeker",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W3D1-1",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W3D1-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W3D1-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W3D1-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D2-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D2-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D2-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D3-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W3D3-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D3-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D3-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "W3D4-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W3D4-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "Todo-List",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W4D2-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W4D2-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W4D2-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W4D2-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W4D3-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W4D3-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W4D3-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W4D3-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W4D3-5",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "Next-Level CSS",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Aranka",
		project: "W5D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Aranka",
		project: "Lil_Playlist",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "W6D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Aranka",
		project: "W6D2-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Aranka",
		project: "Eindopdracht",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "SCRUM",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W1D1-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W1D2-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W1D2-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W1D2-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W1D2-5",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W1D3-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W1D3-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W1D3-4",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W1D3-5",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "Guess-the-number",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W1D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "Kleurentoggle",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Floris",
		project: " Galgje",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W2D1-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W2D1-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W2D2-1",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W2D2-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W2D2-3",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W2D3-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W2D3-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W2D3-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W2D4-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W2D4-2",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W2D4-3",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "Filmzoeker",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W3D1-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W3D1-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W3D1-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W3D1-4",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W3D2-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W3D2-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W3D2-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W3D3-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W3D3-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W3D3-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W3D3-4",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W3D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W3D4-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "Todo-List",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W4D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W4D2-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "W4D2-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W4D2-4",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W4D3-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W4D3-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Floris",
		project: "W4D3-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W4D3-4",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W4D3-5",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "Next-Level CSS",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W5D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Floris",
		project: "Lil_Playlist",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "W6D1-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Floris",
		project: "W6D2-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Floris",
		project: "Eindopdracht",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "SCRUM",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W1D1-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W1D2-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W1D2-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W1D2-3",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W1D2-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W1D2-5",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W1D3-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W1D3-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W1D3-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W1D3-5",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "Guess-the-number",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W1D4-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "Kleurentoggle",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Hector",
		project: " Galgje",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W2D1-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W2D1-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W2D2-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W2D2-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W2D2-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W2D3-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W2D3-2",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W2D3-3",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W2D4-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W2D4-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W2D4-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "Filmzoeker",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W3D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W3D1-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W3D1-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "W3D1-4",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W3D2-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W3D2-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W3D2-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W3D3-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W3D3-2",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W3D3-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W3D3-4",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W3D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W3D4-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "Todo-List",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W4D2-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W4D2-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W4D2-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W4D2-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W4D3-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "W4D3-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W4D3-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Hector",
		project: "W4D3-5",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "Next-Level CSS",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W5D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Hector",
		project: "Lil_Playlist",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W6D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Hector",
		project: "W6D2-1",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Hector",
		project: "Eindopdracht",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "SCRUM",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W1D1-1",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W1D2-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W1D2-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W1D2-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W1D2-4",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W1D2-5",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W1D3-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W1D3-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W1D3-4",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W1D3-5",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "Guess-the-number",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W1D4-1",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "Kleurentoggle",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "Galgje",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W2D1-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W2D1-2",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W2D2-1",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W2D2-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W2D2-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W2D3-1",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W2D3-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W2D3-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W2D4-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W2D4-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "Filmzoeker",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W3D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W3D1-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W3D1-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W3D1-4",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W3D2-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W3D2-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W3D2-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W3D3-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W3D3-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W3D3-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W3D3-4",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W3D4-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W3D4-2",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "Todo-List",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W4D2-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W4D2-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "W4D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W4D2-4",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W4D3-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Martina",
		project: "W4D3-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W4D3-4",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W4D3-5",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Martina",
		project: "Next-Level CSS",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "W5D4-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "Lil_Playlist",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W6D1-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Martina",
		project: "W6D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Martina",
		project: "Eindopdracht",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "SCRUM",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W1D1-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W1D2-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W1D2-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W1D2-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W1D2-5",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W1D3-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W1D3-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W1D3-4",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W1D3-5",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "Guess-the-number",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W1D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "Kleurentoggle",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "Galgje",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W2D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W2D1-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W2D2-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W2D2-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W2D2-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W2D3-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W2D3-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W2D3-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W2D4-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W2D4-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "Filmzoeker",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W3D1-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W3D1-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W3D1-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W3D1-4",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W3D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W3D2-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W3D2-3",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W3D3-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W3D3-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W3D3-3",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W3D3-4",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W3D4-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W3D4-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "Todo-List",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W4D2-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W4D2-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W4D2-3",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W4D2-4",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W4D3-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "W4D3-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W4D3-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "W4D3-4",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W4D3-5",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Maurits",
		project: "Next-Level CSS",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W5D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "Lil_Playlist",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Maurits",
		project: "W6D1-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Maurits",
		project: "W6D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Maurits",
		project: "Eindopdracht",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "SCRUM",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W1D1-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W1D2-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W1D2-3",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W1D2-4",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W1D2-5",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W1D3-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W1D3-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W1D3-4",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W1D3-5",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "Guess-the-number",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W1D4-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "Kleurentoggle",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "Galgje",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W2D1-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W2D1-2",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W2D2-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W2D2-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W2D2-3",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W2D3-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W2D3-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W2D3-3",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W2D4-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W2D4-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W2D4-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "Filmzoeker",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W3D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W3D1-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W3D1-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W3D1-4",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W3D2-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W3D2-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W3D2-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W3D3-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W3D3-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W3D3-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W3D3-4",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W3D4-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W3D4-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "Todo-List",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W4D2-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W4D2-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W4D2-3",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W4D2-4",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W4D3-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W4D3-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Rahima",
		project: "W4D3-4",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W4D3-5",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "Next-Level CSS",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Rahima",
		project: "W5D4-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "Lil_Playlist",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Rahima",
		project: "W6D1-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "W6D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Rahima",
		project: "Eindopdracht",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "SCRUM",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W1D1-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W1D2-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W1D2-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W1D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W1D2-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W1D2-5",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W1D3-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W1D3-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W1D3-4",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W1D3-5",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "Guess-the-number",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W1D4-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "Kleurentoggle",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "Galgje",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W2D1-1",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W2D1-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W2D2-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W2D2-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W2D2-3",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W2D3-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W2D3-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W2D3-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W2D4-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W2D4-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "Filmzoeker",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W3D1-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W3D1-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W3D1-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W3D1-4",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W3D2-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W3D2-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W3D2-3",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W3D3-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W3D3-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W3D3-3",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W3D3-4",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W3D4-1",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W3D4-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "Todo-List",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W4D2-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W4D2-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W4D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W4D2-4",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W4D3-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "W4D3-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W4D3-4",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W4D3-5",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "Next-Level CSS",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W5D4-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Sandra",
		project: "Lil_Playlist",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Sandra",
		project: "W6D1-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Sandra",
		project: "W6D2-1",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Sandra",
		project: "Eindopdracht",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "SCRUM",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W1D1-1",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W1D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W1D2-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W1D2-4",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W1D2-5",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W1D3-1",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W1D3-2",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W1D3-4",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W1D3-5",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "Guess-the-number",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W1D4-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "Kleurentoggle",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "Galgje",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W2D1-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W2D1-2",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W2D2-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W2D2-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W2D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W2D3-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W2D3-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W2D3-3",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W2D4-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W2D4-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W2D4-3",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "Filmzoeker",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W3D1-1",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W3D1-2",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D1-3",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W3D1-4",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D2-1",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W3D2-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W3D2-3",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D3-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D3-2",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W3D3-3",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W3D3-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W3D4-2",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "Todo-List",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W4D2-1",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W4D2-2",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W4D2-3",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W4D2-4",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "W4D3-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W4D3-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W4D3-3",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W4D3-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Wietske",
		project: "W4D3-5",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Wietske",
		project: "Next-Level CSS",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W5D4-1",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "Lil_Playlist",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Wietske",
		project: "W6D1-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "W6D2-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Wietske",
		project: "Eindopdracht",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "SCRUM",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W1D1-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W1D2-1",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W1D2-2",
		diffFactor: 1,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W1D2-3",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W1D2-4",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W1D2-5",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W1D3-1",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W1D3-2",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W1D3-4",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W1D3-5",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "Guess-the-number",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W1D4-1",
		diffFactor: 4,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "Kleurentoggle",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "Galgje",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W2D1-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W2D1-2",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W2D2-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W2D2-2",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W2D2-3",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W2D3-1",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W2D3-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W2D3-3",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W2D4-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W2D4-2",
		diffFactor: 4,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W2D4-3",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "Filmzoeker",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W3D1-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W3D1-2",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W3D1-3",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W3D1-4",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W3D2-1",
		diffFactor: 1,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W3D2-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W3D2-3",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W3D3-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W3D3-2",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W3D3-3",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W3D3-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W3D4-1",
		diffFactor: 2,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W3D4-2",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "Todo-List",
		diffFactor: 3,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W4D2-1",
		diffFactor: 2,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W4D2-2",
		diffFactor: 3,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W4D2-3",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W4D2-4",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W4D3-1",
		diffFactor: 3,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W4D3-2",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "W4D3-3",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W4D3-4",
		diffFactor: 3,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W4D3-5",
		diffFactor: 2,
		funFactor: 3
	},
	{
		name: "Storm",
		project: "Next-Level CSS",
		diffFactor: 4,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "W5D4-1",
		diffFactor: 2,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "Lil_Playlist",
		diffFactor: 1,
		funFactor: 2
	},
	{
		name: "Storm",
		project: "W6D1-1",
		diffFactor: 4,
		funFactor: 4
	},
	{
		name: "Storm",
		project: "W6D2-1",
		diffFactor: 1,
		funFactor: 1
	},
	{
		name: "Storm",
		project: "Eindopdracht",
		diffFactor: 3,
		funFactor: 3
	}
];

export default ChartData;
