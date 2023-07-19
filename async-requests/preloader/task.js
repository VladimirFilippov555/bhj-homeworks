const items = document.querySelector('#items');
const loader = document.querySelector('#loader');
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('load', () => {
    const data = xhr.response;
    callback(data);
});

const callback = (data) => {
    const objectArr = [];
    const object = Object.keys(data.response.Valute);
    object.forEach(element => {
        objectArr.push(
            {
                charCode: data.response.Valute[element].CharCode,
                name: data.response.Valute[element].Name,
                value: data.response.Valute[element].Value,
            }
        );
    });

    renderElement(objectArr);
}

const createElement = ({ charCode, name, value }) => {
    const element = document.createElement('div');
    element.classList.add('item');

    const charCodeElement = document.createElement('div');
    charCodeElement.classList.add('item__code');
    charCodeElement.textContent = charCode;

    const nameElement = document.createElement('div');
    nameElement.classList.add('item__currency');
    nameElement.textContent = name;

    const valueElement = document.createElement('div');
    valueElement.classList.add('item__value');
    valueElement.textContent = value;

    element.append(charCodeElement, nameElement, valueElement);
    items.append(element);
}

const renderElement = (arr) => {
    arr.forEach(object => {
        createElement(object);
    });
    loader.classList.remove('loader_active');
}