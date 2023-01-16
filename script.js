const usdCurr = 66;
const eurCurr = 74;
function convert (amount, curr) {
    console.log(amount*curr);
}
convert(1000, usdCurr);
convert (500, eurCurr);


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}
showFirstMessage("erer");
console.log(num);


function ret() {
    let num = 50;
    return num;
}
console.log(ret());

const logger = function () {
console.log("dkg");
};

logger ();

const calc = (a, b) => {return a+b};
console.log(calc(5,6));