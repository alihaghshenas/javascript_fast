const ul = document.querySelector('ul')

createLI('youtube','www.youtube.com')

const createLI = (id,link) => {
    let ourElement = document.createElement('li')
    ourElement.classList.add('navbar-sub')
    ourElement.id = id
    ourElement.innerHTML = "<a href='" + link + "'>" + id + "</a>"
    ul.append(ourElement)
}