const buttonEl = document.querySelector('.prodact__add__btn');
const prodactListEl = document.querySelector('.prodacts__list');
const data = JSON.parse(dataProdact);
data.forEach(element => {
  const prodactItemEl = document.createElement('li');
  prodactItemEl.classList.add('prodacts__item');
  prodactListEl.appendChild(prodactItemEl);
  const articleEl = document.createElement('article');
  prodactItemEl.appendChild(articleEl);

  const prodactLinkEl = document.createElement('a');
  prodactLinkEl.classList.add('prodakt__link');
  prodactLinkEl.href = element.link;
  articleEl.appendChild(prodactLinkEl);

  const prodactImgWrapEl = document.createElement('div');
  prodactImgWrapEl.classList.add('wrap__img');
  prodactLinkEl.appendChild(prodactImgWrapEl);

  const prodactImgEl = document.createElement('img');
  prodactImgEl.classList.add('prodacts__img__item');
  prodactImgEl.setAttribute('alt', 'prodact');
  prodactImgEl.src = element.url;
  prodactImgWrapEl.appendChild(prodactImgEl);

  const prodTxtWrap = document.createElement('div');
  prodTxtWrap.classList.add('prodact__txt__wrap');
  articleEl.appendChild(prodTxtWrap);

  const titleEl = document.createElement('h3');
  titleEl.classList.add('prodact__subtitle');
  titleEl.textContent = element.title;
  prodTxtWrap.appendChild(titleEl);

  const txtEl = document.createElement('p');
  txtEl.classList.add('prodact__item__txt');
  txtEl.textContent = element.txt;
  prodTxtWrap.appendChild(txtEl);

  const priceEl = document.createElement('p');
  priceEl.classList.add('prodact__item__prise');
  priceEl.textContent = element.price;
  prodTxtWrap.appendChild(priceEl);

  prodTxtWrap.appendChild(priceEl);
  prodTxtWrap.appendChild(buttonEl.cloneNode(true));

});