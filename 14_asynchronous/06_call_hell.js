function wakeUp(cb) {
    setTimeout(() => {
        console.log("Wake Up...");
        cb();
    }, 0);
}

function Brush(cb) {
    setTimeout(() => {
        console.log("Brush Your Teeth...");
        cb();
    }, 1000);
}

function Breakfast(cb) {
    setTimeout(() => {
        console.log("Have Breakfast...");
        cb();
    }, 2000);
}

function Go(cb) {
    setTimeout(() => {
        console.log("Go To Office...");
        cb();
    }, 3000);
}

function Start() {
    setTimeout(() => {
        console.log("Start Working...");
    }, 4000);
}

wakeUp(() => {
    Brush(() => {
        Breakfast(() => {
            Go(() => {
                Start();
            });
        });
    });
});