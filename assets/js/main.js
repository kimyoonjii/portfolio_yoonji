$(function(){


  // header
  let lastScroll = 0;
  $(window).scroll(function() {
      let curr = $(this).scrollTop();
    
      if (curr > lastScroll) {
          $('.header').addClass('hide');
      } else {
          $('.header').removeClass('hide');
      }
      lastScroll = curr;
  });

  mainSlide = new Swiper('.intro-slide',{
    direction: "vertical",
    touchRatio:0,
    autoplay : {
      delay : 1000,   // 시간 설정
      loop:true,
    },
})

//
$('.project-item').each(function(index,el){
  // console.log(el);    
  gsap.from(el,{
    scrollTrigger:{
      trigger:el,
      start:"0% 80%",
      end:"100% 50%",
      // markers:true,
    },
    opacity:0,
    yPercent:20
  })
})


//gsap
//sc-intro 모션
introMotion = gsap.timeline({})

introMotion
.set('.sc-intro .title span',{yPercent:100})
.to('.sc-intro .title span',{yPercent:0,stagger:0.1})
.from('.sc-intro .swiper-slide',{opacity:0})
.from('.header',{opacity:0})
.from('.top-slide',{opacity:0})


//sc-about 모션
aboutMotion = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-about",
    start:"0% 100%",
    end:"30% 0%",
    // markers:true,
    scrub:0.5,
  },
})

aboutMotion
.set('.sc-about .top-box .text-box .title span',{yPercent:100,})
.to('.sc-about .top-box .text-box .title span',{yPercent:0,stagger:0.1})
.from('.sc-about .top-box .text-box .title span',{opacity:0})
.from('.sc-about .btn-box',{opacity:0})
.from('.sc-about .center-box',{opacity:0})
.from('.sc-about .bottom-box .list .item',{opacity:0})





gsap.to('.sc-wrap',{
  scrollTrigger:{
   trigger:".sc-goal",
   start:"0% 80%", 
   end:"100% 50%",
  //  markers:true, 
   yoyo:true,
   scrub:1
    
},
rotationX:0
})











})//지우지마세요