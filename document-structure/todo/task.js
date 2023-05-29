const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (input.value) {
        tasksList.insertAdjacentHTML('afterBegin', 
            `<div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
    }
    form.reset();

    const taskClose = document.querySelector('.task__remove');
    taskClose.addEventListener('click', (event) => {
        event.target.closest('.task').remove();
    });
});

