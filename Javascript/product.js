
// PAGE PRODUCTS
const pageProducts = [
    {
        id: 0,
        img: './assets/img/xe_tai.png',
        name: 'Mô Hình LEGO Technic 42078 - Xe Tải Cẩu Container Mack Anthem (LEGO Technic 42078 Mack Anthem)',
        oldPrice: '8.449.000',
        curPrice: '6.999.000',
        sold: 18,
        react: 'Yêu thích',
        per: 33,
        label: 'GIẢM',
        brand: 'Technic',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/xe_dia_hinh.png',
        name: 'Mô Hình LEGO Technic 42095 - Xe Địa Hình Biểu Diễn điều khiển từ xa',
        oldPrice: '5.4999.000',
        curPrice: '3.999.000',
        sold: 42,
        react: 'Yêu thích',
        per: 15,
        label: 'GIẢM',
        brand: 'Technic',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/khung_long.png',
        name: 'Đồ Chơi LEGO Khủng Long Jurassic World 41614 - Owen & Blue',
        oldPrice: '1.299.000',
        curPrice: '899.000',
        sold: 39,
        react: 'Yêu thích',
        per: 65,
        label: 'GIẢM',
        brand: 'Brick headz',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/tau_luon.png',
        name: 'Mô Hình LEGO Creator Expert 10261 - Tàu Lượn Siêu Tốc gắn Động Cơ (LEGO 10261 Roller Coaster)',
        oldPrice: '6.999.000',
        curPrice: '2.999.000',
        sold: 41,
        react: 'Yêu thích',
        per: 63,
        label: 'GIẢM',
        brand: 'Creator',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/angry_bird.png',
        name: 'Đồ Chơi LEGO Angry Birds 75826 - Tấn Công Lâu Đài của Vua Lợn (LEGO Angry Birds King Pigs Castle 75826)',
        oldPrice: '4.690.000',
        curPrice: '3.250.000',
        sold: 17,
        react: 'Yêu thích',
        per: 47,
        label: 'GIẢM',
        brand: 'Lego',
        originName: 'Việt Nam',
        link: 'product-info.html'
    }, {
        id: 0,
        img: './assets/img/tram_xe.png',
        name: 'Mô Hình LEGO Creator Expert 10264 - Trạm Xe Cổ Điển (LEGO 10264 Corner Garage)',
        oldPrice: '8.570.000',
        curPrice: '6.350.000',
        sold: 26,
        react: 'Yêu thích',
        per: 8,
        label: 'GIẢM',
        brand: 'Lego',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/xe_buyt.png',
        name: 'Mô Hình LEGO Creator Expert 10258 - Xe Buýt London (LEGO Creator Expert London Bus)',
        oldPrice: '7.930.000',
        curPrice: '4.912.000',
        sold: 89,
        react: 'Yêu thích',
        per: 12,
        label: 'GIẢM',
        brand: 'Creator',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/svd.png',
        name: 'Đồ Chơi LEGO Creator Expert 10272 - Sân Vận Động Manchester United Old Trafford (LEGO 10272 Old Trafford - Manchester United)',
        oldPrice: '14.950.000',
        curPrice: '10.720.000',
        sold: 4,
        react: 'Yêu thích',
        per: 44,
        label: 'GIẢM',
        brand: 'Creator',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/xe_hoi.png',
        name: 'Đồ Chơi LEGO Creator Expert 10271 - Xe Fiat 500 cổ điển (LEGO 10271 Fiat 500)',
        oldPrice: '4.350.000',
        curPrice: '3.129.000',
        sold: 69,
        react: 'Yêu thích',
        per: 49,
        label: 'GIẢM',
        brand: 'Creator',
        originName: 'Việt Nam',
        link: 'product-info.html'
    },
    {
        id: 0,
        img: './assets/img/hai_dang.png',
        name: 'Mô Hình LEGO Creator 31051 - Xếp hình Ngọn Hải Đăng và Bến Tàu 3-trong-1 (LEGO Creator Lighthouse Point 31051)',
        oldPrice: '2.430.000',
        curPrice: '1.999.000',
        sold: 111,
        react: 'Yêu thích',
        per: 24,
        label: 'GIẢM',
        brand: 'Creator',
        originName: 'Việt Nam',
        link: 'product-info.html'
    }
]

