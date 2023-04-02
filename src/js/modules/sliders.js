function sliders(){

    showSlide('.slider__item','.slider__template','.slider__inner','.slider__prev','.slider__next')

    window.addEventListener('resize', () => {
        showSlide('.slider__item','.slider__template','.slider__inner','.slider__prev','.slider__next')
    });
    
    function showSlide(slidesItem,sliderWrapperSelector,slidesFiledSelector,prevSelector,nextSelector){
        const   slides = document.querySelectorAll(slidesItem),
                sliderWrapper = document.querySelector(sliderWrapperSelector),
                width = sliderWrapper.clientWidth + 'px',
                slidesFiled = document.querySelector(slidesFiledSelector),
                prev = document.querySelector(prevSelector),
                next = document.querySelector(nextSelector);

        let     slideIndex = 1,
                offset = 0;    
        
        
        slidesFiled.style.width = 100 * slides.length + '%';
        slidesFiled.style.display = 'flex';
        slidesFiled.style.transition = '0.5s all';
        sliderWrapper.style.overflow = 'hidden';
        
        
        slides.forEach(item => {
            item.style.width = width;
        });
        
        
        next.addEventListener('click', () =>{
        
            if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2); 
            }
        
            slidesFiled.style.transform = `translateX(-${offset}px)`;
        
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

        });
        
        
        prev.addEventListener('click', () => {
            if (offset == 0){
                offset = (+width.slice(0, width.length - 2) * (slides.length - 1));
            }else {
                offset -= +width.slice(0, width.length - 2); 
            }
        
            slidesFiled.style.transform = `translateX(-${offset}px)`;
        
            if(slideIndex == 1){
                slideIndex = slides.length;
            }else {
                slideIndex--;
            }
        });

    }

    function sliderReviews(slidesItem, sliderWrapperSelector, slidesFiledSelector, sliderReviewsSelector, dotReviewsSelector) {
        const slidesReviews = document.querySelectorAll(slidesItem);
        const sliderWrapperReviews = document.querySelector(sliderWrapperSelector);
        const slidesFiledReviews = document.querySelector(slidesFiledSelector);
        const sliderReviews = document.querySelector(sliderReviewsSelector);
        const dotsReviews = document.querySelectorAll(dotReviewsSelector);
        let slideIndexReviews = 1;
        let offsetReviews = 0;
      
        stepSlider();
      
        window.addEventListener('resize', () => {
            stepSlider();
        });
      
        function stepSlider() {
          const widthReviews = sliderWrapperReviews.clientWidth + 'px';
      
          if (window.innerWidth <= 575) {
                sliderReviews.style.position = 'relative'
                slidesFiledReviews.style.display = 'flex';
                slidesFiledReviews.style.transition = '0.5s all';
                sliderWrapperReviews.style.overflow = 'hidden';

                slidesReviews.forEach(item => {
                    item.style.width = widthReviews;
                });

                slidesFiledReviews.style.width = 100 * slidesReviews.length + '%';
                showDotsReviews();

                dotsReviews.forEach(dot => {
                    dot.addEventListener('click', e => {
                        const slideTo = e.target.getAttribute('data-slide-to');
                        slideIndexReviews = slideTo;

                        offsetReviews = parseInt(widthReviews) * (slideTo - 1);

                        slidesFiledReviews.style.transform = `translateX(-${offsetReviews}px)`;

                        dotsReviews.forEach(dot => {
                            dot.style.opacity = '.5';
                        });
                        dotsReviews[slideIndexReviews - 1].style.opacity = 1;
                    });
                });

            } else if(window.innerWidth >= 576){
                slidesFiledReviews.style.display = 'block';
                slidesReviews.forEach(item => {
                    item.style.width = '';
                });
                slidesFiledReviews.style.width = '';
                slidesFiledReviews.style.transform = '';
                slidesFiledReviews.style.transition = '';
                sliderWrapperReviews.style.overflow = '';
          }
        }
      
        function showDotsReviews(i = 0) {
          dotsReviews[i].style.opacity = 1;
        }
      }
      
      sliderReviews('.reviews__item', '.reviews__wrapper', '.reviews__list', '.reviews', '.reviews .dot');
      
    // function sliderReviews(slidesItem,sliderWrapperSelector,slidesFiledSelector,sliderReviewsSelector,dotReviewsSelector){
    //     const   slidesReviews = document.querySelectorAll(slidesItem),
    //             sliderWrapperReviews = document.querySelector(sliderWrapperSelector),
    //             slidesFiledReviews = document.querySelector(slidesFiledSelector),
    //             sliderReviews = document.querySelector(sliderReviewsSelector),
    //             dotsReviews = document.querySelectorAll(dotReviewsSelector);

    //     let     slideIndexReviews = 1,
    //             offsetReviews = 0; 

    //     a();

    //     window.addEventListener('resize', (e) =>{
    //         if(e){
    //             if(e.currentTarget.innerWidth <= 575){
    //                 // slidesFiledReviews.style.flexDirection = "row";
    //                 a();
    //             }
    //             if(e.currentTarget.innerWidth >= 576){
    //                 slidesFiledReviews.style.display = 'block';
    //                 slidesReviews.style.maxWidth = '900px'
    //                 slidesFiledReviews.style.transform = 'unset';
    //                 slidesFiledReviews.style.width = 'unset';
    //                 slidesFiledReviews.style.transition = 'unset';
    //                 sliderWrapperReviews.style.overflow = '';
    //             }
    //         }else{
    //             a();
    //         }
                
            
    //     });

    //     function a(){
    //         const widthReviews = window.getComputedStyle(sliderWrapperReviews).width;
        
            // sliderReviews.style.position = 'relative'
    //         slidesFiledReviews.style.width = 100 * slidesReviews.length + '%';
    //         slidesFiledReviews.style.display = 'flex';
    //         slidesFiledReviews.style.transition = '0.5s all';
    //         sliderWrapperReviews.style.overflow = 'hidden';


    //         slidesReviews.forEach(item => {
    //             item.style.width = widthReviews;
    //         });


    //         function showDotsReviews(i = 0){
    //             dotsReviews[i].style.opacity = 1;
    //         }
    //         showDotsReviews();


    //         dotsReviews.forEach(dot => {
    //             dot.addEventListener('click', (e) => {
    //                 const slideTo = e.target.getAttribute('data-slide-to');
        
    //                 slideIndexReviews = slideTo;
    //                 offsetReviews = +widthReviews.slice(0, widthReviews.length - 2) * (slideTo - 1);
        
    //                 slidesFiledReviews.style.transform = `translateX(-${offsetReviews}px)`;
        
                    
        
    //                 dotsReviews.forEach(dot => dot.style.opacity = ".5");
    //                 dotsReviews[slideIndexReviews-1].style.opacity = 1;
    //             });
    //         });
    //     }
            
       
    // }
    // sliderReviews('.reviews__item','.reviews__wrapper','.reviews__list','.reviews','.reviews .dot');

}
export default sliders
