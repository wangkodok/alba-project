window.onload = function () {

  // 반응형 헤더 : 마우스 오버하면 메뉴들 나오는 코드
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
} // 끝