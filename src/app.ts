import readline from "readline";
import {AlgoModule, modules} from "./config";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Supported algos: ${modules}, type one to run algo: `, (answer) => {
    const module = modules[answer];
    if (!module) {
        console.log("Wrong algo type!");
        rl.close();
        return;
    }

    const instance = module.constructor.apply(rl) as AlgoModule;
    instance.run(() => rl.close());
});

rl.question("Enter maximal prime number: ", (answer) => {
    const number = Number(answer);

    console.log(`You wrote: ${number}`);

    rl.close();
});
