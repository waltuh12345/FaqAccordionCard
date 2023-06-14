const container = document.querySelector('.container');
let target = '';
function changeIcon(element) {
    
    if (element.classList.contains('fa-chevron-down')) {
        element.classList.remove('fa-chevron-down')
        element.classList.add('fa-chevron-up')
    } else {
        element.classList.add('fa-chevron-down');
        element.classList.remove('fa-chevron-up');
    }
}
container.addEventListener('click', e => {
    target = e.target;

    const li = target.closest('li');
    const icon = li.querySelector('.fa');
    const children = Array.from(li.children);

    console.log(icon)
    if (target.matches('button')) {
        li.classList.toggle('active');
        if (li.classList.contains('active')) {
            changeIcon(icon);
            animateCSS(children[1],'fadeInDown')
        } else {
            changeIcon(icon);
        }
    }

    
})
const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
const animationName = `${prefix}${animation}`;

element.classList.add(`${prefix}animated`, animationName);

// When the animation ends, we clean the classes and resolve the Promise
function handleAnimationEnd(event) {
    event.stopPropagation();
    element.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
}

element.addEventListener('animationend', handleAnimationEnd, {once: true});
});