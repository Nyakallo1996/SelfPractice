// Module - Encapsulated code (only share minimum)
// ComminJS, every file is a module (by default)



const names = require("./firstModule");
const sayHi = require("../secondModule");
const gi = require("./alternative_way_to_export_and_import")


sayHi("Hakoe")
sayHi(names.john);
sayHi(names.peter);