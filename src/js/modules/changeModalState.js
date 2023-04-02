function changeModalState(state){
    const  email = document.querySelectorAll('.modal-email'),
            name = document.querySelectorAll('.modal-name'),
            phone = document.querySelectorAll('.modal-phone');

    function inputListener(selector,name){
        selector.forEach(item => {
            item.addEventListener('input', () => {
                if(selector === phone){
                    state[name] = item.value.replace(/\D/g, '');
                }else{
                    state[name] = item.value;
                }
            })
        })
    }
    inputListener(email,'email')
    inputListener(name,'name')
    inputListener(phone,'phone')
}

export default changeModalState;
