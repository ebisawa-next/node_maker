// scss
import './scss/style.scss';

// pages
import maker from './js/pages/maker/_maker'

(() => {
    const page = document.querySelector('#prg-maker')
    if(!page) return
    maker()
})()
