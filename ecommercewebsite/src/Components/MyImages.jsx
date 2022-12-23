import React, { useState } from 'react'
import './index.css';

const MyImages = ({ image = [{ url: '' }] }) => {
    const [mainImages, setMainImages] = useState(image[0])
    return (
        <div className='image-section'>
            <div>
                {
                    image.map((currImage, index) => {
                        return (
                            <div key={index}>
                                <img className='first-image-aa'
                                    src={currImage.url}
                                    alt={currImage.filename}
                                    onClick={() => setMainImages(currImage)}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className='second-image-section'>
                <img className='second-image-aa' src={mainImages.url} alt={mainImages.filename} />
            </div>


        </div>
    )
}

export default MyImages
