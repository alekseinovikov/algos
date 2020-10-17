import {Interface} from "readline";
import {AlgoModule} from "./config";

export class PrimeNumberFinder implements AlgoModule {

    constructor(private rl: Interface) {
    }

    run(closeCallback: () => void): void {
        console.log("Hello from prime")
        closeCallback();
    }

}
