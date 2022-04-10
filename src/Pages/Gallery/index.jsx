import React, {useState} from 'react';
import {
    one,two,three,four,five,six,seven,vosem,nine,ten,eleven,twelwe,thirteen,fourteen,fifteen,last
}from '../../Assets/images/gallery';

import './gallery.css';

const Gallery = ({page}) => {
    const gallery = [one, two, three, four, five, six, seven, vosem, nine, ten, eleven, twelwe, thirteen, fourteen, fifteen, last];
    const [image, setImage] = useState('');
    const openGallery = (e) => {
        if (e.target.src !== '') {
            setImage(e.target.src)
        }
        document.querySelector('body').style.overflow = 'hidden';
    };
    const closeGallery = (idx) => {
        setImage('');
        document.querySelector('body').style.overflow = 'auto'
    };
    return (
        <div className="gallery">
           {page? <div className="wrapper">
                <h1 className="gallery__title">Фотогалерея</h1>
                <div className="gallery__content">
                    <img onClick={(e) => openGallery(e)} className="gallery__small" src={one} alt="asd"/>
                    <img onClick={(e) => openGallery(e)} className="gallery__mid" src={two} alt=""/>
                    <div className="gallery__content_col">
                        <img onClick={(e) => openGallery(e)} src={three} alt=""/>
                        <img onClick={(e) => openGallery(e)} src={four} alt=""/>
                    </div>
                    <div className="gallery__content_col">
                        <img onClick={(e) => openGallery(e)} src={five} alt=""/>
                        <img onClick={(e) => openGallery(e)} src={six} alt=""/>
                    </div>
                    <img onClick={(e) => openGallery(e)} className="gallery__small" src={seven} alt=""/>
                    <img onClick={(e) => openGallery(e)} className="gallery__mid" src={vosem} alt=""/>
                    <img onClick={(e) => openGallery(e)} className="gallery__mid" src={nine} alt=""/>
                    <div className="gallery__content_col">
                        <img onClick={(e) => openGallery(e)} src={ten} alt=""/>
                        <img onClick={(e) => openGallery(e)} src={eleven} alt=""/>
                    </div>
                    <img onClick={(e) => openGallery(e)} className="gallery__small" src={twelwe} alt=""/>
                    <img onClick={(e) => openGallery(e)} className="gallery__mid" src={thirteen} alt=""/>
                    <div className="gallery__content_col">
                        <img onClick={(e) => openGallery(e)} src={fourteen} alt=""/>
                        <img onClick={(e) => openGallery(e)} src={fifteen} alt=""/>
                    </div>
                    <img onClick={(e) => openGallery(e)} className="gallery__small" src={last} alt=""/>
                </div>
                {
                    image !== ''
                        ? <div className="gallery__box">
                            <div onClick={() => closeGallery()} className="gallery__box_layout">
                            </div>
                            <img src={image} alt=""/>
                            <div className="gallery__box_collection">
                                {
                                    gallery.map((el) => (
                                        <img onClick={(e) => {
                                            if (e.target.src) {
                                                setImage(e.target.src)
                                            }
                                        }} src={el} alt=""/>
                                    ))
                                }
                            </div>
                        </div>
                        : ''
                }
            </div>:
            <div className='wrapper'>
                <h1 className="gallery__title">Фотогалерея</h1>
                <div className='component_wrapper'>
                  <img onClick={(e) => openGallery(e)} className="gallery__small" src={one} alt="asd"/>
                    <img onClick={(e) => openGallery(e)} className="gallery__mid" src={two} alt=""/>
                    <div className="gallery__content_col">
                        <img onClick={(e) => openGallery(e)} src={three} alt=""/>
                        <img onClick={(e) => openGallery(e)} src={four} alt=""/>
                   </div>
                </div>
                  

            </div>
            
            }
        </div>
    );
};

export default Gallery;