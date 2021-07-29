import { useState, useEffect } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'

interface ResultsData {
  pageid: number
  title: string
  snippet: string
}

const SearchBar = () => {
  const [term, setTerm] = useState('React')
  const [results, setResults] = useState<ResultsData[]>([])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      })
      setResults(data.query.search)
    }
    const debouncedSave = debounce(() => search(), 1000)
    if (term) {
      debouncedSave()
    }
  }, [term])

  const searchResultsMapped = results.map(result => {
    return (
      <div className='item' key={result.pageid}>
        <div className='content'>
          <div className='title'>{result.title}</div>
          <div className='snippet'>
            {result.snippet.replace(/(<([^>]+)>)/gi, '')}
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='search'>
        <h2 className='search__label'>Search Wiki Term</h2>
        <input
          className='search__bar'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
      </div>
      <div className=''>{searchResultsMapped}</div>
    </div>
  )
}

export default SearchBar
