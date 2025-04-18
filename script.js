
let fontSize = 16;

function loadSong(path, audioUrl, videoUrl) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById('songDisplay').innerHTML = data;
      document.getElementById('audioLink').href = audioUrl;
      document.getElementById('videoLink').href = videoUrl;
    });
}

function increaseFont() {
  fontSize += 2;
  document.querySelector('.right-column').style.fontSize = fontSize + 'px';
}

function decreaseFont() {
  fontSize = Math.max(12, fontSize - 2);
  document.querySelector('.right-column').style.fontSize = fontSize + 'px';
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
