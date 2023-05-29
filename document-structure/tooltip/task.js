const toolTips = Array.from(document.getElementsByClassName('has-tooltip'));

toolTips.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').classList.remove('tooltip_active');
        } 
        const {bottom, left} = element.getBoundingClientRect();
        element.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${bottom}px">${element.title}</div>`);
    });
});

window.addEventListener('scroll', () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').classList.remove('tooltip_active');
    } 
})

