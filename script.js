
let fontSize = 16;

function loadSong(songId) {
  const songs = {
    song1: {
      title: "అగ్ని మండించు",
      lyrics: `అగ్ని మండించు – నాలో అగ్ని మండించు (2)<br>
పరిశుద్ధాత్ముడా – నాలో అగ్ని మండించు (2)<br><br>
అగ్ని మండుచుండనే – పొద కాలిపోలేదు (2)<br>
ఆ అగ్ని లో నున్నే – నీవు మోషేను దర్శించవే (2) ||అగ్ని||`,
      audio: "https://example.com/audio1",
      video: "https://example.com/video1"
    },
    song2: {
      title: "నీవు నాతో ఉన్నావా",
      lyrics: "నీవు నాతో ఉన్నావా – నా హృదయంలో నివసించావా<br>ప్రతి వేళ నన్ను నడిపించే నీ ప్రేమ నిత్యమా",
      audio: "https://example.com/audio2",
      video: "https://example.com/video2"
    },
    song3: {
      title: "యేసు నా ప్రాణము",
      lyrics: "యేసు నా ప్రాణము – నీవే నా ఆశ్రయము<br>నీ ప్రేమ నన్ను నిత్యం చుట్టుముట్టెను",
      audio: "https://example.com/audio3",
      video: "https://example.com/video3"
    }
  };

  const song = songs[songId];
  document.getElementById('songDisplay').innerHTML = `<h2>${song.title}</h2><p>${song.lyrics}</p>`;
  document.getElementById('audioLink').href = song.audio;
  document.getElementById('videoLink').href = song.video;
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
