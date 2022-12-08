function changeDark() {
    var bgc = document.getElementById('body').style.background;
    console.log(bgc)
    if (bgc == 'rgb(245, 244, 243)') {

        document.getElementById('body').style.background = 'rgb(42, 42, 42)';
        document.getElementById('body').style.color = 'white';
        let text = document.getElementsByClassName('nav-link');
        Array.from(text).forEach(value => {
            value.style.color = 'white';
        })
        let icon=document.getElementsByClassName('cc');
        icon[0].style.color = 'white';
        icon[1].style.color = 'white';
        icon[2].style.color = 'white';
        document.getElementById('changeBg').innerHTML = '<i class="fa-solid fa-sun" style="color: white"></i>'
    } else {
        document.getElementById('body').style.background = 'rgb(245, 244, 243)';
        document.getElementById('body').style.color = 'black';
        let text = document.getElementsByClassName('nav-link');
        Array.from(text).forEach((value,key) => {
            if(key==0){
                value.style.color = 'black';
            }else{
                value.style.color = '';
            }
        })
        let icon=document.getElementsByClassName('cc');
        icon[0].style.color = '';
        icon[1].style.color = '';
        icon[2].style.color = '';

        document.getElementById('changeBg').innerHTML = '<i class="fa-solid fa-moon"></i>'
    }

}
