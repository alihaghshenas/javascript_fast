const getAllPosts = () => {
    const title = 'post1'
    const date = '2022'
    const description = 'this is a test'

    const post = {
        title : 'post2',
        date : 2022,
        description : 'this is from an object'
    }

    return post
}

const result = getAllPosts()
console.log(result.title)
