const api_key = "NCSJTUHVWWQ0EWKT";
const api_secret = "AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ";

function getAuthorization() {
    let salt = getSalt();
    let date = getDate();
    let value = date + salt;
    let signature = getSignature(value, api_secret);
    let authoriztion =
        "HMAC-SHA256 apiKey=" +
        api_key +
        ", date=" +
        date +
        ", salt=" +
        salt +
        ", signature=" +
        signature;
    return authoriztion;
}

function getSalt() {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 30; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

function getDate() {
    let today = new Date();
    return today.toISOString();
}

function getSignature(value, key) {
    let signature = CryptoJS.HmacSHA256(value, key);
    return signature;
}

var request;

function getPlusfriend(pfid) {
    let url = "https://api.solapi.com/kakao/v1/plus-friends/" + pfid;

    request = new XMLHttpRequest();

    if (!request) {
        alert("request create fail");
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getPlusfriends() {
    let url = "https://api.solapi.com/kakao/v1/plus-friends";

    request = new XMLHttpRequest();

    if (!request) {
        alert("request create fail");
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getTemplate(templateId) {
    let url = "https://api.solapi.com/kakao/v1/templates/" + templateId;

    request = new XMLHttpRequest();

    if (!request) {
        alert("request create fail");
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getTemplates() {
    let url = "https://api.solapi.com/kakao/v1/templates";

    request = new XMLHttpRequest();

    if (!request) {
        alert("request create fail");
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function sendMessage(name, date, time, tel, btn_url, pfid, templateId) {
    let url = "https://api.solapi.com/messages/v4/send-many/detail";

    request = new XMLHttpRequest();

    if (!request) {
        alert("request create fail");
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);

    var data = {
        messages: [
            {
                to: tel,
                kakaoOptions: {
                    pfId: pfid,
                    templateId: templateId,
                    variables: {
                        "#{홍길동}": name,
                        // "#{url}": btn_url,
                    },
                },
            },
        ],
    };

    console.log(data);

    var message = JSON.stringify(data);

    console.log(message);

    request.send(message);
    return;
}

function requestResult() {
    if (request.readyState == XMLHttpRequest.DONE) {
        alert(request.responseText);
    }
}
