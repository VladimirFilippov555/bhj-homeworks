
const progress = document.getElementById('progress');
const form = document.querySelector('#form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', progressHandler, false)
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});

function progressHandler(event) {
  const percentLoaded = Math.round(event.loaded / event.total);
  progress.value = percentLoaded;
}