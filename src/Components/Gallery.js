import React, { useState } from 'react'
import './Gallery.css'

const Gallery = ({galleryimages}) => {

    const [slideNum,setslideNum]=useState(0);
    const [openModal,setopenModal]=useState(false);

    const handleOpenModal=(index)=>{
        setslideNum(index);
        setopenModal(true);
    }

    const closeModal=()=>{
        setopenModal(false);
    }

    const prevSlide=()=>{
        slideNum===0?setslideNum(galleryimages.length-1):setslideNum(slideNum-1);
    }
    
    const nextSlide=()=>{
        slideNum===galleryimages.length-1?setslideNum(0):setslideNum(slideNum+1);
    }

  return (
    <div>
      {
        openModal&&
        <div className="sliderWrap">
            <i className="bi bi-x-circle-fill btnClose"onClick={closeModal}></i>
            <i className="bi bi-arrow-right-circle-fill btnNext" onClick={nextSlide}></i>
            <i class="bi bi-arrow-left-circle-fill btnPrev" onClick={prevSlide}></i>
            <div className="fullScreen">
                <img src={galleryimages[slideNum].img} alt="" />
            </div>
        </div>
      }

      <div className="galleryWrap">
        {
            galleryimages&& galleryimages.map((slide,index)=>{
                return(
                    <div className="single" key={index} onClick={()=>handleOpenModal(index)}>
                        <img src={slide.img} alt="" />
                    </div>
                )
            })
        }
      </div>
      
    </div>
  )
}

export default Gallery
