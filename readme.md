## 🙋‍♂️ 프로젝트 설명 
### 1. 프로젝트 소개
* 반응형 웹페이지 제작

### 2. 프로젝트 목표
* [길벗]코딩 자율학습 HTML+CSS+자바스크립트 교재에 수록된 최종 프로젝트를 클론 코딩해보고, HTML+CSS+JS의 활용을 이해하고 부족한 개념을 학습
* 클론 코딩을 하면서 새로 알게된 개념을 주석 처리하고, 최종적으로 readme.md에 기록
* 완성된 웹 페이지를 내가 원하는 방식을 추가 및 변경해봅니다.

### 3. 구현 기능
| CSS | JS | 
| --- | --- | 
| [반응형 웹페이지](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/blob/main/style.css#L471) |  [텍스트가 지워지고 써지는 효과](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/blob/main/script.js#L7)  |
|  [스크롤 위치에 맞게 이미지 출력](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/blob/main/style.css#L347C6-L347C6) |  [최상단 고정 메뉴바](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/blob/main/script.js#L74) |
| - |  [메뉴바 클릭시 스크롤 이동](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/blob/main/script.js#L106)  |


### 4. 사용 기술
<img src="https://img.shields.io/badge/VSC-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"></a>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></a>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 

## 🚗 프로젝트 결과물
![web_selfpj_gilbut](https://github.com/Kang-YunSik/Web_Selfpj_gilbut/assets/145963623/bdd4129f-efc3-4ec8-8d0e-0dce0051f6e7)

## 🏁 배운점
<details><summary> HTML </summary> 
[태그]

- main 태그
- i 태그와 Font Awesome 폰트의 아이콘
- section 태그 사용시 주의사항과 article 태그와의 차이점
- strong 태그와 논리적 태그vs물리적 태그
- form의 label 태그
- h, span, p태그 차이점
- form 태그 속성
- form의 input 태그
- form의 textarea 태그

[속성]

- http-equiv속성과 content속성
- integrity, crossorigin, referrerpolicy 속성
- lang="zxx"
- link 태그에서의 rel의미
</details>

<details><summary> CSS</summary> 
[속성]

- box-sizing 속성
- top, bottom, left, right 속성
- 상속되는 속성과 상속이 되지않는 속성
- background: transparent
- background-size 단축 속성
- linear-gradient 속성
- text-align과 align-items 차이
- letter-spacing 속성
- transform 속성
- animation 속성과 @keyframes
- opacity 속성
- outline 속성과 활용 (border와의 차이점)
- max-width 활용
- border-radius 단축 속성
- form 텍스트박스에 focus 활용 (box-shadow 속성)

[개념]

- vh 단위
- 뷰포트란
- 태그명.클래스명 선택자 (태그명 .클래스명과 다름)
- 상속이 적용되지 않는 태그
- %의 기준
- ::after의 하위 속성 content: "" 의 의미
- display: inline-block과 inline의 차이
- 미디어쿼리를 사용해 반응형 홈페이지 만들기 (요소들의 글자 크기 및 요소 배치 조정)
- a 태그 스타일과 적용 순서
- 웹 상에서 고정된 요소 만들기: position + z-index
- flex와 justify-content, align-items 속성
- font-weight
- background-size:cover
- section 태그에 스타일을 주는 경우 (관례상 스타일을 주지 않음)
---
- h태그 단계적에 비례해 font-size를 적용하지 않아도 된다.
- Web퍼블리싱 과정: HTML문서를 구역별로 작성 -> CSS코드 작성 -> JS구현
- CSS코드 선택자 선언법: 모든 부모태그를 선택자로 불러 스타일 변경을 원하는 태그를 정확히 구분한다.
- height값은 꼭 필요한 요소에만 적용하네요..?!? (body, wrap 같은건 안줌)
- 요소를 배치할 때 margin을 활용하고, 부모요소에 가득 차게 만들기 위해 % 단위를 활용한다.
- font-size, maring, padding의 크기를 rem 단위로 한 이유는 미디어쿼리를 활용해 반응형 홈페이지를 만들기 위함이다.

[자주 쓰는 CSS 코드]
- 가운데 정렬의 마법사 코드
- 기본 스타일 시트 초기화 CSS코드
- float clear하는 마법사 코드
</details>

<details><summary> JS </summary> 
[JS 문법]

- 요소 선택: querySelector("CSS 선택자")
- textContent: 선택자 내부 텍스트를 조작
- 즉시 실행 함수
- JS에서 Time은 단위는 ms이다 (1초=1000ms)

[JS 내장 메소드]
- split("") 메소드: 문자열을 하나씩 ""로 구분
- shift(): 맨 왼쪽 요소 삭제
- pop(): 맨 오른쪽 요소 삭제
- setTimeout(실행함수, n초 후 함수 실행)
- join(""): 배열의 모든 요소를 ""으로 합침
- addEventListener(이벤트, 실행함수)
- classList.add("active"): 요소에 class="active"를 추가
- getBoundingClientRect(): 현재 targetEl 요소의 브라우저 상단으로 부터의 거리
- requestAnimationFrame()을 사용하는 경우
</details>




## 🛠 개인 피드백
* 섹션 영역을 flex로 배치
* 이미지 크기가 서로 다를 때 배치
* textarea 태그의 첫 커서 위치 조정
* button 태그에 효과부여
