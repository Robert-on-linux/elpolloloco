
const audiosCache = [];

const audios = [
  {
    name: 'background',
    src: '/src/audio/background2.wav',
    loop: true,
    volume: 0.1
  },
  {
    name: 'bottleCollected',
    src: '/src/audio/bottleCollected.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'bottleSmashed',
    src: '/src/audio/bottleSmashed.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'characterJump',
    src: '/src/audio/characterJump.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'characterHurt',
    src: '/src/audio/characterHurt.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'characterSnore',
    src: '/src/audio/characterSnore.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'characterThrow',
    src: '/src/audio/characterThrow.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'characterWalk',
    src: '/src/audio/characterWalk.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'coinCollected',
    src: '/src/audio/coinCollected.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'unstoppable',
    src: '/src/audio/unstoppable.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'chickenHit',
    src: '/src/audio/chickenHit.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'endboss',
    src: '/src/audio/endboss2.mp3',
    loop: true,
    volume: 0.2
  },
  {
    name: 'gameLost',
    src: '/src/audio/gameLost.mp3',
    loop: false,
    volume: 0.4
  },
  {
    name: 'gameWon',
    src: '/src/audio/gameWon.mp3',
    loop: false,
    volume: 0.4
  }
];

function generateAudios() {
  audios.forEach((audio) => {
    const audioElement = new Audio(audio.src);
    audioElement.loop = audio.loop;
    audioElement.volume = audio.volume;
    audiosCache[audio.name] = audioElement;
  });
}

function playAudio(name) {
  const selectedAudio = audiosCache[name];
  selectedAudio.play();
}

function pauseAudio(name) {
  const selectedAudio = audiosCache[name];
  selectedAudio.pause();
}

function toggleMute() {
  if (isMuted) {
    unmuteAudios();
  } else {
    muteAudios();
  }
  isMuted = !isMuted;
}

function muteAudios() {
  for (const key in audiosCache) {
    audiosCache[key].muted = true;
  }
  // document.getElementById("muteOrAudio").src = '/src/img/icons/sound.png';
}

function unmuteAudios() {
  for (const key in audiosCache) {
    audiosCache[key].muted = false;
  }
  // document.getElementById("muteOrAudio").src = '/src/img/icons/mute.png';
}
