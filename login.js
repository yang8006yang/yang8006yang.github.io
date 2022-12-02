function chk() {
    const acc = document.getElementById('acc').value
    const pw = document.getElementById('pw').value
    let myacc="JingHan Yang";
    let mypw="HappyLife";
    if(acc == myacc && pw == mypw){
        window.location.href = "./main.html"
    }else{
        window.location.href = "./index.html"
        alert ("帳號或密碼錯誤，請聯絡管理員。")
    }
}
