/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// --- 新增互動效果：Tenor GIF 追蹤滑鼠 ---
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElement = document.getElementById('interactive-element');
    
    // 追蹤滑鼠移動並更新元素位置
    document.addEventListener('mousemove', (e) => {
        // 假設 GIF (100px 寬高) 的中心對準滑鼠位置，所以減去一半 (50px)
        interactiveElement.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    });
});