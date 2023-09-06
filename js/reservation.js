//전화번호 js
const autoHyphen = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

//input 글자 없거나 잘못되면 errer
document.addEventListener("DOMContentLoaded", function () {
  const timeSelect = document.getElementById("timeSelect");
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPhone = document.getElementById("inputPhone");
  const SubjectSelect = document.getElementById("SubjectSelect");
  const inputTitle = document.getElementById("inputTitle");
  const inputDetail = document.getElementById("inputDetail");
  const inputCheckbox = document.getElementById("inputCheckbox");
  const timeMessage = document.getElementById("timeMessage");
  const nameMessage = document.getElementById("nameMessage");
  const emailMessage = document.getElementById("emailMessage");
  const phoneMessage = document.getElementById("phoneMessage");
  const SubjectMessage = document.getElementById("SubjectMessage");
  const titleMessage = document.getElementById("titleMessage");
  const detailMessage = document.getElementById("detailMessage");
  const checkboxMessage = document.getElementById("checkboxMessage");
  const errorMessage = document.getElementById("errorMessage");
  const sendButton = document.getElementById("sendButton");
  //변수 지정

  sendButton.addEventListener("click", function () {
    if (timeSelect.value == "0") {
      timeSelect.classList.add("error");
      timeMessage.style.display = "block";
    } else {
      timeSelect.classList.remove("error");
      timeMessage.style.display = "none";
    }
    //버튼 클릭했을 때

    if (inputName.value.trim() === "") {
      inputName.classList.add("error");
      nameMessage.style.display = "block";
    } else {
      inputName.classList.remove("error");
      nameMessage.style.display = "none";
    }
    //이름 error 함수

    if (inputEmail.value.trim() === "") {
      inputEmail.classList.add("error");
      emailMessage.style.display = "block";
    } else {
      inputEmail.classList.remove("error");
      emailMessage.style.display = "none";
    }
    //이메일 error 함수

    if (inputPhone.value.trim() === "") {
      inputPhone.classList.add("error");
      phoneMessage.style.display = "block";
    } else {
      inputPhone.classList.remove("error");
      phoneMessage.style.display = "none";
    }
    //전화번호 error 함수

    if (SubjectSelect.value == "0") {
      SubjectSelect.classList.add("error");
      SubjectMessage.style.display = "block";
    } else {
      SubjectSelect.classList.remove("error");
      SubjectMessage.style.display = "none";
    }
    //문의 주제 error 함수

    if (inputTitle.value.trim() === "") {
      inputTitle.classList.add("error");
      titleMessage.style.display = "block";
    } else {
      inputTitle.classList.remove("error");
      titleMessage.style.display = "none";
    }
    //문의 제목 error 함수

    if (inputDetail.value.trim() === "") {
      inputDetail.classList.add("error");
      detailMessage.style.display = "block";
    } else {
      inputDetail.classList.remove("error");
      detailMessage.style.display = "none";
    }
    //문의 내용 error 함수

    if (!inputCheckbox.checked) {
      inputCheckbox.classList.add("error");
      checkboxMessage.style.display = "block";
    } else {
      inputCheckbox.classList.remove("error");
      checkboxMessage.style.display = "none";
    }
    //체크박스 error 함수
  });
});
