//전화번호 js
const autoHyphen = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
};

document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById("inputName");
    const inputPhone = document.getElementById("inputPhone");
    const nameMessage = document.getElementById("nameMessage");
    const phoneMessage = document.getElementById("phoneMessage");
    const sendButton = document.getElementById("about");

    about.addEventListener("click", function () {
        inputName.placeholder = "";
        inputPhone.placeholder = "";

        if (inputName.value.trim() === "") {
            inputName.classList.add("error");
            nameMessage.style.display = "block";
        } else {
            inputName.classList.remove("error");
            nameMessage.style.display = "none";
        }
        if (inputName.value.trim() === "") {
            inputName.classList.add("error");
            nameMessage.style.display = "block";
        } else {
            inputName.classList.remove("error");
            nameMessage.style.display = "none";
        }
        if (inputPhone.value.trim() === "") {
            inputPhone.classList.add("error");
            phoneMessage.style.display = "block";
        } else {
            inputPhone.classList.remove("error");
            phoneMessage.style.display = "none";
        }
    });
});

const inputNameCheck = () => {
    if (inputName.value.trim() === "") {
        inputName.classList.add("error");
        nameMessage.style.display = "block";
    } else {
        inputName.classList.remove("error");
        nameMessage.style.display = "none";
    }
};

const inputPhoneCheck = () => {
    if (inputPhone.value.trim() === "") {
        inputPhone.classList.add("error");
        phoneMessage.style.display = "block";
    } else {
        inputPhone.classList.remove("error");
        phoneMessage.style.display = "none";
    }
};
