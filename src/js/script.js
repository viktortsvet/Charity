window.addEventListener('DOMContentLoaded', () => {
    let donate = document.querySelector('.items__donate'),
        title = document.querySelector('.items__title'),
        subtitle = document.querySelector('.items__subtitle'),
        charity = document.querySelector('.items__charity'),
        charityImg = document.querySelector('.items__char');

    const mouseDo = (selector1, selector2, classActive) => {
        selector1.classList.add(classActive);
        selector2.classList.add(classActive);
    };
    donate.addEventListener('mouseover', () => {
        mouseDo(title, subtitle, 'showTitle');
    });
    charity.addEventListener('mouseover', () => {
        charityImg.classList.add('showCharity');
    });
});