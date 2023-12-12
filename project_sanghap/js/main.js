window.onload = function () {
  slider();
  headerMenuOpen();
  menuClick();
  tab();
};





// 슬라이더
function slider() {
  var swiper = new Swiper(".mySwiper-download", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".mySwiper-visual", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper-industry-trends", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      // 브라우저 min-width: 1320px 이상일 때 
      1320: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // 브라우저 min-width: 1024px 이상일 때 
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // 브라우저 min-width: 768px 이상일 때 
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // 브라우저 min-width: 320px 이상일 때 
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });
  var swiper = new Swiper(".mySwiper-history", {
    navigation: {
      nextEl: ".swiper-history_button-next",
      prevEl: ".swiper-history_button-prev",
    },
  });
}

// 헤더 마우스 오버/아웃
function headerMenuOpen() {
  const header = document.querySelector('header');
  const lnbList = document.querySelectorAll('.header .lnb-list');
  header.addEventListener('mouseover', over);
  header.addEventListener('mouseout', out);
  let menu;

  function over(event) { // 마우스 오버 함수
    if (window.innerWidth > 319 && window.innerWidth < 1280) {
      // console.log(window.innerWidth);
      return;
    } else {
      if (event.target.tagName === 'HEADER') {
        return;
      }
      let headerOpen = header;
      // console.log('여기서 감지!!');
      // console.log(window.innerWidth);
      if (headerOpen) {
        headerOpen.className = 'header open';
        for (let i = 0; i < lnbList.length; i++) {
          lnbList[i].className = 'lnb-list open';
        }
        menu = headerOpen;
      }
    }
  }
  // function over(event) { // 마우스 오버 함수
  //   if (event.target.tagName === 'HEADER') {
  //     return;
  //   }
  //   let headerOpen = header;
  //   if (window.innerWidth > 320 && window.innerWidth < 1280) {
  //     return;
  //   }
  //   console.log('dfdf');
  //   if (headerOpen) {
  //     headerOpen.className = 'header open';
  //     for (let i = 0; i < lnbList.length; i++) {
  //       lnbList[i].className = 'lnb-list open';
  //     }
  //     menu = headerOpen;
  //   }
  // }

  function out(event) { // 마우스 오버 함수
    let headerOpen = header;
    if (event.relatedTarget === null || menu === null) {
      return;
    }
    if (!onOff(event.relatedTarget)) {
      headerOpen.className = 'header';
      for (let i = 0; i < lnbList.length; i++) {
        lnbList[i].className = 'lnb-list';
      }
    }
  }

  function onOff(relatedTarget) { // 마우스가 도착하는 곳의 엘리먼트 찾아주는 함수
    while (relatedTarget.tagName !== 'HTML') {
      if (menu === relatedTarget) {
        return true;
      } else {
        relatedTarget = relatedTarget.parentNode;
      }
    }
    return false;
  }
}

// 햄버거 메뉴 함수
function menuClick() {
  const hbgMenu = document.querySelector('.header .hb');
  const hbgBg = document.querySelector('.header .hb-open');
  const hbgClose = document.querySelector('.header .hb-open .menu');
  const hbgItem = document.querySelectorAll('.header .hb-menu .list > li');
  hbgMenu.addEventListener('click', hbgMenuClick);
  hbgClose.addEventListener('click', hbgCloseClick);
  for (let i = 0; i < hbgItem.length; i++) {
    hbgItem[i].addEventListener('click', hbgItemClick);
  }

  function hbgMenuClick() { // 햄버거 메뉴 열기 버튼
    if (hbgMenu.className === 'hb') {
      hbgBg.className = 'hb-open on';
    }
  }

  function hbgCloseClick() { // 햄버거 메뉴 닫기 버튼
    hbgBg.className = 'hb-open';
  }

  function hbgItemClick(event) { // 햄버거 메뉴 lnb 메뉴
    // event.preventDefault();
    let li = event.target.parentNode;
    if (li.className === '') {
      for (let i = 0; i < hbgItem.length; i++) {
        hbgItem[i].className = '';
      }
      li.className = 'on';
    } else {
      li.className = '';
    }
  }
}

