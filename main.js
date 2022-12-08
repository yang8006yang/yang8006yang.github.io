function switchCategory(mykey) {
    let text = document.getElementsByClassName('nav-link');
    Array.from(text).forEach((value,key) => {
        if(key==mykey){
            text[mykey].id = 'active'
        }else{
            text[key].id = ''
        }
    })
}

// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });

let more = document.getElementById('more');
more.addEventListener("click", function() {
    if(more.textContent=='...more'){
        more.textContent='...close'
    }else{
        more.textContent='...more'
    }
  });


// 抓iframe 長度
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
