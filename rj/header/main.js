/*subitem menu */

const menuCompany = document.querySelector('#menu-company')
const menuSubitem = document.querySelector('#subitem')

menuCompany.addEventListener('mouseover', function () {
  menuSubitem.classList.add('hover')
})
menuSubitem.addEventListener('mouseover', function () {
  this.classList.add('hover')
})
menuSubitem.addEventListener('mouseout', function () {
  this.classList.remove('hover')
})
menuCompany.addEventListener('mouseout', function () {
  menuSubitem.classList.remove('hover')
})
