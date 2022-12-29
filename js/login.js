function chk() {
    const acc = document.getElementById('acc').value
    const pw = document.getElementById('pw').value
    let myacc="JingHan Yang";
    let mypw="HappyLife";
    if(acc == myacc && pw == mypw){
        window.setTimeout("window.location.href = './main.html'",2000);
        const fg = document.querySelector('.fg');
        document.cookie = 'login=1 ; max-age=7200';
        fg.classList='fg close'
    }else{
        window.location.href = "./index.html"
        alert ("帳號或密碼錯誤，請聯絡管理員。")
    }
}
// 登陸綁Enter
document.addEventListener('keydown',function(e){
    console.log(e.code);
    if(e.code=='Enter'||e.code=='NumpadEnter'){
        chk();
    }
  }, false);