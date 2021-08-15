// Category items
function renderCgrItems() {
    const cgrItems = [
        {
            name: 'Tất cả sản phẩm',
            link: '#',
            active: true
        },
        {
            name: 'Top bán chạy',
            link: '#',
            active: false
        },
        {
            name: 'Deal hot',
            link: '#',
            active: false
        },
        {
            name: 'Áo thun',
            link: '#',
            active: false
        },
        {
            name: 'Móc khóa',
            link: '#',
            active: false
        },
        {
            name: 'Hàng mới',
            link: '#',
            active: false
        },
        {
            name: 'Sạc dự phòng',
            link: '#',
            active: false
        },
        {
            name: 'Hàng khuyến mãi',
            link: '#',
            active: false
        },
        {
            name: 'Gấu bông',
            link: '#',
            active: false
        },
        {
            name: 'Tai nghe',
            link: '#',
            active: false
        },
    ]

    //Get elements of category list
    let cgrEls_list = document.querySelector('.category-pc .category-list');
    //Save category item = null
    let cgrEls = '';

    for (let cgrItem of cgrItems) {
        if (cgrItem.active === true) {
            cgrEls +=
                `<li class="category-item category-item--active">
                    <div class="category-item__icon">
                        <i class="fa fa-caret-right"></i>
                    </div>
                    <a href="${cgrItem.link}" class="category-item__link">${cgrItem.name}</a>
                </li>`
        } else {
            cgrEls +=
                `<li class="category-item">
                    <div class="category-item__icon">
                        <i class="fa fa-caret-right"></i>
                    </div>
                    <a href="${cgrItem.link}" class="category-item__link">${cgrItem.name}</a>
                </li>`
        }
    }

    cgrEls_list.innerHTML = cgrEls;
}

renderCgrItems();

function hoverCgrItem() {
    var i = -1;
    //Set active property of item
    let activeItem = 'category-item--active';

    // get element of category container
    let categoryCtn = document.querySelector('.category-px > .category');
    // get element of category list
    let categoryList = document.querySelector('.category-list');
    // get element of category items
    let categoryItems = document.querySelector('.category-item');

    // remove active property of item
    let removeColor = () => {
        for (let categoryItem of categoryItems) {
            // check active of category item
            if (categoryItem.classList.contains(activeItem)) {
                categoryItem.classList.remove(activeItem);
            }
        }
    }

    // handle hover
    for (let categoryItem of categoryItems) {
        categoryItem.onmouseover = () => {
            removeColor();
            categoryItem.classList.add(activeItem);
        }
    }

    // loop through all items until category item reach the active item
    for (let categoryItem of categoryItems) {
        i++;
        if (categoryItem.classList.contains(activeItem)) {
            break;
        }
    }

    // when hovering out container will reset the original active state
    categoryList.onmouseleave = () => {
        let cgrActChild = categoryList.children[i]; // get element of original active item

        removeColor();
        cgrActChild.classList.add(activeItem);
    }
}

hoverCategoryItems();