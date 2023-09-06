//전화번호 js
const autoHyphen = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
};

//input 글자 없거나 잘못되면 errer
document.addEventListener('DOMContentLoaded', function () {
  const inputName = document.getElementById('inputName');
  const inputEmail = document.getElementById('inputEmail');
  const inputPhone = document.getElementById('inputPhone');
  const inputTitle = document.getElementById('inputTitle');
  const inputDetail = document.getElementById('inputDetail');
  const consentCheckbox = document.getElementById('consentCheckbox');
  const nameMessage = document.getElementById('nameMessage');
  const emailMessage = document.getElementById('emailMessage');
  const phoneMessage = document.getElementById('phoneMessage');
  const titleMessage = document.getElementById('titleMessage');
  const detailMessage = document.getElementById('detailMessage');
  const errorMessage = document.getElementById('errorMessage');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', function () {
    if (inputName.value.trim() === '') {
      inputName.classList.add('error');
      nameMessage.style.display = 'block';
    } else {
      inputName.classList.remove('error');
      nameMessage.style.display = 'none';
    }

    if (inputEmail.value.trim() === '') {
      inputEmail.classList.add('error');
      emailMessage.style.display = 'block';
    } else {
      inputEmail.classList.remove('error');
      emailMessage.style.display = 'none';
    }

    if (inputPhone.value.trim() === '') {
      inputPhone.classList.add('error');
      phoneMessage.style.display = 'block';
    } else {
      inputPhone.classList.remove('error');
      phoneMessage.style.display = 'none';
    }
    if (inputTitle.value.trim() === '') {
      inputTitle.classList.add('error');
      titleMessage.style.display = 'block';
    } else {
      inputTitle.classList.remove('error');
      titleMessage.style.display = 'none';
    }
    if (inputDetail.value.trim() === '') {
      inputDetail.classList.add('error');
      detailMessage.style.display = 'block';
    } else {
      inputDetail.classList.remove('error');
      detailMessage.style.display = 'none';
    }
    if (!consentCheckbox.checked) {
      // 체크되어 있지 않으면 메시지 추가
      errorMessage.style.display = 'block';
      errorMessage.textContent = '체크해 주세요';
    } else {
      // 체크되어 있다면 메시지 숨김
      errorMessage.style.display = 'none';
      // 원하는 동작 수행
      // 예: 데이터 보내기 또는 어떤 동작 수행
    }
  });
});
