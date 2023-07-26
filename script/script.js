const createProdacts = () => {
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
};

const cardItemsBlock = () => {
  let prodCount = 0;
  const cardItemsEl = document.querySelector('.card__items');
  const cardListEl = cardItemsEl.querySelector('.card__item__list');
  const prodactEls = document.querySelectorAll('.prodacts__item');
  let indexes = 0;
  prodactEls.forEach((element) => {
    let count = 0;
    const idButton = indexes;
    indexes++;
    const btnEl = element.querySelector('.prodact__add__btn');
    btnEl.addEventListener('click', () => {
      count++;
      const articleEl = element.querySelector('article');
      if (document.querySelector(`.card__item__article${idButton}`)) {
        const articlCardEl = document.querySelector(`.card__item__article${idButton}`);
        const cardQuantityCountEl = articlCardEl.querySelector('.card__item__count');
        cardQuantityCountEl.value = count;
      } else {
        prodCount++;
        const imgEl = articleEl.querySelector('.prodacts__img__item');
        const titleEl = articleEl.querySelector('.prodact__subtitle');
        const priceEl = articleEl.querySelector('.prodact__item__prise');
        const cardSvg = document.querySelector('.card__item__svg__hidden');

        const liCardEl = document.createElement('li');
        liCardEl.classList.add('card__list__li');
        cardListEl.appendChild(liCardEl);

        const acticleCardEl = document.createElement('article');
        acticleCardEl.classList.add('card__item__article');
        acticleCardEl.classList.add(`card__item__article${idButton}`);
        liCardEl.appendChild(acticleCardEl);

        const imgCardEl = document.createElement('img');
        imgCardEl.classList.add('card__item__img');
        imgCardEl.setAttribute('alt', 'img');
        imgCardEl.src = imgEl.src;
        acticleCardEl.appendChild(imgCardEl);

        const wrapTxtCardEl = document.createElement('div');
        wrapTxtCardEl.classList.add('card__item__txt__wrap');
        acticleCardEl.appendChild(wrapTxtCardEl);

        const cardTitleEl = document.createElement('h3');
        cardTitleEl.classList.add('card__item__title');
        cardTitleEl.textContent = titleEl.textContent;
        wrapTxtCardEl.appendChild(cardTitleEl);

        const cardPriceEl = document.createElement('p');
        cardPriceEl.classList.add('card__item__price');
        cardPriceEl.textContent = 'Price: ';
        wrapTxtCardEl.appendChild(cardPriceEl);

        const cardPriceValueEl = document.createElement('span');
        cardPriceValueEl.classList.add('card__item__price__value');
        cardPriceEl.textContent = priceEl.textContent;
        cardPriceEl.appendChild(cardPriceValueEl);

        const cardColorEl = document.createElement('p');
        cardColorEl.classList.add('card__item__color');
        cardColorEl.textContent = 'Color: Black';
        wrapTxtCardEl.appendChild(cardColorEl);

        const cardSizeEl = document.createElement('p');
        cardSizeEl.classList.add('card__item__size');
        cardColorEl.textContent = 'Size: Xl';
        wrapTxtCardEl.appendChild(cardSizeEl);

        const cardQuantityEl = document.createElement('p');
        cardQuantityEl.classList.add('card__item__quantity');
        cardQuantityEl.textContent = 'Quantity: ';
        wrapTxtCardEl.appendChild(cardQuantityEl);

        const cardQuantityCountEl = document.createElement('input');
        cardQuantityCountEl.classList.add('card__item__count');
        cardQuantityCountEl.value = count;
        cardQuantityEl.appendChild(cardQuantityCountEl);

        const newSvg = cardSvg.cloneNode(true);
        newSvg.classList.remove('card__item__svg__hidden');
        wrapTxtCardEl.appendChild(newSvg);

        newSvg.addEventListener('click', function () {
          liCardEl.remove();
          prodCount--;
          count = 0;
          if (prodCount > 0) {
            cardItemsEl.classList.remove('card__items__hidden');
          } else {
            cardItemsEl.classList.add('card__items__hidden');
          }
        });
        if (prodCount > 0) {
          cardItemsEl.classList.remove('card__items__hidden');
        } else {
          cardItemsEl.classList.add('card__items__hidden');
        }
      }
    }
    );
  })
};

createProdacts();
cardItemsBlock();