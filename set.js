var mySet = new Set();
var todos = ["eat","code","sleep","code","drink","code"];
todos.forEach(function(t) { mySet.add(t); } );
console.log(todos.length); // 6
console.log(mySet.size);  // 4