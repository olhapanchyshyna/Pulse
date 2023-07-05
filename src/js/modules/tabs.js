function tabs(btnSelector,tabSelector){
    const   btns = document.querySelectorAll(btnSelector),
            tabs = document.querySelectorAll(tabSelector);

    function hideActiveClass(){
        btns.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }
    hideActiveClass();

    btns[0].classList.add('catalog__tab_active');

    function hideTabs(){
        tabs.forEach(item => {
            item.style.display = 'none'
        });
    }
    hideTabs();

    function showTabs(){
        tabs.forEach(item => {
            if(item.classList.contains('fitness')){
                item.style.display = 'flex'
            }
        });
    }
    showTabs();
    

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideActiveClass();
            hideTabs();
            btn.classList.add('catalog__tab_active');
            if(btn.classList.contains('fitness')){
                tabs.forEach(item => {
                    if(item.classList.contains('fitness')){
                        item.style.display = 'flex'
                    }
                });
            }else if(btn.classList.contains('run')){
                tabs.forEach(item => {
                    if(item.classList.contains('run')){
                        item.style.display = 'flex'
                    }
                });
            }else if(btn.classList.contains('triathlon')){
                tabs.forEach(item => {
                    if(item.classList.contains('triathlon')){
                        item.style.display = 'flex'
                    }
                });
            }
        })
    });
    function btnInformation(btnShow,btnHide){
        const btnInformationShow = document.querySelectorAll(btnShow);
        const btnInformationHide = document.querySelectorAll(btnHide);

        btnInformationShow.forEach(btnShow => {
            btnShow.addEventListener('click', (e) => {
                e.preventDefault();
                if(e.target == btnShow){
                   let parent = btnShow.closest('.catalog__item');
                    parent.querySelector('.front').style.display = 'none';
                    parent.querySelector('.back').style.display = 'flex';
                }
            })
        })

        btnInformationHide.forEach(btnHide => {
            btnHide.addEventListener('click', (e) => {
                e.preventDefault();
                if(e.target == btnHide){
                   let parent = btnHide.closest('.catalog__item');
                    parent.querySelector('.back').style.display = 'none';
                    parent.querySelector('.front').style.display = 'flex';
                }
            })
        })
    }
    btnInformation('.catalog__link_front','.catalog__link_back');
}
export default tabs
