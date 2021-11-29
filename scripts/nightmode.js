// Siin failis on kogu öörežiimi kood

// paneme paika päeva ja öö lingid, et saaks neid laadida html faili sisse kui vaja
const lightref = document.createElement("link");
lightref.rel = "stylesheet";
lightref.type = "text/css";
lightref.href = "../css/colorday.css";

const darkref = document.createElement("link");
darkref.rel = "stylesheet";
darkref.type = "text/css";
darkref.href = "../css/colornight.css";


// funktsioon setBackgroundOnLoad() laeb veebilehe laadimisel õige css faili
function setBackgroundOnLoad() {
    // https://stackoverflow.com/questions/2099517/how-to-load-in-an-external-css-file-dynamically
    let value = getCookie()
    if (value === "light") {
        document.getElementsByTagName("head")[0].appendChild(lightref);
    }
    else {
        document.getElementsByTagName("head")[0].appendChild(darkref);
    }
}

// getCookie() tagastab hetkelise küpsise väärtuse või loob selle defaultides öörežiimile
function getCookie() {
    // https://stackoverflow.com/questions/5968196/how-do-i-check-if-a-cookie-exists
    let value_or_null = (document.cookie.match(/^(?:.*;)?\s*currentMode\s*=\s*([^;]+)(?:.*)?$/)||[undefined,null])[1];
    if (value_or_null == null) {
        document.cookie = "currentMode=dark;path=/";
        value_or_null = "dark";
    }
    return value_or_null;
}

// flipCookie() vahetab ära küpsise väärtuse kui nupule vajutatakse
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
