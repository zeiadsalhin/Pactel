import WebDesignImage from '../assets/wd.webp';
import MarketingImage from '../assets/marketing.webp';
import OrganizationImage from '../assets/org.webp';
import DesignImage from '../assets/design.webp';
import WebDevelopmentIcon from '../assets/web-development.svg';
import LogoTestIcon from '../assets/logo_test.svg';

const services = [
  {
    src: WebDesignImage,
    width: 1080,
    height: 1079,
    alt: 'pic1',
    title: 'Web Design',
  },
  {
    src: MarketingImage,
    width: 1080,
    height: 1085,
    alt: 'pic2',
    title: 'Digital Marketing',
  },
  {
    src: OrganizationImage,
    width: 1080,
    height: 1081,
    alt: 'pic3',
    title: 'Organization',
  },
  {
    src: DesignImage,
    width: 1080,
    height: 1082,
    alt: 'pic4',
    title: 'Graphic Design',
  },
];

export default function OurServices() {
  return (
    <div id="serv" className=' md:max-w-[100rem] mx-auto'>
      <h3 className="y-16 px-10 text-4xl mt-10 mb-4 font-serif font-bold dark:text-gray-200">Our Services</h3>
      <div className="md:flex py-10 px-10 text-center font-sans">
        {services.map((service, index) => (
          <div key={index} className="mr-6 mt-6 ml-6 md:w-1/3 c4-izmir c4-image-zoom-in">
            <img
              src={service.src}
              className="transform scale-100 hover:scale-110 ease-in duration-500 w-full rounded p-10"
              width={service.width}
              height={service.height}
              alt={service.alt}
              loading="lazy"
            />
            <p className="py-0 mb-10 text-center text-xl font-semibold font-mono">{service.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-400a dark:bg-transparent text-gray-200 m-2 md:m-5 w-auto flex justify-center">
        <hr className="border-2 hiddenm rounded border-gray-800 dark:border-gray-300 mx-auto mt-72 w-32 opacity-90" />
        <div className="flex-col webdesc bg-gray-600 dark:bg-gray-700 rounded-lg px-5 md:px-10 mx-auto m-2">
          <h1 className="text-3xl font-bold p-1 md:p-2">
            <div className="flex justify-between">
              <img className="p-2 md:p-4" src={WebDevelopmentIcon} width="100" height="20" alt="web" loading="lazy" />
              <img className="p-4" src={LogoTestIcon} width="120" height="20" alt="web" loading="lazy" />
            </div>
            Our Web package includes:
          </h1>
          <ul className="p-5">
            <li className="py-2">- Your fully Customized website as your description.</li>
            <li className="py-2">- Live Uptime <h1 className="inline-block px-1 font-bold">24/7</h1> with guarantee <h1 className="inline-block px-1 font-bold">99.9% uptime</h1> (sponsored by our free hosting netlify || vercel || 000webhost).</li>
            <li className="py-2">- <h1 className="inline-block px-1 font-bold">FREE</h1> subdomain included, for ex: <h1 className="inline-block px-1 font-bold">YOURNAME.netlify.app</h1>.</li>
            <li className="py-2">- Fully <h1 className="inline-block px-1 font-bold">responsive</h1> with mobile, tablets, and even TVs.</li>
            <li className="py-2">- You can get <h1 className="inline-block px-1 font-bold">Optional CRM system</h1> linked to your website (includes: live chat window, forms, Email Campaigns and more).</li>
            <li className="py-2">- Custom Domain by your choice starting <h1 className="inline-block px-1 font-bold">0.88$</h1> and a custom host <h1 className="inline-block px-1 font-bold">(Optional).</h1></li>
            <li className="py-2">- <h1 className="inline-block px-1 font-bold">FREE</h1> Maintenance for the <h1 className="inline-block px-1 font-bold">First 3 Months</h1>, additional Fees applied later for extra months.</li>
          </ul>
          <hr className="border-2 rounded border-gray-700 dark:border-gray-800 m-8 mx-auto w-60 opacity-90" />
          <a href="https://form.jotform.com/232764200417550" target="_blank" rel="noopener noreferrer" className="mx-auto justify-center text-center ml-5 rounded-lg bg-gray-300 text-gray-800 text-lg md:text-xl font-bold hover:no-underline hover:bg-gray-600 hover:text-white transform ease-in-out duration-200 p-5">Get your Website now</a>
        </div>
        <hr className="border-2 hiddenm rounded border-gray-800 dark:border-gray-300 m-5 mx-auto mt-72 w-32 opacity-90" />
      </div>
      <div className="flex justify-center revealx">
        <a href="https://wa.link/go5sb5">
          <button className="soon1 py-2 px-2 text-xl text-center font-semibold font-sans bg-black text-gray-200 hover:bg-white hover:text-black hover:border-white border-2 border-spacing-10 transform scale-100 hover:scale-125 ease-out duration-500 mt-10">
            Visit our shop <i className="fa-solid fa-right-long fa-xl"></i>
          </button>
        </a>
      </div>
    </div>
  );
}