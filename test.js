const textElement = document.getElementById('text'); // 텍스트를 표시할 HTML 요소
const texts = ['안녕하세요', '신입 개발자', '김태용입니다✌️']; // 타이핑할 텍스트들
let textIndex = 0; // 현재 타이핑할 텍스트의 인덱스
let index = 0; // 현재 텍스트의 문자 위치

// 타이핑 함수
function typeText() {
    // 현재 텍스트의 모든 글자가 출력되지 않았다면
    if (index < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex][index]; // 한 글자씩 화면에 추가
        index++; // 인덱스를 하나 증가시켜서 다음 글자 표시
        setTimeout(typeText, 150); // 150ms 후에 다시 타이핑
    }
// 현재 텍스트가 끝났다면
    else if (textIndex < texts.length - 1) {
        textIndex++; // 다음 텍스트로 넘어가기
        index = 0; // 문자 인덱스를 0으로 초기화
        setTimeout(() => {
            textElement.innerHTML += '<br>'; // 줄바꿈
            typeText(); // 다음 텍스트 타이핑 시작
        }, 800); // 800ms 후에 다음 텍스트 시작
    } else {
        // 모든 텍스트가 끝나면 다시 처음으로 돌아감
        setTimeout(() => {
            textElement.innerHTML = ''; // 텍스트 초기화
            textIndex = 0;
            index = 0;
            typeText(); // 다시 타이핑 시작
        }, 5000); // 5초 대기 후 재시작
    }
}

typeText(); // 처음 타이핑 시작