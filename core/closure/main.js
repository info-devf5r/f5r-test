var name = "Mozilla";

function makeFunc() {

    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();

myFunc();


