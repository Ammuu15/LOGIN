const signInBtnLink = document.querySelector('.signInBtn-Link');
const wrapper = document.querySelector('.wrapper');

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle(active);
});