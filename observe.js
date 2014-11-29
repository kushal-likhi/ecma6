var todos = ["eat", "code", "code", "sleep"];

// Using Array.observe
Array.observe(todos, function (changes) {
    console.log(changes);
});
todos.pop();

todos.push("sleep");

// Similarly with Object.observe
var obj = {};
Object.observe(obj, function (changes) {
    console.log(changes);
});
obj.name = "yoyo";
obj.name = 33;