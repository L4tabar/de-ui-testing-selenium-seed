import { Browser, Builder, By, until as Until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome.js';

let driver, by, until;

global.startDriver = async () => {
    const builder = new Builder().forBrowser(Browser.CHROME);
    const options = new chrome.Options();
    options.addArguments('--disable-gpu');
    builder.setChromeOptions(options);

    driver = await builder.build();
    await driver.manage().setTimeouts({ implicit: 30000 });
}

Object.defineProperty(global, "driver", {
    get() {
        if (!driver) {
            throw new Error("Initialize driver! await startDriver();")
        }
        return driver;
    },
    set() {
        // noop
    }
});

Object.defineProperty(global, "by", {
    get() {
        if (!by) {
            by = By;
        }
        return by;
    },
    set() {
        // noop
    }
});

Object.defineProperty(global, "until", {
    get() {
        if (!until) {
            until = Until;
        }
        return until;
    },
    set() {
        // noop
    }
});