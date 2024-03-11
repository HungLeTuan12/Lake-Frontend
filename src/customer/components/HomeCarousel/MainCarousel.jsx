import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './HomeCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img style={{width: 1536}} className='cursor-pointer' role='presentation' src={item.image}></img>)
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls // không hiện button controls 
            autoPlay // auto chuyển silde with 1000s
            autoPlayInterval={1000}
            infinite
        />
    )
    }
export default MainCarousel;