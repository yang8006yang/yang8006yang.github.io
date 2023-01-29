$chk = document.cookie;
if ($chk != 'login=1') {
  window.location.href = "./index.html"
}


function switchCategory(mykey) {
  let text = document.getElementsByClassName('nav-link');
  Array.from(text).forEach((value, key) => {
    if (key == mykey) {
      text[mykey].id = 'active'
    } else {
      text[key].id = ''
    }
  })
}

// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });


$('#contact').click(function () {
  $("#contactbar").slideToggle("slow");
})
// ==========INTRO 開關============

$('#more').click(function () {
  $("#intro").slideToggle("slow");
  let text = (this.text == '...more') ? '...close' : '...more';
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
$.get("./project/web.html", function (data) {
  $('#frame').html(data);
});

$('.portfoilo').click(function () {
  let url = $(this).data("url")
  $.get(url, function (data) {
    $('#frame').html(data);
  });
})

// 抓取頁面滾動位置，()移動與停止
$(window).scroll(function () {
  let screenHeight = $(window).height();
  let scrollTop = $(window).scrollTop();
  let scrollBox = $('.s-box').height();
  let scrollB = $('.brackets').height();
  let scrollEnd = (screenHeight * 1) + (scrollBox * 1) - (scrollB * 1.3)
  let brackets = $('.brackets');
  if (scrollTop > screenHeight && scrollTop < scrollEnd) {
    brackets.css('top', (scrollTop * 1) + (50 * 1) + 'px');
  }
  if (scrollTop > scrollEnd - (screenHeight * 0.7)) {
    $('.mypic1').css('animationName', 'pic1');
    $('.mypic2').css('animationName', 'pic2');
  }
  if ($('#more').text() == '...close' && scrollTop > screenHeight * 0.8) {

    $("#intro").slideToggle("slow");
    let text = ($('#more').text == '...more') ? '...close' : '...more';
    $('#more').text(text);
  }
})


//=========中英切換============
// const ch= $('.CH').toArray();
const en = $('.EN');

// var language = 0;
const chgLBtn = $('#chgL')

text = {
  en: [
    "A rookie web developer and interior designer.<br>Like to explore the possibilities of life , and challenge myself to do better.",
    "<div>-🌏Currently base in Taoyuan.Originally from Taiwan.</div><div>-💻Taking a Web class in WAD training center.</div><div>-🎨Previously, Worked as an interior designer .</div><div>-🍵When not working, you can find me listening to podcasts , reading novel and whatching drama.</div>",
    "<ul><li>Certificate of Architecture Drawing-Computer Aided Engineering Drawing</li><li>Certificate of Interior Design of a Building</li><li>Certificate of Interior Design & Repairs Management of a Building</li><li>1rd prize in the Ubran & Rural Commom Good Festival, about Jiuzantou Station. Award to the best community landscape design.</li></ul>"
  ],
  ch: [
    "菜鳥網頁工程師 & 室內設計師 <br>喜歡探索人生的可能性，並挑戰自我、追求更好的自己。",
    "<div>-🌏現居桃園 ,台灣</div><div>-💻PHP資料庫網頁設計 @泰山職訓</div><div>-🎨先前, 從事室內設計</div><div>-🍵在休閒時間，我喜歡聽podcasts、看小說、追劇</div>",
    "<ul><li>建築製圖應用 -電腦製圖 丙級</li><li>建築物室內設計 乙級</li><li>建築物室內裝修工程管理 乙級</li><li>城鄉共好節 : 社區景觀設計 ‒ 第一名</li></ul>"
  ]
}
var lang = 0;
chgLBtn.on('click', function () {
  if (lang == 0) {
    for (i = 0; i < en.length; i++) {
      en.eq(i).html(text.ch[i]);
      chgLBtn.text('English')
    }
    lang = 1;
  } else {
    for (i = 0; i < en.length; i++) {
      en.eq(i).html(text.en[i]);
      chgLBtn.text('中文')
      lang = 0;
    }
  }
})

