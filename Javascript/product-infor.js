
// show products through slide card
function slideInfoCard() {
    let cardsCtn = document.querySelector('.product__cards-container'); // get element of cards container
    let cards = document.querySelectorAll('.product__card-wrapper'); // get element of cards
    let prevBtn = document.querySelector('.product__cards-btn--prev'); // get element of prev button
    let nextBtn = document.querySelector('.product__cards-btn--next'); // get element of next button

    let counter = 0; // initialize counter increases with number of items from 5 onwards
    let cardSize = cards[0].offsetWidth; // get size of card

    // hide or show buttons
    let hideOrShow = {
        hide: (el) => {
            el.style.display = 'none';
        },
        show: (el) => {
            el.style.display = 'block';
        }
    }

    hideOrShow.hide(nextBtn);
    hideOrShow.hide(prevBtn);

    // if the total number of products is greater than 5, the next button will appear
    if (cards.length > 5) {
        hideOrShow.show(nextBtn);

        nextBtn.onclick = () => {
            hideOrShow.show(prevBtn);

            counter++;
            cardsCtn.style.transform = `translateX(${-counter * cardSize}px)`;
            if (counter === cards.length - 5) hideOrShow.hide(nextBtn);
        }
    }

    prevBtn.onclick = () => {
        counter--;
        cardsCtn.style.transform = `translateX(${-counter * cardSize}px)`;

        if (counter === 0) {
            hideOrShow.hide(prevBtn);
            if (cards.length > 5) hideOrShow.show(nextBtn);
        }
    }
}

slideInfoCard();

// change background image when mouseover
function changeSlideThumb() {
    let thumbCnt = document.querySelector('.product-slide'); // get element of thumbnail container
    let bgrThumb = thumbCnt.querySelector('.product__img'); // get element of slide background thumbnail
    let thumbs = thumbCnt.querySelectorAll('.product__card-img'); // get element of slide thumbnails

    for (let thumb of thumbs) {
        thumb.onmouseover = () => {
            for (let thumb of thumbs) {
                (thumb.parentElement).style.border = '2px solid transparent';
            }

            (thumb.parentElement).style.border = '2px solid var(--var-color)';
            bgrThumb.style.opacity = '1';
            bgrThumb.setAttribute('src', thumb.getAttribute('src'));
        }
    }
}

changeSlideThumb();

// handle add product quanity
let inpCtn = document.querySelector('.shop__qnt-btns'); // get element of input container
addProductQnt(inpCtn);

// render options items info and handle event when add to cart button is clicked
function renderOptionsInfo() {
    const optsInfo = [
        {
            id: 'p-o-1',
            name: 'Creeper',
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433',
        },
        {
            id: 'p-o-2',
            name: 'Trong suốt',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/013244285218-1_1800x1800.jpg?v=1611083347',
        },
        {
            id: 'p-o-3',
            name: 'TNT',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/013244356772-2_1800x1800.jpg?v=1611078189'
        },
    ] // save options info

    let bgrThumb = document.querySelector('.product__img'); // get element of slide background thumbnail
    let optsCtn = document.querySelector('.product__options'); // get element of options container
    let optsItemCtn = optsCtn.querySelector('.product__options-items'); // get element of options items container
    let errorMsg = optsCtn.querySelector('.product__options-items-error-message'); // get element of options error message
    let optInfoItems = ''; // save option items 

    for (let optInfo of optsInfo) {
        optInfoItems += `<button class="product__options-item">${optInfo.name}</button>`
    }

    optsItemCtn.innerHTML = optInfoItems;

    let optEls = document.querySelectorAll('.product__options-item'); // get element of options
    let selectedCl = 'product__options-item-selected'; // get selected class

    for (let optEl of optEls) {
        optEl.onmouseover = () => {
            for (let optInfo of optsInfo) {
                if (optEl.textContent === optInfo.name) {
                    bgrThumb.setAttribute('src', optInfo.img);
                }
            }
        }

        optEl.onclick = () => {
            for (let optEl of optEls) {
                if (optEl.classList.contains(selectedCl)) {
                    optEl.classList.remove(selectedCl);
                }
            }
            optEl.classList.add(selectedCl);

            if (optsCtn.classList.contains('product__options-error')) {
                optsCtn.classList.remove('product__options-error');
                errorMsg.style.display = 'none';
            }
        }
    }

    let addToCartBtn = document.querySelector('.product-btn-main__adding'); // get element of add to cart button
    let toastOverlay = document.querySelector('.action-toast'); // get element of toast overlay
    let toastCtn = document.querySelector('.action-toast > .action-toast-container'); // get element of toast container

    addToCartBtn.onclick = () => {
        for (let optEl of optEls) {
            if (optEl.classList.contains(selectedCl)) {
                toastOverlay.style.display = 'flex';
                setTimeout(() => {
                    toastCtn.classList.add('action-toast-container-show');
                });

                setTimeout(() => {
                    toastCtn.classList.remove('action-toast-container-show');
                }, 2000);
                setTimeout(() => {
                    toastOverlay.style.display = 'none';
                }, 2150);
            }
        }

        let isSelected = ([...optEls]).some(optEl => optEl.classList.contains(selectedCl)); // check if an element is selected 

        if (!isSelected) {
            optsCtn.classList.add('product__options-error');
            errorMsg.style.display = 'block';
        }
    }
}

renderOptionsInfo()

