import ReactGA from "react-ga";
import CONSTANTS from "../constants";

class Analytics {
    constructor(debugMode = false) {
        this.debugMode = debugMode
    }

    // Analytics initializer
    init() {
        const gaOptions = {
            name: CONSTANTS.ANALYTICS.TRACKER_NAME,
            titleCase: false,
        };

        if (this.debugMode)  {
            gaOptions.debug = true;
            gaOptions.cookieDomain = "none";
        }
        
        ReactGA.initialize(CONSTANTS.ANALYTICS.TRACKING_ID, gaOptions);
        ReactGA.pageview(
            window.location.pathname + window.location.search || "/"
        );
    }

    // Timing functions
    appMountTime() {
        if (window.performance) {
            ReactGA.timing({
                category: "app mount timing",
                variable: "mount",
                value: window.performance.now(),
                label: "app mount time"
            });
        }
    }

    appUsageTime() {
        if (window.performance) {
            ReactGA.timing({
                category: "app usage timing",
                variable: "usage",
                value: window.performance.now(),
                label: "app usage time"
            });
        }
    }

    externalLibLoadTime() {
        if (window.performance) {
            ReactGA.timing({
                category: "external libraries load timing",
                variable: "load",
                value: window.performance.now(),
                label: "external libraries load time"
            });
        }
    }

    // Events
    callEvent(actionMsg) {
        ReactGA.event({
            category: "call",
            action: actionMsg || "user call"
        });
    }

    clickEvent(actionMsg) {
        ReactGA.event({
            category: "click",
            action: actionMsg || "user click"
        });
    }

    submitEvent(actionMsg) {
        ReactGA.event({
            category: "submit",
            action: actionMsg || "user submit"
        });
    }

    mailEvent(actionMsg) {
        ReactGA.event({
            category: "mail",
            action: actionMsg || "user mail"
        });
    }
}

export default new Analytics(process.env.NODE_ENV === "development");