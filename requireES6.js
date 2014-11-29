var extension = '.es6';

var fs = require('fs'),
    Module = require('module'),
    originalLoader = Module._extensions[extension],
    traceur = require("traceur");


function hookES6Require(transformer) {
    Module._extensions[extension] = function (module, filename) {
        var ret = transformer(fs.readFileSync(filename, 'utf8'), filename);
        module._compile(ret, filename);
    };
}

function unhookES6Require() {
    Module._extensions[extension] = originalLoader;
}

hookES6Require(function (contents, fileName) {
    var result = traceur.compile(contents, {
        filename: fileName,
        modules: "inline"
    });

    if (result.errors && result.errors.length > 0) {
        console.log(result);
    }

    return (fs.readFileSync(traceur.RUNTIME_PATH, { encoding: "utf8" }) + "\n\n" + result.js);
});
