const clock = document.querySelector("h1#clock");

// 시각을 나타내는 함수
function getclock(){
    const date = new Date();

    clock.innerText = (`${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2, '0')}`);
}
// 시각을 나타내는 함수를 1초마다 반복하여 호출
setInterval(getclock,1000);