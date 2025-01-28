//Opening or closing side bar

const elementToggleFunc = function (elem) {
  elem.classList.toggle('active')
}

const sidebar = document.querySelector('[data-sidebar]')
const sidebarBtn = document.querySelector('[data-sidebar-btn]')

sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar)
})

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]')
const selectItems = document.querySelectorAll('[data-select-item]')
const selectValue = document.querySelector('[data-select-value]')
const filterBtn = document.querySelectorAll('[data-filter-btn]')

window.addEventListener('DOMContentLoaded', (event) => {
  if (select) {
    select.addEventListener('click', function () {
      elementToggleFunc(this)
    })
  }
})

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    elementToggleFunc(select)
    filterFunc(selectedValue)
  })
}

const filterItems = document.querySelectorAll('[data-filter-item]')

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue == 'all') {
      filterItems[i].classList.add('active')
    } else if (selectedValue == filterItems[i].dataset.category) {
      filterItems[i].classList.add('active')
    } else {
      filterItems[i].classList.remove('active')
    }
  }
}

//Enabling filter button for larger screens

let lastClickedBtn = filterBtn[0]

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    filterFunc(selectedValue)

    lastClickedBtn.classList.remove('active')
    this.classList.add('active')
    lastClickedBtn = this
  })
}

// Enabling Page Navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]')
const pages = document.querySelectorAll('[data-page]')

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
        pages[i].classList.add('active')
        navigationLinks[i].classList.add('active')
        window.scrollTo(0, 0)
      } else {
        pages[i].classList.remove('active')
        navigationLinks[i].classList.remove('active')
      }
    }
  })
}
