const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (input.value.trim()) {
        tasksList.insertAdjacentHTML('afterBegin', 
            `<div class="task">
                <div class="task__title">
                    ${input.value.trim()}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
            
        const taskClose = document.querySelector('.task__remove');
        taskClose.addEventListener('click', (e) => {
            e.target.closest('.task').remove();
        });
    } 
    form.reset();
});

