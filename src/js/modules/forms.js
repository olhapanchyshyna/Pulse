import {openModal} from "./modals";
import {closeModal} from "./modals";

function forms(state){
    const   forms = document.querySelectorAll('form'),
            thanksModal = document.querySelector('.gratitide'),
            windows = document.querySelectorAll('.overlay'),
            thanksTitle = thanksModal.querySelector('.modal-window__title'),
            thanksSubTitle = thanksModal.querySelector('.modal-window__subtitle');

    const message = {
        loading: 'Загрузка...',
        okay: 'Спасибо за вашу заявку!',
        failure: 'Что-то пошло не так...',
    };


    async function serverPostData(url,data){
        const res = await fetch(url,{
            method : 'POST',
            body : data,
        });
        return await res.json();
    };

    forms.forEach(form =>{
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
            
            const formData = new FormData(form);

            for(let key in state){
                formData.set(key, state[key]);
            }

    // formData не может взаимодействовать с json форматом , поэтому данная строка кода преобразует данные формы (formData) в объект, а затем преобразует этот объект в формат JSON с помощью метода JSON.stringify(). 
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            serverPostData('http://localhost:3000/post',json)
                .then((data) => {
                    console.log(data)
                    console.log(state)
                    thanksTitle.textContent = message.okay
                    windows.forEach(item => {
                        closeModal(item);
                    })
                    openModal(thanksModal)
                }).catch(() => {
                    thanksTitle.textContent = message.failure
                    thanksSubTitle.textContent = ''
                    windows.forEach(item => {
                        closeModal(item);
                    })
                    openModal(thanksModal)
                }).finally(() => {
                    form.reset();
                    Object.keys(state).forEach(key => delete state[key]);
                    setTimeout(()=> {
                        windows.forEach(item => {
                            closeModal(item);
                        })
                    },4000)
                    
                });
        })
    })

    
}
export default forms