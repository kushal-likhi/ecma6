var fs = require('fs');

function *Counter(){
    var n = 0;
    while(1<2) {
        yield n;
        ++n
    }
}

var CountIter = new Counter();



console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());



// Would result in { value: 0, done: false }



//Async loop
function* haiku(){
    console.log('I kill an ant');
    yield null; // the yield keyword requires a value, so I put null
    console.log('and realize my three children');
    yield null;
    console.log('have been watching.');
    yield null;
    console.log('- Kato Shuson');
}

var g = haiku();
function next(){
    if (g.next().done) return;
    setTimeout(next, 1000);
}
next();




////////////////////////////////////

function* consumer(){
    while (true){
        try {
        var val = yield null;
        console.log('Got value', val);
    }catch(e){
        console.log('You threw an error but I caught it.')
    }
    }
}


var c = consumer();

c.next(2);
c.next(3);
c.next(4);
c.next(2);

c.throw(new Error("YO! ERROR!"));



////////////////////////////////////////////////////////////////////////////////


function readFile(filepath){
    return function(callback){
        fs.readFile(filepath, callback);
    }
}



run(function*(){
    try{
        var p = yield readFile('proxy.js');
        var s = yield readFile('set.js');
        console.log(p, s);
    }catch(e){
        console.log(e.message);
    }
});


function run(genfun){
    var gen = genfun();
    function next(err, answer){
        var res;
        if (err){
            return gen.throw(err);
        }else{
            res = gen.next(answer);
        }
        if (!res.done){
            res.value(next);
        }
    }
    // Kick off the async loop
    next();
}