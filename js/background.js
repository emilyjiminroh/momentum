const images = [
  "겨울왕국.jpg",
  "라이온킹.jpg",
  "라푼젤.jpg",
  "모아나.jpg",
  "뮬란.jpg",
  "소울.jpg",
  "알라딘.png",
  "인사이드아웃.jpg",
  "인크레더블.jpg",
  "주토피아.jpg",
  "토이스토리.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);