function renderPageProducts() {
    let productElsCtn = document.querySelector('.home-product .grid__row'); // get element of product container
    let productEls = ''; // save page product elements

    for (let pageProduct of pageProducts) {
        productEls +=
            `<div class="grid__column-2-4">
                <a href="product-Info.html" id="${pageProduct.id}" class="home-product-item">
                    <div class="home-product-item__img" style="background-image: url(${pageProduct.img});"></div>
                    <div class="home-product-item__name">${pageProduct.name}</div>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${pageProduct.oldPrice}đ</span>
                        <span class="home-product-item__price-current">${pageProduct.curPrice}đ</span>
                    </div>
                    <div class="home-product-item__action">
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fa fa-star"></i>
                            <i class="home-product-item__star--gold fa fa-star"></i>
                            <i class="home-product-item__star--gold fa fa-star"></i>
                            <i class="home-product-item__star--gold fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <span class="home-product-item__sold"> ${pageProduct.sold + ' đã bán'} </span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${pageProduct.brand}</span>
                        <span class="home-product-item__origin-name">${pageProduct.originName}</span>
                    </div>
                    <div class="home-product-item__favourite">
                        <i class="fa fa-check"></i>
                        <span>${pageProduct.react}</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent"> ${pageProduct.per}% </span>
                        <span class="home-product-item__sale-off-label"> ${pageProduct.label} </span>
                    </div>
                </a>
            </div>`
    }

    if (productElsCtn) {
        productElsCtn.innerHTML = productEls;
    }
}

renderPageProducts();


// Function sort price
function sortPrice() {
    // Get the element of the low to high sort button 
    let firstSelection = document.querySelector('.select-input__list > li:first-child');
    // get the element of the high to low sort button
    let lastSelection = document.querySelector('.select-input__list > li:last-child');

    // Remove dots and convert to numbers from price
    function fixPrice(num) {
        return Number.parseInt(num.replace(/[\.]/g, ''));
    }

    // Sort from low to high
    if (firstSelection) {
        firstSelection.onclick = () => {
            pageProducts.sort((a, b) => {
                a = fixPrice(a.curPrice);
                b = fixPrice(b.curPrice);
                return a - b;
            })
            renderPageProducts();
        }
    }

    // Sort from high to low
    if (lastSelection) {
        lastSelection.onclick = () => {
            pageProducts.sort((a, b) => {
                a = fixPrice(a.curPrice);
                b = fixPrice(b.curPrice);
                return b - a;
            })
            renderPageProducts();
        }
    }
}

sortPrice();

// Sort product 

function sortProduct() {
    // Get btn class list
    let btnFilters = document.getElementsByClassName('home-filter__btn');
    // get elm of sale product btn 
    let saleBtn = btnFilters[0];
    // get elm of new product btn 
    let newBtn = btnFilters[1];
    // get elm of best selling btn 
    let bestSellBtn = btnFilters[2];

    function removePrimaryClass() {
        for (let btnFilter of btnFilters) {
            btnFilter.classList.remove('btn--primary');
        }
    }

    if (saleBtn) {
        saleBtn.onclick = () => {
            // console.log('success');
            removePrimaryClass();
            saleBtn.classList.add('btn--primary');
            pageProducts.sort((a, b) => {
                return a.per - b.per;
            })
            renderPageProducts();
        }
    }

    if (newBtn) {
        newBtn.onclick = () => {
            // console.log('success');
            removePrimaryClass();
            newBtn.classList.add('btn--primary');
            pageProducts.sort((a, b) => {
                return b.sold - a.sold;
            })
            renderPageProducts();
        }
    }

    if (bestSellBtn) {
        bestSellBtn.onclick = () => {
            // console.log('success');
            removePrimaryClass();
            bestSellBtn.classList.add('btn--primary');
            pageProducts.sort((a, b) => {
                return b.sold - a.sold;
            })
            renderPageProducts();
        }
    }
}

sortProduct();

