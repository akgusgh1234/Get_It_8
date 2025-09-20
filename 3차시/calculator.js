// 입력값 가져오기 함수
function getNumbers() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    return [a, b];
}

const add = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a + b}`);
}
const subtract=()=> {
    const [a, b] = getNumbers();
    alert(`결과: ${a - b}`);
}

const multiply=()=> {
    const [a, b] = getNumbers();
    alert(`결과: ${a * b}`);
}
const divide=()=> {
    const [a, b] = getNumbers();
    if (b == 0) {
        alert("0으로 나눌 수 없습니다.");
    } else {
        alert(`결과: ${a / b}`);
    }
}

/* ===== 이벤트 연결 ===== */
document.getElementById("addBtn").onclick = add;
document.getElementById("subtractBtn").onclick = subtract;
document.getElementById("multiplyBtn").onclick = multiply;
document.getElementById("divideBtn").onclick = divide;
