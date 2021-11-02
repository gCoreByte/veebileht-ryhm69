function getCookie() {
    // https://stackoverflow.com/questions/5968196/how-do-i-check-if-a-cookie-exists
    let value_or_null = (document.cookie.match(/^(?:.*;)?\s*currentMode\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
    if (value_or_null == null) {
        document.cookie = "currentMode=light";
        value_or_null = "light";
    }
    return value_or_null;
}

function flipCookie() {
    let value = getCookie();
    if (value === "light") {
        document.cookie = "currentMode=dark";
    }
    else {
        document.cookie = "currentMode=light";
    }
}

function btn() {
    flipCookie()
    let value = getCookie();
    if (value === "light") {
        // muuda valgeks
    }
    else {
        // muuda tumedaks
    }
}