const result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "contact.sahilmajeed",
    "email": "contact.sahilmajeed@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

let submit = document.getElementById("btn");
let resultcont = document.getElementById("resultCont");
const api_key = "ema_live_Hr851BZQY9BhR8CHELK1PmjrbOBlXI1ZGNNXOROq"



submit.addEventListener('click', async () => {
    
    resultcont.innerHTML = `<img width="60" src="img/img.svg" alt="img">`
    let email = document.getElementById("email-input").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${api_key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json();
    let str = ``;
    for (let key of Object.keys(result)) {
        if (result[key] !== "") {
            str = str + `<div>${key} : ${result[key]}</div>`
        }
    }
    resultcont.innerHTML = str;
})