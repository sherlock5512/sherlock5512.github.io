// this file contains a function that sets DIV to have the logo of the curent browser in it

const divID = "browserLogo";
var depFail = false;

function depTest() {
    if (typeof GetBrowserName != "function") {
        alert('Dependency GetBrowser Missing Logo Will not update');
        depFail = true;
        return "fail";
    }
    else return true;
}

function ChooseLogo(browser) {
    var imgPath = ""
    switch(browser) {
        case "Firefox":
            imgPath = "IMG/Firefox.svg";
            break;
        case "Opera":
            imgPath = "IMG/Opera.svg";
            break;
        case "IE":
            imgPath = "IMG/IE.svg";
            break;
        case "Edge":
            imgPath = "IMG/Edge.svg";
            break;
        case "Chrome":
            imgPath = "IMG/Chrome.svg";
            break;
        case "Safari":
            imgPath = "IMG/Safari.svg";
            break;
        case "unknown":
        default:
            imgPath = "IMG/unknown.svg"
            break;
    }
    return imgPath;
}

function SetLogo() {
    browser = GetBrowserName()
    logoPath = ChooseLogo(browser)
    logoIMG = document.getElementById("browserLogo")
    logoIMG.src = logoPath
}