// render combo cards
function renderComboCards() {
    const comboCardsInfo = [
        {
            id: 'c-c-i-1',
            name: 'Áo thun tay ngắn cho người lớn gà Jolly Minecraft',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCJM-CHCKN-100011-MF_1800x1800.png?v=1614028694',
            oldPrice: 250000,
            curPrice: 150000
        },
        {
            id: 'c-c-i-2',
            name: 'Chăn đắp và lót giường Minecraft Dungeon',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/32281406691-1b_1800x1800.jpg?v=1611683885',
            oldPrice: 140000,
            curPrice: 50000
        },
        {
            id: 'c-c-i-3',
            name: 'Ly gốm sứ bom TNT Minecraft',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-TNT-100040-11oz-mug-Left-MF_1800x1800.png?v=1612793288',
            oldPrice: 329000,
            curPrice: 210000
        },
        {
            id: 'c-c-i-4',
            name: 'Mũ in hình logo Minecraft được thêu bằng vải',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-LOGO-100172-Black-MF_1800x1800.png?v=1612462143',
            oldPrice: 50000,
            curPrice: 19000
        },
    ]; // save combo cards elements info
    let comboCardsCtn = document.querySelector('.products-combo__cards'); // get element of combo cards container
    let comboCardsEl = '';  // save combo card elements

    for (let comboCardInfo of comboCardsInfo) {
        comboCardsEl +=
            `<div id="${comboCardInfo.id}" class="products-combo__card">
                <a href="/" class="products-combo__card-link">
                    <div class="products-combo__card-img-wrapper">
                        <img class="products-combo__card-img" src="${comboCardInfo.img}">
                    </div>
                    <span class="products-combo__card-name">${comboCardInfo.name}</span>
                </a>
                <div class="products-combo__card-wrapper">
                    <div class="shop-checkbox">
                        <input class="shop-checkbox__input" type="checkbox">
                        <div class="shop-checkbox__bgc"></div>
                    </div>
                    <div class="products-combo__card-price">
                        <span class="products-combo__card-price-old hide-on-mobile">₫${numberWithCommas(comboCardInfo.oldPrice)}</span>
                        <span class="products-combo__card-price-new">₫${numberWithCommas(comboCardInfo.curPrice)}</span>
                    </div>
                </div>
            </div>`;
    }

    comboCardsCtn.innerHTML = comboCardsEl;

    let comboCardEls = document.querySelectorAll('.products-combo__card'); // get element of combo cards
    let oldTotal = document.querySelector('.products-combo__checkout-total-old'); // get element of old total
    let currentTotal = document.querySelector('.products-combo__checkout-total-current'); // get element of current total
    let saveTotal = document.querySelector('.products-combo__checkout-save-price'); // get element of save total

    let oldTotalNew = 0;
    let currentTotalNew = 0;

    for (let comboCardEl of comboCardEls) {
        let comboCardInp = comboCardEl.querySelector('.shop-checkbox__input');

        comboCardInp.onclick = () => {
            let comboCardElID = comboCardEl.id; // get id of combo card when clicked

            if (comboCardEl.classList.contains('shop-checkbox--checked')) {
                comboCardEl.classList.remove('shop-checkbox--checked');
            } else {
                comboCardEl.classList.add('shop-checkbox--checked');
            }

            let plusOrMinus = (letter) => {
                for (let comboCardInfo of comboCardsInfo) {
                    if (comboCardElID === comboCardInfo.id) {
                        eval(`oldTotalNew ${letter}= comboCardInfo.oldPrice`);
                        eval(`currentTotalNew ${letter}= comboCardInfo.curPrice`);
                    }
                }

                oldTotal.innerHTML = `₫${numberWithCommas(oldTotalNew)}`;
                currentTotal.innerHTML = `₫${numberWithCommas(currentTotalNew)}`;
            }

            if (comboCardEl.classList.contains('selected')) {
                comboCardEl.classList.remove('selected');
            } else {
                comboCardEl.classList.add('selected');
            }

            if (comboCardEl.classList.contains('selected')) {
                plusOrMinus('+');
            } else {
                plusOrMinus('-');
            }

            saveTotal.innerHTML = `₫${numberWithCommas(oldTotalNew - currentTotalNew)}`;
        }
    }
}

renderComboCards();

// render toast message when voucher save button is clicked
let btns = document.querySelectorAll('.product-vouchers__btn-save'); // get element of voucher save buttons
sildeToastMsg(btns);

function showMore() {
    let proDesEl = document.querySelector('.product-description'); // get element of product description
    let dots = proDesEl.querySelector('.dots'); // get element of dots
    let textMore = proDesEl.querySelector('.text-more'); // get element of dots
    let readMoreBtn = proDesEl.querySelector('.read-more-btn'); // get element of read more button
    let readMoreBtnText = proDesEl.querySelector('.read-more-btn__text'); // get element of read more text
    let iconDown = readMoreBtn.querySelector('.read-more-btn__icon--down'); // get element of icon down
    let iconUp = readMoreBtn.querySelector('.read-more-btn__icon--up'); // get element of icon up

    readMoreBtn.onclick = () => {
        dots.classList.toggle('hidden');
        textMore.classList.toggle('hidden');
        iconDown.classList.toggle('hidden');
        iconUp.classList.toggle('hidden');
        readMoreBtnText.classList.toggle('text-show');


        if (readMoreBtnText.classList.contains('text-show')) {
            readMoreBtnText.innerHTML = 'Ẩn bớt';
        } else {
            readMoreBtnText.innerHTML = 'Xem thêm';
        }
    }
}

showMore();