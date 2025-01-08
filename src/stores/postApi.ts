const url = 'https://jsonplaceholder.typicode.com'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const usePost = () => {
  let post: Post[] = []

  const fetchPosts = async () => {
    post = await fetch(url + 'posts')
      .then((response) => response.json())
      .catch((error) => console.log('Error: ', error))
    console.log('fetchPosts 결과: ', post)
  }

  const getPosts = () => {
    return post
  }

  return { fetchPosts, getPosts }
}
