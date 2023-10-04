// 이미지를 저장하는 배열
const images = ["0.jpg","1.jpg","2.jpg"];
// 이미지를 무작위로 선택하는 Math.random
const todayImage = images[Math.floor(Math.random()*images.length)];
// img라는 요소를 생성
const bgImage = document.createElement("img");
// 이미지 경로
bgImage.src = `img/${todayImage}`;
//Image 라는 클래스 생성
bgImage.classList.add("Image");
// 배경 이미지로 설정
document.body.appendChild(bgImage);