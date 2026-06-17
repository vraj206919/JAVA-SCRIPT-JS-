
const atmPin = 1223;

function Pin(pin) {
    if (pin === atmPin) {
        console.log("Correct ATM PIN");
        console.log("this is a correct answer");
    } else {
        throw new Error("Invalid ATM PIN");
    }
}

try {
    Pin(11313); 
} catch (error) {
    console.log(error.message);
}

// Output

// Invalid ATM pin.