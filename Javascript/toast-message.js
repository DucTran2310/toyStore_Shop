// render toast message when voucher save button is clicked
function sildeToastMsg(btns) {
    let toastCtn = document.querySelector('.toast-msg-container'); // get element of toast message container

    for (let saveBtn of btns) {
        saveBtn.onclick = () => {
            let toastMsgEl = document.createElement('div');

            toastMsgEl.classList.add('toast-msg');
            toastMsgEl.innerHTML = `
                <i class="toast-msg__icon fas fa-check-circle"></i>
                <div class="toast-msg__body">
                    <div class="toast-msg__title">Chúc mừng!</div>
                    <div class="toast-msg__content">Bạn đã lưu mã giảm giá của Shop thành công</div>
                </div>
                <i class="toast-msg__close fas fa-times"></i>
            `;
            toastCtn.appendChild(toastMsgEl);

            let toastClose = toastCtn.querySelector('.toast-msg__close');

            let autoRemoveId = setTimeout(() => {
                toastCtn.removeChild(toastMsgEl);
            }, 3000);

            toastMsgEl.onclick = (el) => {
                if (el.target.closest('.toast-msg__close')) {
                    toastCtn.removeChild(toastMsgEl);
                    clearTimeout(autoRemoveId);
                }
            }
        }
    }
}