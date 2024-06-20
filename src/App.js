import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './Components/Gallery';
function App() {
  const [galleryimages, setGalleryImages] = useState([]);
  const [name,setname]=useState("river");
  const [searchterm,setsearchterm]=useState(name)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '44479737-247d2b5ae61799c580e7ccd2d', 
            q: name, 
            image_type: 'photo',
            per_page: 30 
          }
        });
        const images = response.data.hits.map((img) => ({
          img: img.webformatURL
        }));
        setGalleryImages(images);
      } catch (error) {
        console.error('Error fetching the images:', error);
      }
    };

    fetchImages();
  }, [searchterm]);
  const handleInput = (event) => {
    setname(event.target.value);
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    setsearchterm(name);
  }
  return (
    <div className="App">
      <div>
      <h1> <strong >Image Gallery</strong></h1>
      </div>
      <form className="d-flex search" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInput}/>
        <button className="btn btn-outline-info" onClick={handleSearch} >Search</button>
      </form>
      <br />
      <br /><br />
      <Gallery galleryimages={galleryimages}/>
      <br /><br />
      
    </div>
  );
}

export default App;
