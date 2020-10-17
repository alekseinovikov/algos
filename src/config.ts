import {PrimeNumberFinder} from "./prime";

export interface AlgoModule {
    run(close: () => void): void;
}

type ModuleRecordType = Record<string, any>;
export const modules: ModuleRecordType = {
    "prime": PrimeNumberFinder
};
