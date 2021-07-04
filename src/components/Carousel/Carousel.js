import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Carousel.css';
import {storage} from '../../firebase.utils'

const Carousel = () => {

    const [x, setX] = useState(0)
    const [images, setImages] = useState([])

    const params= useParams();

    useEffect(()=>{
        try{
            const GalleryRef = storage.ref().child(`gallery/${params.galleryid}`)
            GalleryRef.listAll()
            .then((res) => {
                res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL().then( data => setImages((prevState) => [...prevState,data]))
                  });
            })
          } catch(error) {
              console.log(error);
          }
    },[params])

    const moveLeft = () => {
        const length = images.length
        if (x === (length-1)*(-100)) {
            setX(0)
        } else {
            setX((prevState) => {
                return prevState-100
            })
        }
    }

    const moveRight = () => {
        const length = images.length
        if (x === 0) {
            setX((length-1)*(-100))
        } else {
            setX((prevState) => {
                return prevState+100
            })
        }
    }
    const right = '<'
    const left = '>'

    return (
        <div className='carousel'>
            <button className='round-button left' onClick={moveRight}>{right}</button>
            <div className='slider'>
                {images.map((img,index) => <img className='slider-image' src={img} key={index} alt='gallery'  style={{ transform: `translateX(${x}%)`}}/>)}
            </div>
            <button className='round-button right' onClick={moveLeft} >{left}</button>
        </div>
    )
    
}

export default Carousel;