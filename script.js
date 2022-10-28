const boxes = document.querySelectorAll('.box');
document.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < triggerBottom) {
            box.classList.remove('hide');
        } else {
            box.classList.add('hide');
        }
    })
})