const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[trigger-close]');
const Overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i]dataset.target,
        targetEl = document.querySelector('#${currentId}')

    const openData = function () {
        targeteEl.classList.remove('active');
    }
}