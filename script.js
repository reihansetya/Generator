//variabel
const add = document.getElementById("myButton");
const txtArea = document.getElementById("area");
const input = document.getElementById("myInput");
const inputWangy = document.getElementById("myInputWangy");
const reload = document.getElementById("reload");
const wangy = document.getElementById("wangy");

//gonta ganti navbar
function opentag(namatag) {
  const x = document.getElementsByClassName("container");
  for (let i = 0; i < x.length; i++) {
    console.log(x.length);
    x[i].style.display = "none";
  }
  document.getElementById(namatag).style.display = "flex";
  if (namatag == "wangy") {
    const p = "wangy";
    const inp = prompt("masukan password: ");
    if (inp == p) {
      alert("selamat datang");
    } else {
      alert("password salah:(");
      wangy.style.display = "none";
    }
  }
}



// fungsi yang kalo di select bakal ke copy
function copyText() {
  const copyText = document.getElementById("area");
  copyText.select();
  document.execCommand("copy");
  alert("dicopy ke clipboard");
}

// dosen
const addDosen = document.getElementById("myButtonDosen");
const txtAreaDosen = document.getElementById("areaDosen");
const inputNama = document.getElementById("myInputNama");
const inputKelas = document.getElementById("myInputKelas");
const inputWaktu = document.getElementById("myInputWaktu");
const inputKeperluan = document.getElementById("myInputKeperluan");

addDosen.addEventListener("click", function () {
  let txtNama = inputNama.value;
  let txtKelas = inputKelas.value;
  let txtWaktu = inputWaktu.value;
  let txtKeperluan = inputKeperluan.value;

  if (txtNama == "") {
    alert("nama ente saha");
  } else if (txtWaktu == "") {
    alert("waktunya kapan atuh");
  } else if (txtWaktu == "") {
    alert("kelasnya diisi ya");
  } else if (txtKeperluan == "") {
    alert("keperluannya diisi ya");
  } else {
    let txtAreaFullDosen = txtAreaDosen.value;
    function txtIsiDosen() {
      txtAreaDosen.append(`Assalamualaikum, maaf mengganggu waktunya, selamat ${txtWaktu}, perkenalkan nama saya ${txtNama},saya dari kelas ${txtKelas}\n\n${txtKeperluan}, terimakasih`);
    }
    if (txtAreaFullDosen != "") {
      alert("klik ulangi, teks tidack bisa ditiban");
    } else {
      txtIsiDosen();
    }
    inputNama.value = "";
    inputKelas.value = "";
    inputWaktu.value = "";
    inputKeperluan.value = "";

    // let txtBaru = document.createTextNode(txt);

    // reload.addEventListener('click', function () {
    //     txtAreaDosen.innerText    = ''
    // })
    // add.style.display = 'none'
  }
});

// copy dosen
function copyTextDosen() {
  const copyText = document.getElementById("areaDosen");
  copyText.select();
  document.execCommand("copy");
  alert("dicopy ke clipboard");
  txtAreaDosen.innerText = "";
}

// dark mode
const gelap = document.getElementById("gelap");
const body = document.querySelectorAll("body");
const header = document.querySelector("header");
const nav = document.querySelectorAll("a");
const main = document.querySelector(".main");
const span = document.querySelectorAll("span");
const img = document.querySelector("img");
const ball = document.querySelector(".ball");
const btnGelap = document.querySelectorAll(".btn-gelap");

gelap.addEventListener("click", function () {
  body.forEach(function (e) {
    e.classList.toggle("gelap");
  });
  header.classList.toggle("gelap");
  // nav.classList.toggle('gelap')
  nav.forEach(function (e) {
    e.classList.toggle("gelap");
  });
  main.classList.toggle("gelap");
  span.forEach(function (e) {
    e.classList.toggle("gelap");
  });
  img.classList.toggle("gelap");
  ball.classList.toggle("gelap");
  gelap.classList.toggle("gelap");
  btnGelap.forEach(function (e) {
    e.classList.toggle("gelap");
  });
});

// meme
const meme = document.getElementById("meme");
const memeToday = document.querySelector(".meme-today");
const memeAcak = document.querySelector(".meme-acak");
const today = document.getElementById("today");
const btnMeme = document.getElementById("btnMeme");
const acak = document.getElementById("acak");

let imgArr = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "41.jpg",
  "42.jpg",
  "43.jpg",
  "44.jpg",
  "45.jpg",
  "46.jpg",
  "47.jpg",
  "48.jpg",
  "49.jpg",
  "50.jpg",
  "51.jpg",
  "52.jpg",
  "53.jpg",
  "54.jpg",
  "55.jpg",
  "56.jpg",
  "57.jpg",
  "58.jpg",
  "59.jpg",
  "60.jpg",
  "61.jpg",
  "62.jpg",
  "63.jpg",
];

function displayImg() {
  var num = Math.floor(Math.random() * imgArr.length);
  document.canvas.src = "img/meme/" + imgArr[num];
}

btnMeme.addEventListener("click", function () {
  let nume = Math.floor(Math.random() * imgArr.length);
  document.canvas.src = "img/meme/" + imgArr[nume];
});

const todaySet1 = setTimeout(display, 30);
const acakSet = setTimeout(displayAcak, 30);

function display() {
  let num = Math.floor(Math.random() * imgArr.length);
  today.src = "img/meme/" + imgArr[num];
}

function displayAcak() {
  let num = Math.floor(Math.random() * imgArr.length);
  acak.src = "img/meme/" + imgArr[num];
}
