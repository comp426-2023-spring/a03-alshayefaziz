#!/usr/bin/env node

import {getRandom, checkValid, checkWin, play, rps} from "../lib/rpsls.js"
import minimist from "minimist";

var arg = minimist(process.argv.slice(2));

// setup help and rule messages

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `Rules for Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

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
    console.log(Json.stringify(rps(humanTurn)));
    process.exit(0);
} catch (e) {
    console.log(help);
    console.log(rules);
    process.exit(0);
}