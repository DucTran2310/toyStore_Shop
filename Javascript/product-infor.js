// Add image slider product
const slideProducts = [
    {
        img: './assets/img/svd.png',
    },
    {
        img: './assets/img/slide1.jpg',
    },
    {
        img: './assets/img/slide2.jpg',
    },
    {
        img: './assets/img/slide3.jpg',
    },
    {
        img: './assets/img/slide4.jpg',
    },
    {
        img: './assets/img/slide5.jpg',
    },
    {
        img: './assets/img/slide6.jpg',
    },
];

function renderSlideProduct() {
    let productElsCtn = document.querySelector('.product__cards-container'); // get element of cards container
    let productEls = ''; // save page product elements

    for (let slideProduct of slideProducts) {
        productEls +=
            `<div class="product__cards-container">
            <div class="product__card-wrapper">
                <div class="product__card">
                    <img src="${slideProduct.img}" class="product__card-img">
                </div>
            </div>
        </div>`
    }

    if (productElsCtn) {
        productElsCtn.innerHTML = productEls;
    }
}

renderSlideProduct();

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
                (thumb.parentElement).style.border = '2px solid transparent'; //set style for element parent
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
    const optsInfos = [
        {
            id: 'p-o-1',
            name: 'size S',
            img: './assets/img/svd.png',
        },
        {
            id: 'p-o-2',
            name: 'size M',
            img: './assets/img/slide1.jpg',
        },
        {
            id: 'p-o-3',
            name: 'size L',
            img: './assets/img/slide2.jpg'
        },
    ] // save options info

    let bgrThumb = document.querySelector('.product__img'); // get element of slide background thumbnail
    let optsCtn = document.querySelector('.product__options'); // get element of options container
    let optsItemCtn = optsCtn.querySelector('.product__options-items'); // get element of options items container
    let errorMsg = optsCtn.querySelector('.product__options-items-error-message'); // get element of options error message
    let optInfoItems = ''; // save option items 

    // add option items
    for (let optInfo of optsInfos) {
        optInfoItems += `<button class="product__options-item">${optInfo.name}</button>`
    }

    optsItemCtn.innerHTML = optInfoItems;

    let optEls = document.querySelectorAll('.product__options-item'); // get element of options
    let selectedCl = 'product__options-item-selected'; // get selected class

    for (let optEl of optEls) {
        optEl.onmouseover = () => {
            for (let optInfo of optsInfos) {
                // content of optInfo is coincide name of optInfo
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
            name: 'Khối rubik bấm nút đồ chơi HDY',
            img: './assets/img/anh_combo.png',
            oldPrice: 450000,
            curPrice: 240000
        },
        {
            id: 'c-c-i-2',
            name: 'Sách vải HDY hình động vật 3D có âm thanh ',
            img: './assets/img/anh_combo2.png',
            oldPrice: 200000,
            curPrice: 109000
        },
        {
            id: 'c-c-i-3',
            name: 'Đồ Chơi Con Quay HDY Có Cốc Hút Gắn Tường',
            img: './assets/img/anh_combo3.png',
            oldPrice: 139000,
            curPrice: 89000
        },
        {
            id: 'c-c-i-4',
            name: 'Tranh xếp hình 3D HDY chất liệu gỗ cho bé',
            img: './assets/img/anh_combo4.png',
            oldPrice: 209999,
            curPrice: 12900
        },
    ]; // save combo cards elements info
    let comboCardsCtn = document.querySelector('.products-combo__cards'); // get element of combo cards container
    let comboCardsEl = '';  // save combo card elements

    // Add product combo sale
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

    let comboCardEls = document.querySelectorAll('.products-combo__card'); // get element of combo cards (thẻ chứa các product sale)
    let oldTotal = document.querySelector('.products-combo__checkout-total-old'); // get element of old total (giá tiền cũ)
    let currentTotal = document.querySelector('.products-combo__checkout-total-current'); // get element of current total (giá tiền hiện tại)
    let saveTotal = document.querySelector('.products-combo__checkout-save-price'); // get element of save total (giá tiền đã tiết kiệm được)

    let oldTotalNew = 0;
    let currentTotalNew = 0;

    for (let comboCardEl of comboCardEls) {
        let comboCardInp = comboCardEl.querySelector('.shop-checkbox__input');

        comboCardInp.onclick = () => {
            let comboCardElID = comboCardEl.id; // get id of combo card when clicked
            // Sản phẩm nào được chọn thì remove, ko thì tích vào 
            if (comboCardEl.classList.contains('shop-checkbox--checked')) {
                comboCardEl.classList.remove('shop-checkbox--checked');
            } else {
                comboCardEl.classList.add('shop-checkbox--checked');
            }

            // function tính toán giá tiền cũ và hiện tại 
            let plusOrMinus = (letter) => {
                for (let comboCardInfo of comboCardsInfo) {
                    if (comboCardElID === comboCardInfo.id) {
                        eval(`oldTotalNew ${letter}= comboCardInfo.oldPrice`);
                        eval(`currentTotalNew ${letter}= comboCardInfo.curPrice`);
                    }
                }

                // in số bằng dấu . phân cách
                oldTotal.innerHTML = `₫${numberWithCommas(oldTotalNew)}`;
                currentTotal.innerHTML = `₫${numberWithCommas(currentTotalNew)}`;
            }

            // khi tích vào có tích rồi thì bỏ tích
            if (comboCardEl.classList.contains('selected')) {
                comboCardEl.classList.remove('selected');
            } else {
                comboCardEl.classList.add('selected');
            }

            // kiểm tra ==> đã tích thì tính tổng ngược lại thì trừ đi
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

    // classList.toggle("hidden", true)
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