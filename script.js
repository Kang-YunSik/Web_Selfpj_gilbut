/***** JS 적용하기 START *****/
/* text_iife.js */
// 글자가 지워지고 입력되는 동작 추가

// 즉시 실행 함수로 정의하여 홈페이지를 열자마자 함수 실행
// 즉시 실행 함수 형식: (function name(){실행문};)(매개변수);
(function () {
  // spanEl 객체에 css선택자가 "main h2 span"인 요소 노드 생성
  const spanEl = document.querySelector("main h2 span");
  // 배열 요소 생성
  const txtArr = [
    "Web Publisher",
    "Front-End Developer",
    "Web UI Designer",
    "UX Designer",
    "Back-End Developer",
  ];
  // 배열의 인덱스 초기화
  let index = 0;
  // txtArr 배열에서 index(=0) 요소 하나를 가져와 한 글자마다 ""으로 나누고,
  // currentTxt에 배열요소 만들기
  let currentTxt = txtArr[index].split("");

  // [writeTxt() sudo]
  // 1. spanEl 요소에 currentTxt의 왼쪽부터 요소를 추출하여, textContent에 하나 씩 대입
  // 2. 만약 currentTxt.length가 0이 아니면 (입력할 글자가 남아 있으면)
  //  2-1. writeTxt 메소드를 Math.floor(Math.random() * 100)=두 자리 정수/1000 초 뒤에 수행
  // 3. 만약 currentTxt.length가 0이면 (입력할 글자가 남아있지 않으면)
  //  3-1. currentTxt에 textContent를 한 글자씩 ""로 나눈 것을 대입하고
  //  3-2. deleteTxt 메소드를 3초 뒤에 수행. (글자 삭제를 3초 뒤에 시작해라.)
  function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();
/* end text_iife.js */

/* scroll_request.js */
/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if (browerScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
}
/* end scroll_request.js */

/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
  // ① selector 매개변로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // ② 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // ③ 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // ④ 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}
/* End move.js */

/***** JS 적용하기 END *****/
