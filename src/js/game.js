let canvas;
let world;
let keyboard = new Keyboard();
let currentLevel = level1;
let intervalID = [];
let howToPlayIsOpen = false;
let isMuted = false;
let gameIsOver = false;
let setFullscreen = false;

function init() {
    generateAudios();
    canvas = document.getElementById('playscreenId');
    showgame();
    world = new World(canvas, keyboard, currentLevel);
    startInterval();
};


function startInterval() {
    intervalID.forEach((id) => {
        setInterval(id);
    });
}

function stopInterval() {
    intervalID.forEach((id) => {
        clearInterval(id);
    });
}

function getId(id) {
    return document.getElementById(id);
  }

function showgame() {
    document.getElementById('playscreenId').classList.remove('d-none');
    document.getElementById('startcreenId').classList.add('d-none');
    document.getElementById('buttonPlayId').classList.add('d-none');
    document.getElementById('buttonInfoId').classList.add('d-none');
}


function infofield() {
    document.getElementById('infoscreenId').classList.remove('d-none');
    document.getElementById('buttonPlayId').classList.add('d-none');
    document.getElementById('buttonInfoId').classList.add('d-none');
}

function closeinfofield() {
    document.getElementById('infoscreenId').classList.add('d-none');
    document.getElementById('buttonInfoId').classList.remove('d-none');
    document.getElementById('buttonPlayId').classList.remove('d-none');
}

function returntostart() {
    location.reload();
}

function changeScreen() {
    if (setFullscreen) {
        closeFullscreen();
    } else {
        openFullscreen();
    }
    setFullscreen = !setFullscreen;
}

function openFullscreen() {
    document.getElementById("fullscreenButtonId").src =
    "/src/img/icons/fullscreen-exit-64.png";
    document.getElementById("playscreenId").classList.add("fullscreen");
    document.getElementById("startimgId").classList.add("fullscreen");
    const borderRadiusElements = document.querySelectorAll(".radiuscl");
    borderRadiusElements.forEach((element) => {
        element.classList.replace("radiuscl", "noradiuscl");
    });
}

function closeFullscreen() {
    document.getElementById("fullscreenButtonId").src =
    "/src/img/icons/fullscreen-enter-64.png";
    let canvas = getId("playscreenId");
    canvas.classList.remove("fullscreen");
    document.getElementById("startimgId").classList.remove("fullscreen");
    const borderRadiusElements = document.querySelectorAll(".noradiuscl");
    borderRadiusElements.forEach((element) => {
        element.classList.replace("noradiuscl", "radiuscl");
    });
}