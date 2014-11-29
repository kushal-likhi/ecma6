
module Counter{
    var n = 0;
export function inc() { return ++n; }
export function dec() { return --n;}
export function cur() { return n;}
}

console.log(Counter.n); // undefined.
console.log(Counter.inc()); // 1
console.log(Counter.dec()); // 0
console.log(Counter.cur()); // 0