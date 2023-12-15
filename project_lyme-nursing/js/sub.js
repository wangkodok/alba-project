window.onload = function () {

  // 서브페이지 - 탭 메뉴 코드
  const tabList = document.querySelector('.tab .list');
  tabList.addEventListener('click', tabClick);

  function tabClick(event) {
    event.preventDefault();
    console.log('test');
    let target = event.target;
    let liTag = target.parentNode;
    if (target.tagName !== 'A') {
      return;
    }
    if (liTag.className === '') {
      liTag.className = 'on';
    } else {
      if (liTag.className === 'item') {
        return;
      }
      liTag.className = '';
    }
  }
}
