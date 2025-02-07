import { useState } from 'react';
import posterImport from '../assets/poster.webp';
import videoImport from '../assets/v1.mp4';
import LazyVideo from './Video';
import twitch1 from '../assets/work/0/twitch 1.webp';
import twitch2 from '../assets/work/0/twitch 2.webp';
import twitch3 from '../assets/work/0/twitch 3.webp';
import samir1 from '../assets/work/1/samir.gfx-20220918-0071.webp';
import samir2 from '../assets/work/1/samir.gfx-20220918-0072.webp';
import samir3 from '../assets/work/1/samir.gfx-20220918-0073.webp';
import samir4 from '../assets/work/1/samir.gfx-20220918-0074.webp';
import samir5 from '../assets/work/1/samir.gfx-20220918-0075.webp';
import samir6 from '../assets/work/1/samir.gfx-20220918-0076.webp';
import samir7 from '../assets/work/2/samir.gfx-20220918-0065.webp';
import samir8 from '../assets/work/2/samir.gfx-20220918-0066.webp';
import samir9 from '../assets/work/2/samir.gfx-20220918-0067.webp';
import samir10 from '../assets/work/2/samir.gfx-20220918-0068.webp';
import samir11 from '../assets/work/2/samir.gfx-20220918-0069.webp';
import samir12 from '../assets/work/2/samir.gfx-20220918-0070.webp';
import img1 from '../assets/work/3/IMG-20220915-WA0006.webp';
import img2 from '../assets/work/3/IMG-20220915-WA0010.webp';
import img3 from '../assets/work/3/IMG-20220915-WA0019.webp';
import img4 from '../assets/work/3/IMG-20220915-WA0029.webp';
import img5 from '../assets/work/3/IMG-20220915-WA0016.webp';
import img6 from '../assets/work/3/IMG-20220915-WA0023.webp';
import img7 from '../assets/work/3/IMG-20220915-WA0027.webp';
import img8 from '../assets/work/3/IMG-20220915-WA0028.webp';
import img9 from '../assets/work/3/png_20220918_022634.webp';
import img10 from '../assets/work/4/samir.gfx-20220918-0013.webp';
import img11 from '../assets/work/4/samir.gfx-20220918-0014.webp';
import img12 from '../assets/work/4/samir.gfx-20220918-0015.webp';
import img13 from '../assets/work/4/samir.gfx-20220918-0016.webp';
import img14 from '../assets/work/4/samir.gfx-20220918-0017.webp';

const images = [
  { src: twitch1, width: 740, height: 740, alt: '' },
  { src: twitch2, width: 740, height: 740, alt: '' },
  { src: twitch3, width: 740, height: 740, alt: '' },
  { src: samir1, width: 740, height: 740, alt: '' },
  { src: samir2, width: 740, height: 740, alt: '' },
  { src: samir3, width: 740, height: 740, alt: '' },
  { src: samir4, width: 740, height: 740, alt: '' },
  { src: samir5, width: 740, height: 740, alt: '' },
  { src: samir6, width: 740, height: 740, alt: '' },
  { src: samir7, width: 490, height: 490, alt: '' },
  { src: samir8, width: 490, height: 490, alt: '' },
  { src: samir9, width: 490, height: 490, alt: '' },
  { src: samir10, width: 490, height: 490, alt: '' },
  { src: samir11, width: 490, height: 490, alt: '' },
  { src: samir12, width: 490, height: 490, alt: '' },
  { src: img1, width: 490, height: 490, alt: '' },
  { src: img2, width: 490, height: 490, alt: '' },
  { src: img3, width: 490, height: 490, alt: '' },
  { src: img4, width: 490, height: 490, alt: '' },
  { src: img5, width: 490, height: 490, alt: '' },
  { src: img6, width: 490, height: 490, alt: '' },
  { src: img7, width: 490, height: 490, alt: '' },
  { src: img8, width: 490, height: 490, alt: '' },
  { src: img9, width: 490, height: 490, alt: '' },
  { src: img10, width: 490, height: 490, alt: '' },
  { src: img11, width: 490, height: 490, alt: '' },
  { src: img12, width: 490, height: 490, alt: '' },
  { src: img13, width: 740, height: 740, alt: '' },
  { src: img14, width: 740, height: 740, alt: '' }
];

export default function OurDesigns() {
  // Lazy load video and images
  const videoSrc = videoImport;
  const poster = posterImport;
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=' max-w-[100rem] mx-auto'>
      <div className="flex justify-center font-semibold p-2 m-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-800 text-3xl rounded-2xl">
        <h1 className="p-2">Designs</h1>
      </div>
      <div className="md:flex justify-center md:space-x-2 space-y-2 p-2 min-h-[200px]">
      <LazyVideo
        src={videoSrc}
        poster={poster}
        width="1200px"
        height="600px"
        title="Twitch work"
        allowFullScreen={false}
        preload="none"
      />
      </div>
      <div className="flex flex-wrap justify-center">
        {images.slice(0, 10).map((image, index) => (
          <div key={index} className="md:flex md:space-x-2 space-y-2 p-2">
            <img src={image.src} width={image.width} height={image.height} loading="lazy" alt={image.alt} />
          </div>
        ))}
        {showMore && images.slice(10).map((image, index) => (
          <div key={index} className="md:flex md:space-x-2 space-y-2 p-2">
            <img src={image.src} width={image.width} height={image.height} loading="lazy" alt={image.alt} />
          </div>
        ))}
      </div>
      <hr className="mx-auto border-gray-400 w-40 mt-10 mb-5" />
      {!showMore && (
        <button id="showmoreb" onClick={handleShowMore} className="showmoreb flex justify-center text-xl font-semibold rounded mx-auto px-20 py-2 bg-gray-400 text-gray-800">Show more</button>
      )}
      {showMore && (
        <button onClick={handleShowMore} id="hidemoreb" className="hidemoreb flex justify-center text-xl font-semibold rounded mx-auto px-4 py-2 bg-gray-400">Hide</button>
      )}
    </div>
  );
}