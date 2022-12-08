function switchCategory($key) {
    let text = document.getElementsByClassName('nav-link');
    text[3].id = ''
    text[4].id = ''
    text[5].id = ''
    text[6].id = ''
    text[$key].id = 'active'
    console.log(text[3].id);
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