// 서브페이지 탭 클릭 함수
function tab() {
  const tabList = document.querySelector('.tab .list');
  const tabListClick = document.querySelectorAll('.tab .list > li > a');
  tabList.addEventListener('click', tabClick);
  
  function tabClick(event) { // 탭 클릭
    let target = event.target;
    let liTag = target.parentNode;
    if (target.tagName !== 'A') { // 나 : a 태그가 아니잖어 컴퓨터 : 응 (함수종료)
      return;
    }
    for (let i = 0; i < tabListClick.length; i++) {
      if (target === tabListClick[i]) {
        event.preventDefault();
      }
    }
    if (liTag.className === '') {
      liTag.className = 'on';
    } else {
      if (liTag.className === 'item') { // 문제 : 홈 버튼 클릭하면 img 아이콘에서만 작동 부모한테는 작동이 안됨
        return;
      }
      liTag.className = '';
    }
    // console.log(target);
    // for (let i = 0; i < tabListClick.length; i++) {
    //   if (target === tabListClick[i]) {
    //     event.preventDefault();
    //     console.log(target);
    //     console.log(target.parentNode);
    //     console.log(target.parentNode.className = 'on');
    //   }
    // }
  }
}
// function tab() {
//   const tabList = document.querySelector('.tab .list');
//   tabList.addEventListener('click', tabClick);

//   function tabClick(event) { // 탭 클릭
//     let target = event.target;
//     let liTag = target.parentNode;
//     if (target.tagName !== 'A') {
//       return;
//     }
//     if (liTag.className === '') {
//       event.preventDefault();
//       liTag.className = 'on';
//     } else {
//       if (liTag.className === 'item') {
//         return;
//       }
//       liTag.className = '';
//     }
//   }
// }










// window.addEventListener('load', function () {
//   var swiper = new Swiper(".mySwiper-download", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
//   var swiper = new Swiper(".mySwiper-visual", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
//   var swiper = new Swiper(".mySwiper-industry-trends", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     slidesPerView: 'auto',
//     // slidesPerView : 4,
//     spaceBetween: 0,
//   });
//   var swiper = new Swiper(".mySwiper-history", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });



//   // 헤더 메뉴
//   const header = document.querySelector('header');
//   const lnbList = document.querySelectorAll('.header .lnb-list');
//   header.addEventListener('mouseover', over);
//   header.addEventListener('mouseout', out);
//   let menu;

//   function over(event) {
//     console.log(event.target);
//     if (event.target.tagName === 'HEADER') {
//       return;
//     }
//     let headerOpen = header;
//     // if (window.innerWidth > 320 && window.innerWidth < 1600) {
//     //   return;
//     // }
//     if (headerOpen) {
//       headerOpen.className = 'header open';
//       for (let i = 0; i < lnbList.length; i++) {
//         lnbList[i].className = 'lnb-list open';
//       }
//       menu = headerOpen;
//     }
//   }

//   function out(event) {
//     let headerOpen = header;
//     if (!onOff(event.relatedTarget)) {
//       headerOpen.className = 'header';
//       for (let i = 0; i < lnbList.length; i++) {
//         lnbList[i].className = 'lnb-list';
//       }
//     }
//   }

//   function onOff(relatedTarget) {
//     while (relatedTarget.tagName !== 'HTML') {
//       if (menu === relatedTarget) {
//         return true;
//       } else {
//         relatedTarget = relatedTarget.parentNode;
//       }
//     }
//     return false;
//   }



//   // 반응형 메뉴 클릭
//   const hbgMenu = document.querySelector('.header .hb');
//   const hbgBg = document.querySelector('.header .hb-open');
//   const hbgClose = document.querySelector('.header .hb-open .menu');
//   console.log(hbgClose);
//   hbgMenu.addEventListener('click', hbgMenuClick);
//   hbgClose.addEventListener('click', hbgCloseClick);

//   function hbgMenuClick() {
//     if (hbgMenu.className === 'hb') {
//       hbgBg.className = 'hb-open on';
//     }
//   }

//   function hbgCloseClick() {
//     hbgBg.className = 'hb-open';
//   }




//   // 서브페이지 - 탭 메뉴 코드
//   const tabList = document.querySelector('.tab .list');
//   tabList.addEventListener('click', tabClick);

//   function tabClick(event) {
//     // event.preventDefault();
//     console.log('test');
//     let target = event.target;
//     let liTag = target.parentNode;
//     if (target.tagName !== 'A') {
//       return;
//     }
//     if (liTag.className === '') {
//       liTag.className = 'on';
//     } else {
//       if (liTag.className === 'item') {
//         return;
//       }
//       liTag.className = '';
//     }
//   }
// });
