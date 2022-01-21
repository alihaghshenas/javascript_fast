//let home = document.getElementById('blog')
//home.innerText = 'chaged'
//console.log(home.innerText)

// let btns = document.getElementsByName('btn')
// console.log(btns[0].innerText)

// let lis = document.getElementsByTagName('li')
// console.log(lis)

//let nav = document.querySelectorAll('li')
//console.log(nav)

// let cn = document.getElementsByClassName('navbar-sub')
// console.log(cn)

/*const home = document.querySelector('#home')
const blog = document.querySelector('#blog')
home.setAttribute('style','with:100px;')
home.classList.remove('active')
blog.classList.add('active')
blog.classList.replace('navbar-sub','navbar-main-sub')
console.log(home)
console.log(blog)*/

const ul = document.querySelector('ul')

let ourElement = document.createElement('li') // <li></li>
ourElement.classList.add('navbar-sub')
ourElement.id = 'shop'
ourElement.innerText = 'Shop'

ul.append(ourElement)
console.log(ul)





