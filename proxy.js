var life = Proxy.create({
    get: function (obj, value) {
        return value === "ans" ? 42 : "Meh! Nothing like : " + value
    }
});

console.log(life.ans); // Would return 42

console.log(life.lol); // Would return Meh! Nothing like lol.