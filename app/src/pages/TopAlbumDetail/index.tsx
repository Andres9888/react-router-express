//@ts-nocheck

import { useParams } from 'react-router-dom'
import useFetch from 'react-fetch-hook'
function TopAlbumDetail () {
  let { id } = useParams()
  const { isLoading, error, data } = useFetch('http://localhost:9000/api')

  if (isLoading) {
    return <h1>is loading</h1>
  }
  if (error) {
    return <h1>error</h1>
  }

  let albumData = data.feed.results.filter(function (album) {
    return album.artistName === id
  })

  return (
    <div className='albumDetail'>
      <img
        className='albumDetail__img'
        src={albumData[0].artworkUrl100}
        alt=''
      />
      <div className='albumDetail__content'>
        <h2 className='albumDetail__artistName'>{albumData[0].artistName}</h2>
        <h2 className='albumDetail__name'>{albumData[0].name}</h2>
        <h2 className='albumDetail__releaseDate'>{albumData[0].releaseDate}</h2>
        <button className='albumDetail__button'>
          <a href={albumData[0].artistUrl}>More Info</a>
        </button>
      </div>
    </div>
  )
}

export default TopAlbumDetail
