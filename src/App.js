import React, {useState} from 'react';
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  const [term, setTerm] = useState({
    term: ''
  })
  const [images, setImage] = useState({
    image: ''
  })

 const handleSearch = (e) => {
  setTerm({term: e.target.value})
 }

 const getImage = async () => {
  const response = await unsplash.get('/search/photos', {
    params: { query: term.term}
  })
  const randImage = Math.floor(Math.random() * 11)

  let imageBg

  if (response.data.results[randImage] !== undefined) {
    imageBg = response.data.results[randImage].urls.regular
  }
  setImage({image: imageBg}) 
 }




 const onSearch = (e) => {
  e.preventDefault()
  getImage()
}
  


return (
  <div className='bg-wrapper fadeImage' style={{backgroundImage: `url(${images.image})` }}>    
    <div className="App">

      <h1 id='title'>Clima Agora</h1>
       <SearchBar
        searchSubmit={onSearch}
        search={handleSearch}
       />
    </div>
  </div>
  )
}

export default App;
