 // 배너 이미지 슬라이드
 const swiper = new Swiper('.swiper-container', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
  autoplay: {
      delay: 5000,
  },
});

// 영화차트 이미지 슬라이드
const myswiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,
  // autoplay: {
  //     delay: 2000,
  // },
  breakpoints: {
      // when window width is >= 320px
      600: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      // when window width is >= 640px
      960: {
          slidesPerView: 4,
          spaceBetween: 40
      }
  }
});


// 영화차트 탭 메뉴
const movBtn = $(".movie_title > ul > li");
// const movBtn = document.querySelectorAll('.movie_title > ul > li');

const movCont = $(".movie_chart > div");
// const movCont = document.querySelectorAll('.movie_chart > div');

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  const target = $(this);
  const index = target.index();
  movBtn.removeClass("active");
  target.addClass("active");
  movCont.css("display", "none");
  movCont.eq(index).css("display", "block");
});

// 공지사항 탭 메뉴
const tabMenu = $(".notice");

// 컨텐츠 내용을 숨겨주세요!
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
  e.preventDefault(); //#의 기능 차단
  const target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
  // 버튼을 클릭하면 ~ul를 보여주고
  // 부모의 li태그에 클래스를 추가하고
  // 형제의 li태그에 클래스를 제거하고
  // 제거한 자식의 ul 태그를 숨겨줌
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);