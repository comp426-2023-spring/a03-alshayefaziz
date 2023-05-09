#!/usr/bin/env node

import {getRandom, checkValid, checkWin, play, rps} from "../lib/rpsls.js"
import minimist from "minimist";

var arg = minimist(process.argv.slice(2));