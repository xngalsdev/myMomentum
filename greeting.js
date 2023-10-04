// 페이지가 새로고침 될 때 실행
document.addEventListener("DOMContentLoaded", function() {
    // 요소들을 변수에 저장
    const frmLogin = document.querySelector("#frmLogin");
    const inputLogin = document.querySelector("#frmLogin input");
    const greeting = document.getElementById("greeting");
    const HIDDEN_CLASSNAME = "hidden";
    const KEY_USERNAME = "userName";

    // 로그인 되었을 때 실행되는 함수
    function Clickbutton(event) {
        event.preventDefault();
        frmLogin.classList.add(HIDDEN_CLASSNAME);
        const userName = inputLogin.value;
        localStorage.setItem(KEY_USERNAME, userName);
        displayHello(userName);
    }

    // Hello "이름" 메세지를 화면에 띄우는 함수
    function displayHello(argName) {
        const greeting = document.getElementById("greeting");
        if (greeting) {
            greeting.innerText = `Hello ${argName}`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
        }
    }
    // 로컬 스토리지에서 이름을 가져오는 명령어
    const lsuserName = localStorage.getItem("userName");

    // 이름이 없을 때 있을 때 따른 설정
    if (lsuserName === null) {
        frmLogin.classList.remove(HIDDEN_CLASSNAME);
        frmLogin.addEventListener("submit", function(event) {
            Clickbutton(event);
        });
    } else {
        displayHello(lsuserName);
    }
});
