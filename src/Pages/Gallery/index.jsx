import React, {useState} from 'react';
import one from '../../Assets/images/gallery/one.png';
import two from '../../Assets/images/gallery/two.png';
import three from '../../Assets/images/gallery/three.png';
import four from '../../Assets/images/gallery/four.png';
import five from '../../Assets/images/gallery/five.png';
import six from '../../Assets/images/gallery/six.png';
import seven from '../../Assets/images/gallery/seven.png';
import vosem from '../../Assets/images/gallery/vosem.png';
import nine from '../../Assets/images/gallery/nine.png';
import ten from '../../Assets/images/gallery/ten.png';
import eleven from '../../Assets/images/gallery/eleven.png';
import twelwe from '../../Assets/images/gallery/twelwe.png';
import thirteen from '../../Assets/images/gallery/thirteen.png';
import fourteen from '../../Assets/images/gallery/fourteen.png';
import fifteen from '../../Assets/images/gallery/fifteen.png';
import last from '../../Assets/images/gallery/last.png';
import './gallery.css';

const Gallery = () => {
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
            <div className="wrapper">
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
            </div>
        </div>
    );
};

export default Gallery;