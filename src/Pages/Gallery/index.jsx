import React, {useState} from 'react';
import {
    one, two, three, four, five, six, seven, vosem, nine, ten, eleven, twelwe, thirteen, fourteen, fifteen, last
} from '../../Assets/images/gallery';
import {Fancybox} from "@fancyapps/ui";
import './gallery.css';
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";

const Gallery = ({page}) => {
    return (
        <>

            {
                page ? <div className="gallery">
                        <div className="wrapper">
                            <h1 className="gallery__title">Фотогалерея</h1>
                            <div className="gallery__content">
                                <img
                                    data-src={one}
                                    data-fancybox="gallery" className="gallery__small" src={one} alt="asd"/>
                                <img
                                    data-src={two}
                                    data-fancybox="gallery" className="gallery__mid" src={two} alt=""/>
                                <div className="gallery__content_col">
                                    <img
                                        data-src={three}
                                        data-fancybox="gallery" src={three} alt=""/>
                                    <img
                                        data-src={four}
                                        data-fancybox="gallery" src={four} alt=""/>
                                </div>
                                <div className="gallery__content_col">
                                    <img
                                        data-src={five}
                                        data-fancybox="gallery" src={five} alt=""/>
                                    <img
                                        data-src={six}
                                        data-fancybox="gallery" src={six} alt=""/>
                                </div>
                                <img
                                    data-src={seven}
                                    data-fancybox="gallery" className="gallery__small" src={seven} alt=""/>
                                <img
                                    data-src={vosem}
                                    data-fancybox="gallery" className="gallery__mid" src={vosem} alt=""/>
                                <img
                                    data-src={nine}
                                    data-fancybox="gallery" className="gallery__mid" src={nine} alt=""/>
                                <div className="gallery__content_col">
                                    <img
                                        data-src={ten}
                                        data-fancybox="gallery" src={ten} alt=""/>
                                    <img
                                        data-src={eleven}
                                        data-fancybox="gallery" src={eleven} alt=""/>
                                </div>
                                <img
                                    data-src={twelwe}
                                    data-fancybox="gallery" className="gallery__small" src={twelwe} alt=""/>
                                <img
                                    data-src={thirteen}
                                    data-fancybox="gallery" className="gallery__mid" src={thirteen} alt=""/>
                                <div className="gallery__content_col">
                                    <img
                                        data-src={fourteen}
                                        data-fancybox="gallery" src={fourteen} alt=""/>
                                    <img
                                        data-src={fifteen}
                                        data-fancybox="gallery" src={fifteen} alt=""/>
                                </div>
                                <img
                                    data-src={last}
                                    data-fancybox="gallery" className="gallery__small" src={last} alt=""/>
                            </div>
                        </div>
                    </div>
                    : <div className="wrapper">
                        <h1 className="gallery__title">Фотогалерея</h1>
                        <NavigateBtn address={'/gallery'} text={'Все фотографии'}/>
                        <div className='gallery__content'>
                            <img data-fancybox="gallery" data-src={one} className="gallery__small" src={one} alt="asd"/>
                            <img data-fancybox="gallery" data-src={two} className="gallery__mid" src={two} alt=""/>
                            <div className="gallery__content_col">
                                <img data-fancybox="gallery" data-src={three} src={three} alt=""/>
                                <img data-fancybox="gallery" data-src={four} src={four} alt=""/>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Gallery;