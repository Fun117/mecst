function startSc(){ // サイトのロード時に実行
    // クッキーを読み出す
    const obj = convertCookieToObject(document.cookie);
    let html_class = obj.html_class;
    document.getElementById('html').className = (html_class)

    window.setInterval(FixedAnime, 1); // スクロール検証function
}

function links_github(){
    window.open("https://github.com/Fun117/");
}

function FixedAnime(){ // スクロール制御
    var scroll = window.scrollY;//スクロールY軸取得
    if(scroll > 15){//スクロール何以上
        headerBackground.classList.remove('transparent--+Qg9m');// ヘッダーの配色を変更
    }else{
        headerBackground.classList.add('transparent--+Qg9m');// ヘッダーの配色を変更
    }
    let rootElement = document.documentElement;
    lang =(rootElement.lang);
}


function class_modeChangeBtn(class_modeChangeBtn_mode){ // 選択リスト
    var class_modeListArea = document.getElementById('class_modeListArea');
    if(class_modeChangeBtn_mode === 'hide'){
        class_modeListArea.classList.remove('fadeIn');
        class_modeListArea.classList.add('fadeOut');
        setTimeout(function(){
            class_modeListArea.style.display ="none";
        },300);
    }else{
        if(class_modeListArea.style.display=="block"){
            class_modeListArea.classList.remove('fadeIn');
            class_modeListArea.classList.add('fadeOut');
            setTimeout(function(){
                class_modeListArea.style.display ="none";
            },300);
        }else{
            languageChangeBtn('hide')
            class_modeListArea.classList.add('fadeIn');
            class_modeListArea.classList.remove('fadeOut');
            class_modeListArea.style.display ="block";
        }
    }
};

function languageChangeBtn(languageChangeBtn_mode){ // 選択リスト
    var languageListArea = document.getElementById('languageListArea');
    if(languageChangeBtn_mode === 'hide'){
        languageListArea.classList.remove('fadeIn');
        languageListArea.classList.add('fadeOut');
        setTimeout(function(){
            languageListArea.style.display ="none";
        },300);
    }else{
        if(languageListArea.style.display=="block"){
            languageListArea.classList.remove('fadeIn');
            languageListArea.classList.add('fadeOut');
            setTimeout(function(){
                languageListArea.style.display ="none";
            },300);
        }else{
            class_modeChangeBtn('hide')
            languageListArea.classList.add('fadeIn');
            languageListArea.classList.remove('fadeOut');
            languageListArea.style.display ="block";
        }
    }
};

function scrollToTop() {
    scrollTo(0, 0);
}

//アクティブ送信
//fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=active_count_data&active=1', { mode: 'no-cors' });





// クッキーの解析
function convertCookieToObject(cookies) {
    const cookieItem = cookies.split(';');
    const obj = {};
    cookieItem.forEach((item) => {
        // 「=」で分解
        const element = item.split('=');
        // キーを取得
        const key = element[0].trim();
        // バリューを取得
        const value = decodeURIComponent(element[1]);
        // 保存
        obj[key] = value;
    });
    return obj;
}