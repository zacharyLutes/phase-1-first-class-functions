function receivesAFunction(func) {
    func();
    console.log("Function has been run");
}
function spy() {
    return console.log("HI!!");
}
function func() {
    return "Gosh, I'm doing a good job functioning, aren't I?"
}
receivesAFunction(spy);

function returnsANamedFunction() {
    const babyFunction = function() {
        return "Waaah! I'm a baby function!";
    }
    return babyFunction;
}

const progeny = returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return () => console.log("We Did It!!");
}

