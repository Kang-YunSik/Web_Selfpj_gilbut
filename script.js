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
  // txtArr 배열에서 index(=0) 요소 하나(문자열) 가져와 한 글자마다 ""으로 나누고,
  // currentTxt에 배열요소 만들기
  let currentTxt = txtArr[index].split("");

  // writeTxt() 정의

  function writeTxt() {
    // 1. spanEl 요소에 currentTxt의 왼쪽부터 요소를 추출하여, textContent에 하나 씩 대입
    spanEl.textContent += currentTxt.shift();
    // 2. 만약 currentTxt.length가 0이 아니면 (입력할 글자가 남아 있으면)
    if (currentTxt.length !== 0) {
      //  2-1. writeTxt 메소드를 Math.floor(Math.random() * 100)= 랜덤 두 자리 정수/1000 초 뒤에 수행
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
      // 3. 만약 currentTxt.length가 0이면 (입력할 글자가 남아있지 않으면)
    } else {
      //  3-1. currentTxt에 textContent를 한 글자씩 ""로 나눈 것을 대입하고
      currentTxt = spanEl.textContent.split("");
      //  3-2. deleteTxt 메소드를 3초 뒤에 수행. (글자 삭제를 3초 뒤에 시작해라.)
      setTimeout(deleteTxt, 3000);
    }
  }

  // deleteTxt() 메소드 정의
  function deleteTxt() {
    // 1. currentTxt 배열의 맨 뒤의 요소를 삭제 (한글자 삭제)
    currentTxt.pop();
    // 2. spanEl 요소의 내부 텍스트를 currentTxt의 모든 요소를 ""안에 합쳐서 대입
    spanEl.textContent = currentTxt.join("");
    // 3. 만약 currentTxt의 배열 크기가 0이 아니라면 (지울 요소가 남았다면)
    if (currentTxt.length !== 0) {
      // 3-1. deleteTxt 메소드를 Math.floor(Math.random() * 100)= 랜덤 두 자리 정수/1000 초 뒤에 수행
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
      // 4. currentTxt의 배열에 요소가 없다면
    } else {
      // 4-1. index를 1증가시킨다.
      // % txtArr.length를 한 이유는 index가 5가 되면 0번째 index부터 다시 시작 (5%5=0)
      index = (index + 1) % txtArr.length;
      // 4-2. currentTxt에 txtArr 배열에서 index(=1)의 요소 하나(문자열) 가져와 한 글자마다 ""으로 나누고 대입
      currentTxt = txtArr[index].split("");
      // 4-3. writeTxt 메소드 호출
      writeTxt();
    }
  }
  // ??? 왜 선언한거지?
  // 위에 writeTxt()이 재귀 메소드인거 맞는데, 처음 메소드를 시작하려면 writeTxt() 호출해야됨.
  // 걔가 얘임.
  writeTxt();
})();
/* end text_iife.js */

/* scroll_request.js */
/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */

// CSS 선택자가 header인 것을 요소 headerEl로 정의
const headerEl = document.querySelector("header");
// 윈도우 객체에 scroll 이벤트가 발생하면, function() 수행
window.addEventListener("scroll", function () {
  // ???
  // requestAnimationFrame()은 반복적으로 실행되는 함수에 적용한다.
  // 반복적인 함수는 불필요한 콜스택(callstack)이 지나치게 많다는 점으로 성능 저하를 일으킨다.
  // requestAnimationFrame()를 적용함으로써 최대 1ms로 제한되며 1초에 60번 동작으로 애니메이션이 제한됩니다.
  // 따라서 최적화된 속도로 부드러운 애니메이션을 표현하면서 성능은 최대한 확보할 수 있게되었습니다.
  requestAnimationFrame(scrollCheck);
});

// scrollCheck() 메소드 정의
function scrollCheck() {
  // browerScrollY 변수를 선언하고, window.scrollY이 참이면, window.scrollY값을 대입
  // window.scrollY이 거짓이면, window.pageYOffset값을 대입 (scrollY랑 같은 의미임)
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // browerScrollY이 0보다 크면(=Y축으로 움직였으면)
  if (browerScrollY > 0) {
    // headerEl 요소(hearder 태그)에 class="active"를 추가
    headerEl.classList.add("active");
    // browerScrollY이 0보다 작으면(=Y축으로 움직이지 않았으면)
  } else {
    // headerEl 요소(hearder 태그)에 class="active"를 제거
    headerEl.classList.remove("active");
  }
}
/* end scroll_request.js */

/* move.js */
/* 애니메이션 스크롤 이동 */

// animationMove 함수 변수 정의
const animationMove = function (selector) {
  // ① selector 매개변수로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // ② 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // ③ 이동할 대상의 위치(y 값)
  // ??? 어떤 값이 계산되는 건지
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // ④ 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};

// 스크롤 이벤트 연결하기
// data-animation-scroll='true' 속성을 갖는 태그를 scollMoveEl 요소로 선택
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

for (let i = 0; i < scollMoveEl.length; i++) {
  // scollMoveEl 요소에 click 이벤트가 발생했을 때,
  scollMoveEl[i].addEventListener("click", function (e) {
    // target 변수에 dataset.target 값을 대입해라.
    const target = this.dataset.target;
    // target을 매개변수로 animationMove() 메소드 호출.
    animationMove(target);
  });
}
/* End move.js */

/***** JS 적용하기 END *****/
