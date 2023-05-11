import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel showStatus={false} showThumbs={false} centerMode={false} >
                <div>
                    <img src={require('../assets/img/banner/b1.webp')} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={require('../assets/img/banner/b2.webp')} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={require('../assets/img/banner/b3.webp')} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

        </div>
    )
}

export default Banner