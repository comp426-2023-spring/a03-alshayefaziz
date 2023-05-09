#!/usr/bin/env node

import {getRandom, checkValid, checkWin, play, rpsls} from "../lib/rpsls.js"
import minimist from "minimist";

var arg = minimist(process.argv.slice(2));

// setup help and rule messages

const help = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`;

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors
`;

// display help and rules if pormpted

if (arg.h || arg.help) {
    console.log(help);
    process.exit(0);
}

if (arg.r || arg.rules) {
    console.log(rules);
    process.exit(0);
}

let humanTurn = arg._[0];

try {
    console.log(Json.stringify(rpsls(humanTurn)));
    process.exit(0);
} catch (e) {
    console.log(help);
    console.log(rules);
    process.exit(0);
}