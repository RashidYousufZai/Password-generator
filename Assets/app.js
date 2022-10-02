function passwordGenerator() {
    var char = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%&";
    var passsowrdLenght = 12;
    var password = "";
    for (let i = 0; i < passsowrdLenght; i++) {
        var random = Math.floor(Math.random() * char.length);
        var password = password + char.substring(random, random + 1);
        console.log(password);
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    var copyText = password;
    copyText.select();
    document.execCommand("copy");
}