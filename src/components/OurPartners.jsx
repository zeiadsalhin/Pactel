import Marquee from 'react-fast-marquee';
import hph from '../assets/hph.webp';
import ymh from '../assets/ymh.webp';
import omaroskar from '../assets/omaroskar.webp';
import samirGfx from '../assets/samir.gfx.webp';
import twm from '../assets/twm.webp';
import ypdd from '../assets/ypdd.webp';
import moca from '../assets/moca.webp';
import yser from '../assets/yser.webp';
import zot from '../assets/8zot.webp';
import t100 from '../assets/100t.webp';
import abushadi from '../assets/abushadi.webp';
import avatar from '../assets/avatar.webp';
import avatar1 from '../assets/Avatar-1.webp';
import avatar2_2 from '../assets/avatar-2 (2).webp';
import avatar2 from '../assets/Avatar-2.webp';
import avatar3 from '../assets/avatar-3.webp';
import avatar5 from '../assets/avatar-5.webp';
import avatar6 from '../assets/avatar-6.webp';
import boybz from '../assets/boybz.webp';
import co from '../assets/co.webp';
import cr from '../assets/cr.webp';
import g from '../assets/g.webp';
import hago from '../assets/hago.webp';
import k from '../assets/k.webp';
import logo4 from '../assets/logo-4.webp';
import lxy from '../assets/lxy.webp';
import nr from '../assets/nr.webp';
import picsArt from '../assets/PicsArt_02-07-12.48.54.webp';
import rj911 from '../assets/rj911.webp';
import sstore from '../assets/sstore.webp';
import v from '../assets/v.webp';
import xskf from '../assets/xskf.webp';
import zwz8 from '../assets/zwz8.webp';

const logos = [
  hph, ymh, omaroskar, samirGfx, twm, ypdd, moca, yser, zot, t100, abushadi, avatar, avatar1, avatar2_2, avatar2, avatar3, avatar5, avatar6, boybz, co, cr, g, hago, k, logo4, lxy, nr, picsArt, rj911, sstore, v, xskf, zwz8
];

export default function OurPartners() {
  return (
    <div id="partners" className="dark:bg-transparent dark:text-gray-200 amd:flex mt-10 justify-center bg-gray-100 px-5 text-center font-sans">
      <div className="md:flex justify-center mx-auto p-4 space-y-10 opacity-100">
        {/* <p className="font-serif mx-auto text-center opacity-70">Our partners</p> */}
        {/* <hr className="border-1 border-black" /> */}
        <Marquee width="90%" direction="left" height="100px">
          <div className="flex space-x-10 opacity-75">
            {logos.map((logo, index) => (
              <img key={index} src={logo} width="50px" height="50px" alt="logo" loading="lazy" />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}