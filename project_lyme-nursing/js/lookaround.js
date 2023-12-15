window.onload = function () {

  // 서브페이지 - 둘러보기 사진 갤러리 클릭하는 코드
  const body = document.querySelector('body');
  const view = document.querySelector('.lookaround .view');
  const viewPhotos = document.querySelector('.lookaround .view-photos');
  view.addEventListener('click', viewBox);
  viewPhotos.addEventListener('click', viewGallery);

  function viewBox(event) {
    event.preventDefault();
    let target = event.target
    if (target.parentNode.tagName === 'A') {
      body.style.overflow = 'hidden';
      viewPhotos.style.display = 'block';
    }
  }

  function viewGallery(event) {
    let target = event.target;
    if (target.className === 'view-photos') {
      viewPhotos.style.display = 'none';
      body.style.overflow = '';
    }
  }

  // 서브페이지 - 둘러보기 사진 갤러리 자세히 보기
  let swiper = new Swiper(".slide-list", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}