$chk=document.cookie;
if($chk!='login=1'){
  window.location.href = "./index.html"
}


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


$('#contact').click(function(){
  $( "#contactbar" ).slideToggle("slow");
})
// ==========INTRO 開關============
// let more = document.getElementById('more');
// more.addEventListener("click", function() {
//     if(more.textContent=='...more'){
//         more.textContent='...close'
//     }else{
//         more.textContent='...more'
        
//       }
//     });
    $('#more').click(function(){
      $( "#intro" ).slideToggle("slow");
      let text=(this.text=='...more')?'...close' : '...more';
      $(this).text(text);
    })

// ==========抓iframe 長度============
// function resizeIframe(obj) {
  //   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  // }
  
// ==========MOUSE位置============
$(window).mousemove(function (e) {
    $("#mouse").css({ top: e.pageY, left: e.pageX }); 
  }); 


// iframe(AJAX)
$.get("./project/web.html", function(data) {
  $('#frame').html(data);
});

$('.portfoilo').click(function(){
  let url=$(this).data("url")
  $.get(url, function(data) {
    $('#frame').html(data);
  });
})

// 抓取頁面滾動位置，()移動與停止
    $(window).scroll(function(){
      let screenHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      let scrollBox = $('.s-box').height();
      let scrollB = $('.brackets').height();
      let scrollEnd =(screenHeight*1)+(scrollBox*1)-(scrollB*1.3)
      let brackets = $('.brackets');
        if(scrollTop > screenHeight && scrollTop < scrollEnd){
          brackets.css('top',(scrollTop*1)+(50*1)+'px');
        }
        if(scrollTop > scrollEnd-(screenHeight*0.7)){
          $('.mypic1').css('animationName','pic1');
          $('.mypic2').css('animationName','pic2');
        }
})
