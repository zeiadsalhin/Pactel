import { useState, useEffect, lazy, Suspense } from 'react';
import Loader from './components/Loader'
import Nav from './components/Nav'
import AboutCEO from './components/AboutCEO';
import OurStats from './components/OurStats';
import OurPartners from './components/OurPartners';
import OurVisitors from './components/OurVisitors';
import Banner from './components/Banner';
const SendinblueWorker = lazy(() => import('./SendinblueWorker'));
const SwiperSlider = lazy(() => import('./swiperSlider'));
const AboutLeaders = lazy(() => import('./components/AboutLeaders'));
const OurWork = lazy(() => import('./components/OurWork'));
const OurDesigns = lazy(() => import('./components/OurDesigns'));
const OurServices = lazy(() => import('./components/OurServices'));
const Footer = lazy(() => import('./components/Footer'));

// reveal banner
function reveal() {
  for (var e = document.querySelectorAll(".reveal"), t = 0; t < e.length; t++) {
    
      let s = window.innerHeight;
    e[t].getBoundingClientRect().top < s - 150 && e[t].classList.add("active");
  }
  // console.log('done');
  
}

// loader handle
function useOnReactReady(callback) {
  useEffect(() => {
    const timer = setTimeout(async () => {
      await callback();
    }, 100); // delay 

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);
}

function App() {
  const [isReady, setIsReady] = useState(false);

  useOnReactReady(() => {
    setIsReady(true); // Hide Loader after delay
  });

  useEffect(() => {
    if (isReady) {
      reveal();
    }
  }, [isReady]);

  return (
    <>
    {/*LiveChat*/}
    <Suspense>
      <SendinblueWorker />
      </Suspense>

    {/*Main App*/}
      <div id="darkmode" className="darkmode dark:bg-[#030712] transition ease-in duration-300 md:min-h-[600px] min-h-[1200px]">

        {/*Loader Control*/}
        <Loader isReady={isReady} />
        {isReady && (
          <>
          <div className="min-h-[1200px] md:min-h-[600px]">
            <Nav />
            <div className="min-h-[150px] md:min-h-[600px]">
            {/* <Suspense fallback={<div className="min-h-[300px]">Loading...</div>}> */}
              <Banner />
            {/* </Suspense> */}
            </div>

            <div className="min-h-[400px]">
            <Suspense fallback={<div className="min-h-[300px]">Loading...</div>}>
              <SwiperSlider />
            </Suspense>
            </div>

            <div className="min-h-[600px]">
            <Suspense fallback={<div className="min-h-[300px]">Loading...</div>}>
              <AboutLeaders />
            </Suspense>
            </div>

            <div className="min-h-[300px]">
              <AboutCEO />
            </div>

            <div className="min-h-[300px]">
              <Suspense fallback={<div className="min-h-[300px]">Loading...</div>}>
              <OurWork />
            </Suspense>
            </div>

            <div className="min-h-[300px]">
            <Suspense fallback={<div className="min-h-[300px]">Loading...</div>}>
              <OurDesigns />
            </Suspense>
            </div>

            <div className="min-h-[300px]">
            <Suspense>
              <OurServices />
            </Suspense>
            </div>
            
            <div className="min-h-[200px]">
              <OurStats />
            </div>

            <div className="min-h-[100px]">
              <OurPartners />
            </div>

            <div className="min-h-[100px]">
              <OurVisitors />
            </div>
            
            <Suspense>
            <Footer />
            </Suspense>
            </div>
          </>
        )}
    </div>
    </>
  );
}

export default App;