import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import TopAlbums from './pages/TopAlbums'
import TopAlbumDetail from './pages/TopAlbumDetail'
import { Switch, Route } from 'react-router-dom'
function App () {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <SearchBar />
        </Route>
        <Route path='/search-wiki'>
          <SearchBar />
        </Route>
        <Route path='/top-albums'>
          <TopAlbums />
        </Route>
        <Route path='/:id'> <TopAlbumDetail /></Route>
      </Switch>
    </div>
  )
}

export default App
