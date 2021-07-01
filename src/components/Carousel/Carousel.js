import React from 'react';
import './Carousel.css';
import {galleryImages } from '../../data/CompetitionsData';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            images: galleryImages
        }
    }

    moveLeft = () => {
        const length = this.state.images.length
        const {x} = this.state
        if (x === (length-1)*(-100)) {
            this.setState({
                x: 0
            })
        } else {
            this.setState({
                x: x-100
            })
        }
    }

    moveRight = () => {
        const length = this.state.images.length
        const {x} = this.state
        if (x === 0) {
            this.setState({
                x: (length-1)*(-100)
            })
        } else {
            this.setState({
                x: x+100
            })
        }
    }

    render() {
        const right = '<'
        const left = '>'
        const {x, images} = this.state
        return (
            <div className='carousel'>
                <button className='round-button left' onClick={this.moveRight}>{right}</button>
                <div className='slider'>
                    {images.map((img,index) => <img className='slider-image' src={img} key={index} alt='gallery'  style={{ transform: `translateX(${x}%)`}}/>)}
                </div>
                <button className='round-button right' onClick={this.moveLeft} >{left}</button>
            </div>
        )
    }
}

export default Carousel;