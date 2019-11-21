import { setDefaultTimeout } from "cucumber";
import { expect as chaiExpect } from "chai";

setDefaultTimeout(30e3);

let expect;
Object.defineProperty(global, "expect", {
    get() {
        if (!expect) {
            expect = chaiExpect;
        }
        return expect;
    },
    set() {
        // Noop
    },
});