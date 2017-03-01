var nav = document.getElementById("nav");
var navHeader = document.getElementById("nav-header");
var navContainer = document.getElementById("nav-container");
var home = document.getElementById("home-btn");
var mobileLinks = document.getElementById("mobile-links");

var mobileNavItems = document.querySelectorAll('.mobile-nav-item');



var stop = (nav.offsetTop + 400);
//console.log(nav.offsetTop);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log(scrollTop, nav.offsetTop);
    // nav.offsetTop;

    if (scrollTop >= 320) {
        nav.className = 'stick';
        navHeader.className = 'display-none';
        navContainer.className = 'top-container';
        home.className = 'display';
        mobileLinks.className = 'display-none';

      /*  for (var i = 0; i < mobileNavItems.length; i++) {
            mobileNavItems[i].classList.toggle('display-none');
        }*/

       // console.log('stop' + nav.offsetTop);

    } else {
        nav.className = '';
        navHeader.className = '';
        navContainer.className = '';
        home.className = '';
        mobileLinks.className = '';

        // console.log('clear' + nav.offsetTop);

    /*    for (var i = 0; i < mobileNavItems.length; i++) {
            mobileNavItems[i].classList.toggle('display-none');
        }
*/

    }

}