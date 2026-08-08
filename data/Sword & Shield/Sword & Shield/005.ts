import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		546,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attach",
				fr: "Accrochage",
				es: "Pegarse",
				it: "Appiccicoso",
				pt: "Conectar",
				de: "Festkleben"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 436204,
				tcgplayer: 208271
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 436204,
				tcgplayer: 208271
			}
		},
	],

	description: {
		en: "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth."
	},

}

export default card
