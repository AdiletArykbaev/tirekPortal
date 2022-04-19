import React from 'react';
import {
    eleven,
    fifteen,
    five,
    four,
    fourteen,
    last,
    nine,
    one,
    seven,
    six,
    ten,
    thirteen,
    three,
    twelwe,
    two,
    vosem
} from '../../Assets/images/gallery';
import './gallery.css';
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";
import {MaxSmall, MinSmall} from "../../utils/mediaQuiries";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import {Fancybox} from "@fancyapps/ui";

const Gallery = ({page}) => {
    const photos = [one, two, three, four, five, six, seven, vosem, nine, ten, eleven, twelwe, thirteen, fourteen, fifteen, last];
    const classes = [one, two, three, four, five, six, seven, vosem, nine, ten, eleven, twelwe, thirteen, fourteen, fifteen, last];
    return (
        <>

            {
                page ? <div className="gallery">
                        <div className="wrapper">
                            <h1 className="gallery__title">Фотогалерея</h1>
                            <div className="gallery__content">
                                {
                                    photos.map((item, idx) => (
                                        <div className="gallery__box">
                                            <img data-fancybox="gallery" data-src={item} src={item} alt=""/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : <>
                        <div className="wrapper">
                            <h1 className="gallery__title">Фотогалерея</h1>
                            <NavigateBtn address={'/gallery'} text={'Все фотографии'}/>
                            <MinSmall>
                                <div className='gallery__main_content'>
                                    {
                                        photos.slice(0, 4).map((item, idx) => (
                                            <div className="gallery__box">
                                                <img data-fancybox="gallery" data-src={item} src={item} alt=""/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </MinSmall>
                            <MaxSmall>
                                <div className="gallery__swiper">
                                    <Swiper pagination={true} modules={[Pagination]} slidesPerView={1} className="mySwiper">
                                        {
                                            photos.map((item) => (
                                                <SwiperSlide>
                                                    <img className="gallery__swiper_img" src={item} alt=""/>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </MaxSmall>
                        </div>
                    </>
            }
        </>
    );
};

export default Gallery;