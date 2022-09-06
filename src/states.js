"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
exports.STATE = {
    INITIAL: {
        text: `
Ich denke gerade an eine Zahl zwischen MIN und MAX, kannst du sie erraten?
Ich wette mit dir, dass du es nicht unter x Versuchen schaffen wirst und wenn doch, dann erwartet dich ein Topf voller Gold - die Größe hängt ganz von deinen Ratekünsten ab!
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
HA dein Glück hat dich verlassen! Du hast all' deine Versuche verbraucht, dein Einsatz ist mein! Versuch es doch noch einmal oder traust du dich nicht?
		`
    },
    VICTORY: {
        text: `
Richtig! Die Kobolde des Regenbogens bringen dir deinen Topf voll Gold!
		`
    },
};
