// Write your types here! ✨

export type River = RiverClearing | RiverPath | RiverStream | RiverTown;

export type RiverCommon = {
	name: string;
	proximity: number;
	treasure?: string;
};

export type RiverClearing = RiverCommon & {
	type: "clearing";
	through?: River;
};

export type RiverPath = RiverCommon & {
	type: "path";
	through: River;
	shortcut?: River;
};

// export type RiverStream = RiverCommon & {
// 	area: "middle" | "begin" | "end";
// 	upstream?: River;
// 	downstream?: River;
// }

export type RiverTown = RiverCommon & {
	type: "town";
	through?: River;
	around?: River;
};

export type StreamCommon = RiverCommon & {
	type: "stream";
};

export type StreamBegin = StreamCommon & {
	downstream: River;
	area: "begin";
};

export type StreamMiddle = StreamCommon & {
	upstream: River;
	downstream: River;
	area: "middle";
};

export type StreamEnd = StreamCommon & {
	upstream: River;
	area: "end";
};

export type RiverStream = StreamBegin | StreamEnd | StreamMiddle;

let current: River | undefined = {
	name: "Woesong Bridge",
	proximity: 100,
	through: {
		area: "middle",
		downstream: {
			around: {
				area: "end",
				upstream: {
					name: "Vizima",
					proximity: 30,
					type: "clearing",
				},
				name: "White Orchard Creek",
				proximity: 25,
				type: "stream",
			},
			name: "Oxenfurt Gate",
			proximity: 40,
			through: {
				name: "Vergen Tunnel",
				proximity: 20,
				shortcut: {
					proximity: 30,
					name: "Crow's Perch",
					type: "town",
				},
				through: {
					area: "begin",
					downstream: {
						through: {
							treasure: "rare playing cards",
							name: "Reuven's Treasure",
							proximity: 0,
							type: "clearing",
						},
						name: "Gate of the Hierarch",
						proximity: 10,
						type: "town",
					},
					name: "Founders Stream",
					proximity: 25,
					type: "stream",
				},
				type: "path",
			},
			type: "town",
		},
		name: "Yavina River",
		proximity: 50,
		type: "stream",
		upstream: {
			name: "Merchants' Trail",
			proximity: 65,
			through: {
				name: "Beauclair",
				proximity: 70,
				type: "town",
			},
			type: "path",
		},
	},
	type: "path",
};

let treasure;

while (current) {
	console.log(`At: ${current.name}`);

	switch (current.type) {
		case "clearing":
			current = current.through;
			break;

		case "path":
			current =
				current.shortcut &&
				current.shortcut.proximity < current.through.proximity
					? current.shortcut
					: current.through;
			break;

		case "town":
			if (!current.around) {
				current = current.through;
			} else if (!current.through) {
				current = current.around;
			} else {
				current =
					current.around.proximity < current.through.proximity
						? current.around
						: current.through;
			}
			break;

		case "stream":
			switch (current.area) {
				case "begin":
					current = current.downstream;
					break;
				case "end":
					current = current.upstream;
					break;
				case "middle":
					current =
						current.downstream.proximity < current.upstream.proximity
							? current.downstream
							: current.upstream;
					break;
			}
	}

	if (!current) {
		console.log("Hmm. Dead end.");
	} else if (current.treasure) {
		treasure = current.treasure;
		break;
	}
}

if (treasure) {
	console.log(`This will do nicely: ${treasure}.`);
} else {
	console.log("Nothing going.");
}
