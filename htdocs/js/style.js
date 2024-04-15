window.addEventListener('scroll', () => {
  const pagetop = document.querySelector('.pagetop'); //トップに戻るボタンのidを取得
  if (pagetop) {
	if (window.scrollY >= 400) {  //上から400px以上スクロールしたら
	  pagetop.classList.add('fadein'); //aタグにfadeinクラスを与える
	} else {
	  pagetop.classList.remove('fadein');//aタグからfadeinクラスをはずす
	}
  }
});

/**
 * モーダルウインドウ
 * @param {Element} el ウインドウ内に表示するコンテンツのエレメント
 */
class ModalDialog {
  constructor(el) {
	const div = document.createElement("div");
	div.innerHTML = '<div class="modal-container"><div class="modal-body"><button type="button" class="modal-close">close</button><div class="modal-content"><h3>サンプル</h3><div id="contents" class="inn box_srcollbar"></div></div></div></div>';
	document.body.appendChild(div);

	const close = document.querySelector('.modal-close'),
		container = document.querySelector('.modal-container');
	close.addEventListener('click',function(){
	  container.classList.remove('active');
	});
	document.querySelector("#contents").appendChild(el);
  }
  /**
   * モーダルウインドウ表示
   */
  show() {
	document.querySelector('.modal-container').classList.add('active');
  }
  /**
   * モーダルウインドウ消去
   */
  hide() {
	document.querySelector('.modal-container').classList.remove('active');
  }
}