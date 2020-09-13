import ReactGA from "react-ga";
import CONSTANTS from "../constants";

function init(debug = false) {
    const gaOptions = {
        titleCase: false,
    };

    if (debug)  {
        gaOptions.debug = true;
        gaOptions.cookieDomain = "none";
    }
    
    ReactGA.initialize(CONSTANTS.ANALYTICS.TRACKING_ID, gaOptions);
    ReactGA.pageview(
        window.location.pathname + window.location.search || "/"
    );
}

function clickEvent(actionMsg) {
    ReactGA.event({
        category: "click",
        action: actionMsg || "user click"
    });
}

function submitEvent(actionMsg) {
    ReactGA.event({
        category: "submit",
        action: actionMsg || "user submit"
    });
}

function callEvent(actionMsg) {
    ReactGA.event({
        category: "call",
        action: actionMsg || "user call"
    });
}

function mailEvent(actionMsg) {
    ReactGA.event({
        category: "mail",
        action: actionMsg || "user mail"
    });
}

export default {
    init,
    clickEvent,
    submitEvent,
    callEvent,
    mailEvent,
};