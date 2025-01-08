const url = 'https://jsonplaceholder.typicode.com'

export interface Album {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useAlbum = () => {
  let albums: Album[] = []

  const fetchAlbums = async () => {
    albums = await fetch(url + '/todos')
      .then((response) => response.json())
      .catch((error) => console.log('Error: ', error))
    console.log('fetchAlbums 결과: ', albums)
  }

  const getAlbums = () => {
    return albums
  }

  return { fetchAlbums, getAlbums }
}
