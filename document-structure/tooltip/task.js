const toolTips = Array.from(document.getElementsByClassName('has-tooltip'));

toolTips.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        target = event.target;

        if (document.querySelector('.tooltip')) {
            let toolTip = document.querySelector('.tooltip');

            if (toolTip.innerText === target.title) {
                toolTip.classList.toggle('tooltip_active');
                return;
            } else {
                toolTip.remove();
            }
        } 
        const {bottom, left} = element.getBoundingClientRect();
        element.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${bottom}px">${element.title}</div>`);
    });
});

window.addEventListener('scroll', () => {
    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
    } 
})

