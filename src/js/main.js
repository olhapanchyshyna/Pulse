import sliders from "./modules/sliders"
import tabs from "./modules/tabs";
import modals from "./modules/modals";
import forms from "./modules/forms";
import mask from "./modules/mask";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded',()=>{
    "use strict"

    let obj= {};

    forms(obj);
    sliders();
    tabs('.catalog__tab','.catalog__item');
    modals(obj);
    mask('[name="phone"]');
    changeModalState(obj);
})
