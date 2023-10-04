// 명언을 저장하는 배열
const quotes = [
    {
        quote:"오늘을 즐겨라, 어제는 이미 없고 내일은 아직 오지 않았다." ,
        author:"알랭"
    },
    {
        quote:"행복은 우리 마음의 선택이다." ,
        author:"루시우스 아네우스 세네카"
    },
    {
        quote:"계획 없는 목표는 그냥 소망에 불과하다." ,
        author:"알렉스 런더"
    },
    {
        quote:"노력하지 않으면 아무것도 얻을 수 없다." ,
        author:"리얼 굿맨"
    },
    {
        quote:"지식은 힘의 원천이다."  ,
        author:"프랜시스 베이컨"
    },
    {
        quote:"삶은 변화의 과정이며, 변화는 성장의 시작이다." ,
        author:"헤세"
    },
    {
        quote:"실패는 성공의 어머니이다."  ,
        author:"알버트 아인슈타인"
    },
    {
        quote:"모든 것은 가능하다. 단, 시간과 노력이 필요하다." ,
        author:"더스틴 호프만"
    },
    {
        quote:"사랑과 인내는 모든 것을 이긴다." ,
        author:"베네딕토스 스파이노자"
    },
    {
        quote:"작은 것을 중요하게 여기고 큰 것을 간과하지 마라."  ,
        author:"에픽토테우스"
    }

]
// HTMP에서 명언과 작가 정보를 가져옴
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// 초기 명언과 작가 정보를 설정
quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";
// 배열에서 무작위로 명언을 가져옴
const todayquote = quotes[Math.floor(Math.random()*quotes.length)];
// 선택된 명언과 작가를 화면에 표시
quote.innerText = todayquote.quote;
author.innerText = todayquote.author
