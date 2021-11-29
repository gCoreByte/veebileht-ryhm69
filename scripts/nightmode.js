const lightref = document.createElement("link");
lightref.rel = "stylesheet";
lightref.type = "text/css";
lightref.href = "../css/tanavpaev.css";

const darkref = document.createElement("link");
darkref.rel = "stylesheet";
darkref.type = "text/css";
darkref.href = "../css/tanavoo.css";



function setBackgroundOnLoad() {
    // https://stackoverflow.com/questions/2099517/how-to-load-in-an-external-css-file-dynamically
    value = getCookie()
    if (value === "light") {
        document.getElementsByTagName("head")[0].appendChild(lightref);
    }
    else {
        document.getElementsByTagName("head")[0].appendChild(darkref);
    }
}


function getCookie() {
    // https://stackoverflow.com/questions/5968196/how-do-i-check-if-a-cookie-exists
    let value_or_null = (document.cookie.match(/^(?:.*;)?\s*currentMode\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
    if (value_or_null == null) {
        document.cookie = "currentMode=dark;path=/";
        value_or_null = "dark";
    }
    return value_or_null;
}

function flipCookie() {
    let value = getCookie();
    if (value === "light") {
        document.cookie = "currentMode=dark;path=/";
        location.reload();
    }
    else {
        document.cookie = "currentMode=light;path=/";
        location.reload();
    }
}
