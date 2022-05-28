async function check() {
    const requestURL = 'https://raw.githubusercontent.com/Russell2259/barjsondata/main/CurrentVersion.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const versiondata = await response.json();
    loadData(versiondata);
}
function loadData(obj) {
    if (`${obj['stableVersion']}` === '1.7.3sandbox' || `${obj['sandboxVersion']}` === '1.7.3sandbox') {
        localStorage.setItem('outdated', 'false');
    } else {
        localStorage.setItem('outdated', 'true');
        alert(`${obj['message']}`);
        window.open(`${obj['download']}`, '_blank');
    }
}
check();

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

var currentdate = new Date();
var datetime = "Last saved: " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " | "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes()
document.getElementById("date").innerHTML = datetime;

function update() {
    localStorage.setItem('updated', currentdate);
    window.close();
}

setInterval(function updateTheme() {
    const currentTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', currentTheme);
}, 1);

function setCloak() {
    const titleInput = document.getElementById("title").value;
    const iconInput = document.getElementById("icon").value;
    localStorage.setItem('cloaktitle', titleInput);
    localStorage.setItem('cloakicon', iconInput);
}

function fetchCloak() {
    const currentTitle = localStorage.getItem('cloaktitle');
    const currentIcon = localStorage.getItem('cloakicon');
    document.title = currentTitle;
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = currentIcon;
}

function showCloak() {
    const currentTitle = localStorage.getItem('cloaktitle');
    const currentIcon = localStorage.getItem('cloakicon');
    document.getElementById("title").innerHTML = currentTitle
    document.getElementById("icon").innerHTML = currentIcon
}

function fetchCloakMain() {
    const currentTitle = localStorage.getItem('cloaktitle');
    const currentIcon = localStorage.getItem('cloakicon');
    document.title = currentTitle;
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = currentIcon;
}