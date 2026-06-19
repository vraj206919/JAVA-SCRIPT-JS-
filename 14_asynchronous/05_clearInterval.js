
// Clear interval Means When We strat interval (set interval) So the compiler run with time and When We stop the running so we can use set time out.
// And set time to which time the Program can not run .

let Interval = setInterval(()=>{
    
        let time = new Date().toLocaleString();

    console.log("Time :- ",time);
},1000)

setTimeout(()=>{
    clearInterval(Interval);

    console.log("time out");
},5000)