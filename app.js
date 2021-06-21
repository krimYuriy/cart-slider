function sliderPlugin(activeEl) {
   const slides = document.querySelectorAll('.slide')

   slides[activeEl].classList.add('active')

   slides.forEach(slide => {
      slide.addEventListener('click', () => {
         clearActiveClasses()

         slide.classList.add('active')
      })
   })

   function clearActiveClasses() {
      for (let slide of slides) {
         slide.classList.remove('active')
      }
   }
}

sliderPlugin(4)