window.addEventListener('load', resize());
function resize() {
    if(document.getElementById('tour-form')) {
        var tourForm = document.getElementById('tour-form'),
        mobileNone = document.querySelectorAll('.mobile-none'),
        mobileMenu = document.querySelector('.mobile-menu');
        
        if (tourForm.clientWidth < 768) {
            mobileMenu.classList.add('active');
            for(i = 0; i < mobileNone.length; i++) {
                mobileNone[i].classList.add('active')
            }
            console.log(tourForm.clientWidth);
        }
        
    }
    
}