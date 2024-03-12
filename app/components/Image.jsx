import React from 'react';
import { BsSunFill, BsCloudDrizzleFill, BsFillCloudSunFill, BsCloudSnowFill, BsCloudRainHeavyFill, BsCloudFog2Fill, BsCloudLightningRainFill, BsCloudsFill } from 'react-icons/bs';
import '../globals.css'; // Import your component-specific CSS file

const Image = ({ weatherData }) => {
  let weatherIcon;

  switch (weatherData?.weather[0]?.description) {
    case "Clear":
      weatherIcon = <BsSunFill className="weatherIcon" />;
      break;
    case "drizzle":
      weatherIcon = <BsCloudDrizzleFill className="weatherIcon" />;
      break;
    case "Mist":
      weatherIcon = <BsFillCloudSunFill className="weatherIcon" />;
      break;
    case "Snow":
      weatherIcon = <BsCloudSnowFill className="weatherIcon" />;
      break;
    case "rain":
      weatherIcon = <BsCloudRainHeavyFill className="weatherIcon" />;
      break;
    case "fog":
      weatherIcon = <BsCloudFog2Fill className="weatherIcon" />;
      break;
    case "light rain":
      weatherIcon = <BsCloudLightningRainFill className="weatherIcon" />;
      break;
    default:
      weatherIcon = <BsCloudsFill className="weatherIcon" />;
  }

  return (
    <div className="weatherIconContainer">
      {weatherIcon}
    </div>
  );
};

export default Image;
