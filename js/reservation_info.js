document.addEventListener("DOMContentLoaded", function () {
    const changeButton = document.querySelector(".change");
    const topElement = document.querySelector(".Top");
    const botElement = document.querySelector(".Bot");

    changeButton.addEventListener("click", function () {
        if (
            topElement.style.display === "none" ||
            topElement.style.display === ""
        ) {
            topElement.style.display = "block";
            botElement.style.display = "block";
        } else {
            topElement.style.display = "none";
            botElement.style.display = "none";
        }
    });
});
//수정버튼 눌렀을 때 내용이 나오도록

//전화번호 js
const autoHyphen = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
};

function OK() {
    alert("수정했습니다");
}
