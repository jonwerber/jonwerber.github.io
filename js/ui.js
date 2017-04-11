(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main'),
        homeLink  = document.getElementById('home-link'),
        link     = document.getElementsByClassName('pure-menu-link');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);

    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    homeLink.onclick = function(e) {
        location.hash ='#';
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    var linkClick = function(e) {
        location.hash = e.srcElement.hash;
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
        return true;
    };

    for (var i = 0; i < link.length; i++) {
        link[i].addEventListener('click', linkClick, false);
    };


}(this, this.document));
