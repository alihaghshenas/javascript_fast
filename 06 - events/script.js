const ul = document.querySelector('ul')
const btn1 = document.getElementById('btn1')

const createLI = (id,link) => {
    let ourElement = document.createElement('li')
    ourElement.classList.add('navbar-sub')
    ourElement.id = id
    ourElement.innerHTML = "<a href='" + link + "'>" + id + "</a>"
    ul.append(ourElement)
}

btn1.addEventListener('click',() => {
    createLI('id','test')
})

btn1.addEventListener('mouseover',() => {
    btn1.setAttribute('style', 'background-color:red;')
})

btn1.addEventListener('mouseout',() => {
    btn1.setAttribute('style', '')
})