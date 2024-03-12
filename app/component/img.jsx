// ImageComponent.js

import React from 'react';
import Image from 'next/image';
import Clouds from '@/app/Images/Clouds.png';
import Drizzle from '@/app/Images/Drizzle.png';
import Humidity from '@/app/Images/Humidity.png';
import Mist from '@/app/Images/Mist.png';
import Rain from '@/app/Images/Rain.png';
import Search from '@/app/Images/Search.png';
import Snow from '@/app/Images/Snow.png';
import Wind from '@/app/Images/Wind.png';

const ImageComponent = ({ weatherMain }) => {
    console.log(weatherMain);

    let imageComponent = null;

    switch (weatherMain) {
        case "Clouds":
            imageComponent = <Image src={Clouds} width={100} height={100} />;
            break;
        case "Drizzle":
            imageComponent = <Image src={Drizzle} width={100} height={100} />;
            break;
        case "Humidity":
            imageComponent = <Image src={Humidity} width={100} height={100} />;
            break;
        case "Mist":
            imageComponent = <Image src={Mist} width={100} height={100} />;
            break;
        case "Rain":
            imageComponent = <Image src={Rain} width={100} height={100} />;
            break;
        case "Search":
            imageComponent = <Image src={Search} width={100} height={100} />;
            break;
        case "Snow":
            imageComponent = <Image src={Snow} width={100} height={100} />;
            break;
        case "Wind":
            imageComponent = <Image src={Wind} width={100} height={100} />;
            break;
        default:
            // Set a default component or leave it as null
            // Example: imageComponent = <DefaultImage />;
            break;
    }

    return (
        <div>
            {imageComponent}
        </div>
    );
};

export default ImageComponent;
