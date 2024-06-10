// const minimist = require("minimist");

// const argNew = minimist(process.argv.slice(2));
// console.log(argNew.name);

// const sum = () => {
//     console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// }

// const multiply = () => {
//     console.log(`The multiplication of 2 and 3 is: ${2 * 3}`);
// }

// const measureTime = () => {
//     console.time("sum");
//     sum();
//     console.timeEnd("sum");
//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// }

// measureTime();

// const ProgressBar = require("progress");

// const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
//     total: 20,
// })

// const timer = setInterval(() => {
//     bar.tick();
//     if(bar.complete) {
//         clearInterval(timer);
//     }
// }, 200)

const chalk = require("chalk");
console.log(chalk.yellow("This is nodejs tutorial"));