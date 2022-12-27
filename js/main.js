
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

// let more = document.getElementById('more');
// more.addEventListener("click", function() {
//     if(more.textContent=='...more'){
//         more.textContent='...close'
//     }else{
//         more.textContent='...more'
        
//       }
//     });
    $('#more').click(function(){
      $('#more').show;
      $( "#intro" ).slideToggle("slow");
      let text=(this.text=='...more')?'...close' : '...more';
      $(this).text(text);
    })

// 抓iframe 長度
  // function resizeIframe(obj) {
  //   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  // }

//   MOUSE位置
$(window).mousemove(function (e) {
    $("#mouse").css({ top: e.pageY, left: e.pageX }); 
  }); 


// iframe
$.get("./project/web.html", function(data) {
  $('#frame').html(data);
});

$('.portfoilo').click(function(){
  let url=$(this).data("url")
  console.log(url);
  $.get(url, function(data) {
    $('#frame').html(data);
  });
})