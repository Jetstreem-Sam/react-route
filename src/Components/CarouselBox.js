import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import pustina from '../assets/pustina.jpg'
import les from '../assets/les.jpg'
import gora from '../assets/gora.jpg'

export class CarouselBox extends Component {
  render() {
    return (
        <div className='carusel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={les}
                        alt='forest'
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={gora}
                        alt='Mountain'
                    />
                    <Carousel.Caption>
                        <h3>Mountain image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={pustina}
                        alt='Desert'
                    />
                    <Carousel.Caption>
                        <h3>Desert image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
  }
}

export default CarouselBox