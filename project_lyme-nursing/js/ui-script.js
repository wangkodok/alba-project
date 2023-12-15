window.onload = function () {

  // // 반응형 헤더 : 마우스 오버하면 메뉴들 나오는 코드
  // window.addEventListener('resize', reSize);
  // reSize();

  // function reSize() {
  //   if (window.innerWidth > 1600) {
  //     const header = document.querySelector('header');
  //     const lnbList = document.querySelectorAll('.header .lnb-list');
  //     header.addEventListener('mouseover', over);
  //     header.addEventListener('mouseout', out);
  //     let menu;

  //     function over(event) {
  //       console.log(event.target);
  //       if (event.target.tagName === 'HEADER') {
  //         return;
  //       }
  //       let headerOpen = header;
  //       if (window.innerWidth > 320 && window.innerWidth < 1600) {
  //         return;
  //       }
  //       if (headerOpen) {
  //         headerOpen.className = 'header open';
  //         for (let i = 0; i < lnbList.length; i++) {
  //           lnbList[i].className = 'lnb-list open';
  //         }
  //         menu = headerOpen;
  //       }
  //     }

  //     function out(event) {
  //       let headerOpen = header;
  //       if (!onOff(event.relatedTarget)) {
  //         headerOpen.className = 'header';
  //         for (let i = 0; i < lnbList.length; i++) {
  //           lnbList[i].className = 'lnb-list';
  //         }
  //       }
  //     }

  //     function onOff(relatedTarget) {
  //       while (relatedTarget.tagName !== 'HTML') {
  //         if (menu === relatedTarget) {
  //           return true;
  //         } else {
  //           relatedTarget = relatedTarget.parentNode;
  //         }
  //       }
  //       return false;
  //     }
  //   } else if (window.innerWidth > 320 && window.innerWidth < 1600) {
  //     return;
  //   }
  // }



  // // 반응형 헤더 햄버거 메뉴
  // const hbgMenu = document.querySelector('.header .util-menu');
  // const hbgBg = document.querySelector('.header .hbg-bg');
  // const hbgClose = document.querySelector('.header .hbg-menu');
  // console.log(hbgClose);
  // hbgMenu.addEventListener('click', hbgMenuClick);
  // hbgClose.addEventListener('click', hbgCloseClick);

  // function hbgMenuClick() {
  //   if (hbgMenu.className === 'util-menu') {
  //     hbgBg.className = 'hbg-bg on';
  //   }
  // }

  // function hbgCloseClick() {
  //   hbgBg.className = 'hbg-bg';
  // }



  // // 메인 페이지 비주얼 클릭 슬라이드 코드
  // const sliderNum = document.querySelector('.visual-control');
  // const sliderText = document.querySelectorAll('.main-container .visual-text-box li');
  // const num = document.querySelectorAll('.visual-control .num');
  // sliderNum.addEventListener('click', slider);

  // function slider(event) {
  //   let target = event.target;
  //   if (target.tagName !== 'BUTTON') {
  //     return;
  //   }
  //   for (let i = 0; i < num.length; i++) {
  //     if (target.className === 'num') {
  //       for (let i = 0; i < num.length; i++) {
  //         num[i].className = 'num';
  //         sliderText[i].className = '';
  //       }
  //       num[i].className = 'num on';
  //       sliderText[i].className = 'slider-on';
  //     } else {
  //       num[i].className = 'num';
  //       sliderText[i].className = '';
  //     }
  //   }
  // }



  // 메인 페이지 - 인트로 클릭하면 프로필 변경하는 코드
  // const intro = document.querySelector('.main .placard .list');
  // const introItem = document.querySelectorAll('.main .placard .item');
  // intro.addEventListener('click', introClick);

  // function introClick(event) {
  //   event.preventDefault();
  //   let target = event.target;
  //   if (target.className === 'list' || target.tagName === 'item') {
  //     return
  //   }

  //   let link = alink();

  //   function alink() {
  //     while (target.tagName !== 'li') {
  //       if (target.className === 'item on') {
  //         return '';
  //       }
  //       if (target.className === 'item') {
  //         return target;
  //       } else {
  //         target = target.parentNode;
  //       }
  //     }
  //     return false;
  //   }
  //   if (link.className === 'item') {
  //     for (let i = 0; i < introItem.length; i++) {
  //       introItem[i].className = 'item';
  //     }
  //     link.className = 'item on';
  //   } else {
  //     link.className = 'item';
  //   }
  // }


  // // 메인 페이지 반응형 시설 둘러보기 콘텐츠 : 스와이퍼 반응형 제어
  // let swiper = new Swiper(".ft-slide", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   breakpoints: {
  //     // 브라우저 min-width: 1320px 이상일 때 
  //     1320: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // 브라우저 min-width: 1024px 이상일 때 
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     // 브라우저 min-width: 768px 이상일 때 
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     // 브라우저 min-width: 320px 이상일 때 
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     }
  //   }
  // });
} // 끝
