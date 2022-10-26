document.addEventListener('DOMContentLoaded', ()=>{
  const accordionItem = document.querySelectorAll('.accordion-item')
  const accordionContent = document.querySelectorAll('.accordion-content')
  const arrow = document.querySelectorAll('#arrow')

  for (let index = 0; index < accordionItem.length; index++) {
    accordionItem[index].addEventListener('click', ()=>{
      accordionContent[index].classList.toggle('open-accordion')
      arrow[index].classList.toggle('arrow-transform')
    })
  }
})