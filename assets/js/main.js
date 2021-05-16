'use strict';

//Helper fn:

const $ = (el) => document.querySelector(el);
const $$ = (el) => Array.from(document.querySelectorAll(el));
const $on = (el, ev, fn) =>
  Array.isArray(el)
    ? el.map((item) => $on(item, ev, fn))
    : el.addEventListener(ev, fn);

let cases = [
  'index.html',
  'lounger.html',
  'experience.html',
  'inspiration.html',
  'shop.html',
];

let list = $$('.link-tag');

//HANDLE SIDE NAV:

//Remove active style:
function removeStyle() {
  $$('.link-tag').map(
    (el) => el.classList.contains('active') && el.classList.remove('active')
  );
}

function changeUrl() {
  return window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1
  );
}

//Add active style:
function addStyle(items, target) {
  items.map((el, i) => {
    if (changeUrl() == el) {
      target[i].classList.add('active');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  removeStyle();
  addStyle(cases, list);
});

//SIDE NAV:

//toggle side nav:
$on($('.nav-hidden'), 'click', () =>
  $('.side-nav').classList.toggle('show-side-nav')
);

//BURGER:

// burger menu:

$on($('.burger'), 'click', () => {
  $('.main-nav').classList.toggle('main-nav-show');
  $('.burger').classList.toggle('burger-close');
});

//CONTACT

$on($('.form'), 'submit', (e) => e.preventDefault());

$on($$('.contact-us'), 'click', () =>
  $('.contact').classList.toggle('contact-show')
);

$on($('#cancel'), 'click', () =>
  $('.contact').classList.remove('contact-show')
);
