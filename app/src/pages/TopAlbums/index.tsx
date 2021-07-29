//@ts-nocheck
import { Link } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

function TopAlbums () {
  const { isLoading, error, data } = useFetch('http://localhost:9000/api')

  if (isLoading) {
    return <h1>is loading</h1>
  }
  if (error) {
    return <h1>error</h1>
  }
  return (
    <div>
      <h2 className='top-album__header'>Top New Releases</h2>
      <div className='grid-container'>
        {data.feed.results.map(result => {
          return (
            <Link
              className='grid-link'
              to={{
                pathname: `/${result.artistName}`
              }}
            >
              <div className='grid-item'>
                <img
                  className='grid-item__image'
                  src={result.artworkUrl100}
                  alt=''
                />
                <h3 className='grid-item__name'>{result.name}</h3>
                <h3 className='grid-item__artistName'>{result.artistName}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TopAlbums
