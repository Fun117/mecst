function createUuid(){
    let uuid = self.crypto.randomUUID();
    document.getElementById("uuid").innerHTML = "UUID : " + uuid
}


// encode & decode
function encode1(fun_pass_phrase1,fun_data1) {
    // パスフレーズ（暗号鍵）
    let passPhrase1 = fun_pass_phrase1
    // 暗号化したい元のデータ
    let data1 = fun_data1
    let utf8_plain = CryptoJS.enc.Utf8.parse(data1);
    //暗号データが入力されてるか
    if( data1 == ""){
        document.getElementById("output1").innerHTML = Error
    }else{
        // 暗号化
        let encrypted = CryptoJS.AES.encrypt( utf8_plain, passPhrase1 );
        // 表示
        document.getElementById("output1").innerHTML =
            "key : " + passPhrase1 +"<br />" +
            "data : " + data1 + "<br />" +
            "encrypted : " + encrypted + "<br />";
    }
}
function decode2(fun_pass_phrase2,fun_data1){
    // パスフレーズ（暗号鍵）
    let passPhrase2 = document.getElementById('pass_phrase2').value;
    // 暗号済みデータ
    let encrypted = data2.value
    //複合変数にデータがあるか
    if( encrypted == ""){
        document.getElementById("output2").innerHTML = Error
    }else{
        // 復号化
        let decrypted = CryptoJS.AES.decrypt( encrypted , passPhrase2 );
        let txt_dexrypted = decrypted.toString(CryptoJS.enc.Utf8);
        // 表示
        document.getElementById("output2").innerHTML =
            "key : " + passPhrase2 +"<br />" +
            "decrypted : " + txt_dexrypted;
    }
}








function singUpDataEncode(){
    let formEmailData = document.getElementById('formEmail').value;
    encode(formEmailData, endePass, 1);
    let formPassData = document.getElementById('formPassword').value;
    encode(formPassData, endePass, 2);
    decodeDataIn(3, 0)
}

function decodeDataIn(moded, data){
    if(moded == 1){
        formEmailData = data;
    }else{
        if(moded == 2){
            formPassData = data;
        }else{
            if(moded == 3){
                document.getElementById("endeText").innerHTML =
                    "Email : " + formEmailData +"<br />" +
                    "Password : " + formPassData;
            }
        }
    }
}

// encode & decode
function encode(encodeText, passKey, modeSS) {
    // パスフレーズ（暗号鍵）
    let passPhrase = passKey;
    // 暗号化したい元のデータ
    let text =  encodeText;
    let utf8_plain = CryptoJS.enc.Utf8.parse(text);
    //暗号データが入力されてるか
    if( text == ""){
        document.getElementById("endeText").innerHTML = Error
    }else{
        // 暗号化
        let encrypted = CryptoJS.AES.encrypt( utf8_plain, passPhrase );
        decodeDataIn(modeSS, encrypted)
    }
}
function decode(){
    // パスフレーズ（暗号鍵）
    let passPhrase2 = document.getElementById('pass_phrase2').value;
    // 暗号済みデータ
    let encrypted = data2.value
    //複合変数にデータがあるか
    if( encrypted == ""){
        document.getElementById("output2").innerHTML = Error
    }else{
        // 復号化
        let decrypted = CryptoJS.AES.decrypt( encrypted , passPhrase2 );
        let txt_dexrypted = decrypted.toString(CryptoJS.enc.Utf8);
        // 表示
        document.getElementById("output2").innerHTML =
            "key : " + passPhrase2 +"<br />" +
            "decrypted : " + txt_dexrypted;
    }
}