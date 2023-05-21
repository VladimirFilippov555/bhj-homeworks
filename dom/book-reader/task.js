'use strict'

const book = document.getElementById('book');
const bookControl = document.querySelector('.book__controls');

bookControl.addEventListener('click', function(event) {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains('font-size_active', 'color_active')) {
        return;
    } 
    
    if (target.parentElement.classList.contains('book__control_font-size')) {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        target.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        if (target.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } 
        if (target.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        } 
    } else {
        document.querySelector('.color_active').classList.remove('color_active');
        target.classList.add('color_active');
        if (target.parentElement.classList.contains('book__control_color')) {
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            if (target.classList.contains('text_color_black')) {
                book.classList.add('book_color-black');
            } 
            if (target.classList.contains('text_color_gray')) {
                book.classList.add('book_color-gray');
            } 
            if (target.classList.contains('text_color_whitesmoke')) {
                book.classList.add('book_color-whitesmoke');
            } 
        }
        if (target.parentElement.classList.contains('book__control_background')) {
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            if (target.classList.contains('bg_color_black')) {
                book.classList.add('book_bg-black');
            } 
            if (target.classList.contains('bg_color_gray')) {
                book.classList.add('book_bg-gray');
            } 
            if (target.classList.contains('bg_color_white')) {
                book.classList.add('book_bg-white');
            } 
        }
    }
});


