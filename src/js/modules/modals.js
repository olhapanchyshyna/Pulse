function openModal(modalItem){
    modalItem.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeModal(modalItem){
    modalItem.style.display = 'none';
    document.body.style.overflow = '';
}

function modals(state){
    function bindModal(modalSelector,btnSelector,closeSelector,cardTitleSelector,modalTitleSelector){
        const   modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('.overlay');

        windows.forEach(item => {
                item.style.display = 'none';
            });
        
        try {
           const btns = document.querySelectorAll(btnSelector);
            btns.forEach(btn  =>{
                btn.addEventListener('click', () => {
                    if(!btn.closest('.consultation')){
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });  
                        try {
                            const cardTitle = document.querySelector(cardTitleSelector).textContent,
                                    modalTitle = document.querySelector(modalTitleSelector);
                                    modalTitle.textContent = `${cardTitle}`
                                    state['product'] = modalTitle.textContent;
                        } catch (error) {}
                        
                        openModal(modal);
                    }
                });     
            });  
        }catch (error){}
            
        
        close.addEventListener('click', () =>{
            windows.forEach(item => {
                item.style.display = 'none';
            });
            closeModal(modal);
        });
       
        modal.addEventListener('click',(e) => {
            if(modal === e.target){
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                closeModal(modal);
            }
        });
    }
    bindModal('.modal-consultation','[data-btn="consultation"]','.modal-consultation .modal-window__close');
    bindModal('.modal-buy','[data-btn="ft1"]','.modal-buy .modal-window__close','.fitness .catalog__subtitle','.modal-buy .modal-window__subtitle');
    bindModal('.modal-buy','[data-btn="m2"]','.modal-buy .modal-window__close','.run .catalog__subtitle','.modal-buy .modal-window__subtitle');
    bindModal('.modal-buy','[data-btn="ft4"]','.modal-buy .modal-window__close','.triathlon .catalog__subtitle','.modal-buy .modal-window__subtitle');
    bindModal('.gratitide','','.gratitide .modal-window__close');
}
export default modals;
export{openModal};
export{closeModal};