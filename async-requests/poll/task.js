const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('load', () => {
    const data = xhr.response;
    callback(data);
});

const callback = (data) => {
    pollTitle.textContent = data.data.title;
    const answers = data.data.answers;
    renderButton(answers);
    clickButton();
}

function createButton(element) {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = element;
    button.type = 'button';
    pollAnswers.append(button);
}

const renderButton = (answers) => {
    answers.forEach(element => {
        createButton(element);
    });
}

const clickButton = () => {
    document.querySelectorAll('.poll__answer').forEach(element => {
        element.addEventListener('click', () => {
            alert('Спасибо, Ваш голос засчитан!');
        });
    });
}