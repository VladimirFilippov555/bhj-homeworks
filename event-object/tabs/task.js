const arrayNavigation = Array.from(document.querySelectorAll('.tab'));
const arrayContents = Array.from(document.querySelectorAll('.tab__content'));

for (let index in arrayNavigation) {
    arrayNavigation[index].addEventListener('click', () => {
        const tabActive = document.querySelector('.tab_active');
        const contentActive = document.querySelector('.tab__content_active');
        
        if (arrayNavigation[index] === tabActive) return;
        
        tabActive.classList.remove('tab_active');
        contentActive.classList.remove('tab__content_active');
        arrayNavigation[index].classList.add('tab_active');
        arrayContents[index].classList.add('tab__content_active');
    });
}
