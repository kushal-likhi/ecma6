var traceur = require("traceur");
var fs = require("fs");

var INFILE = './templateStrings.js';
var OUTFILE = './tc/templateStrings.js';

var result = traceur.compile(fs.readFileSync(INFILE, { encoding: "utf8" }), {
    filename: INFILE,
    modules: "inline"
});

if (result.errors && result.errors.length > 0) {
    console.log(result);
}
console.log(traceur.RUNTIME_PATH);

fs.writeFileSync(OUTFILE, fs.readFileSync(traceur.RUNTIME_PATH, { encoding: "utf8" }) + "\n\n" + result.js, { encoding: "utf8" });