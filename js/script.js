// Toggle class

const navbarNav = document.querySelector('.navlinks');

document.querySelector('#hm-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk keluar navbar

const hamburger = document.querySelector('#hm-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
});


// script.js
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};



//  Modals Apk
// const itemApk= document.querySelector('#item-detail-modal');
// const itemButton = document.querySelector('#item-modal');
// 
// itemButton.onclick = (e) => {
  // itemApk.style.display = 'flex';
  // e.preventDefault();
// };
//  kilk close 
// document.querySelector('.modal .close-icon').onclick = (e) => {
  // itemApk.style.display = 'none';
  // e.preventDefault();
// }
// klik diluar




// Modal Web
// const itemWeb= document.querySelector('#item-web');
// const itemButton = document.querySelector('#item-modal2');

// itemButton.onclick = (e) => {
//   itemApk.style.display = 'flex';
//   e.preventDefault();
// };
// //  kilk close 
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemApk.style.display = 'none';
//   e.preventDefault();
// };
// // Modal DKV
// const itemDkv= document.querySelector('#item-apk');
// const itemButton = document.querySelector('#item-modal1');

// itemButton.onclick = (e) => {
//   itemApk.style.display = 'flex';
//   e.preventDefault();
// };
// //  kilk close 
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemApk.style.display = 'none';
//   e.preventDefault();
// };

// // Modal Jaringan
// const itemJar= document.querySelector('#item-apk');
// const itemButton = document.querySelector('#item-modal1');

// itemButton.onclick = (e) => {
//   itemApk.style.display = 'flex';
//   e.preventDefault();
// };
// //  kilk close 
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemApk.style.display = 'none';
//   e.preventDefault();
// };