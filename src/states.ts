export type GameState = {
	text: String
}

export const STATE: {[index: string]: GameState} = {
	INITIAL: {
		text: `
		GUESS!
		`
	},
	LESSER: {
		text: `
		<
		`
	},
	GREATER: {
		text: `
		>
		`
	},
	DEFEAT: {
		text: `
		:(
		`
	},
	VICTORY: {
		text: `
		$$$
		`
	},
}