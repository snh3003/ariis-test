import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const Photo = () => {
    const [dataUri, setDataUri] = useState('');
 
    let handleTakePhoto = (dataUri) => {
        // Do stuff with the photo...
        console.log('takePhoto');
        console.log(dataUri);
        setDataUri(dataUri);
    }
    return (
        <div>
            <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            />
            <button>
                <a href={dataUri} download>
                    Download
                </a>
            </button>
        </div>
    )
}

export default Photo;