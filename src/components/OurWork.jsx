
const projects = [
  {
    id: 'project1',
    link: 'https://realestate21.netlify.app',
    imgSrc: 'https://pactel.site/.netlify/images?q=50&url=%2FScreens 4.webp&fit=cover&q=50&fm=webp&w=456&h=256',
    alt: 'middleeast',
    website: 'Middle East construction',
    customer: 'Mohamed Abdullatif',
    type: 'Landing page for construction company'
  },
  {
    id: 'project2',
    link: 'https://shippingcar.netlify.app/',
    imgSrc: 'https://pactel.site/.netlify/images?q=50&url=%2Ffastsh.jpg&fit=cover&q=50&fm=webp&w=456&h=256',
    alt: 'middleeast',
    website: 'Fast Shipping Tagline',
    customer: 'Pactel',
    type: 'Landing page'
  },
  {
    id: 'project3',
    link: 'https://kinglordsh.netlify.app/',
    imgSrc: 'https://pactel.site/.netlify/images?q=50&url=%2Fkingland.jpg&fit=cover&q=50&fm=webp&w=456&h=256',
    alt: 'middleeast',
    website: 'King Land Services',
    customer: 'Pactel',
    type: 'Landing page'
  },
  {
    id: 'project4',
    link: 'https://tropicalconstruction.netlify.app/',
    imgSrc: 'https://pactel.site/.netlify/images?q=50&url=%2Ftropical.jpg&fit=cover&q=50&fm=webp&w=456&h=256',
    alt: 'middleeast',
    website: 'Tropical Constructions',
    customer: 'Pactel',
    type: 'Landing page'
  },
  {
    id: 'project5',
    link: 'https://tawasulsourcing.netlify.app/',
    imgSrc: 'https://pactel.site/.netlify/images?q=50&url=%2Ftawasul.jpg&fit=cover&q=50&fm=webp&w=456&h=256',
    alt: 'middleeast',
    website: 'Tawasul Outsourcing',
    customer: 'Pactel',
    type: 'Landing page'
  }
];

export default function OurWork() {
  return (
    <>
    <div className="p-1 bg-gray-200 dark:text-gray-200 dark:bg-gray-950 md:max-w-[100rem] mx-auto">
      <div className="ourwork flex justify-center border-2 border-gray-400 rounded">
        <p className="text-4xl text-bold lg:text-3xl text-center font-bold py-10">Our work -</p>
        <p className="text-4xl text-bold lg:text-3xl text-center font-semibold px-2 py-10 arabic">أعمالنا</p>
      </div>
      <div id="web" className="flex-col m-5 bg-gray-300 dark:bg-gray-600/20 rounded-t-xl p-2 md:px-10">
        <div className="flex justify-center font-semibold p-2 m-2 bg-gray-400 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-3xl rounded-2xl">
          <h1 className="p-2">Web projects</h1>
        </div>
        <div className="projects flex-row md:flex md:flex-wrap md:p-5 gap-5 space-y-10 md:space-y-0">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="mx-auto text-center justify-center">
              <div className="mx-auto mt-5 w-54 md:w-[24rem] rounded c4-izmir c4-image-zoom-in">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img className="mx-auto rounded" src={project.imgSrc} width="100%" height="100%" alt={project.alt} loading="lazy" />
                </a>
              </div>
              <div className="flex-col justify-center mt-8 md:text-center">
                <p className="text-xl mt-5 p-1 text-gray-900 dark:text-gray-200 font-extrabold">Website: <span className="p-1 text-lg text-gray-800 dark:text-gray-200 font-light">{project.website}</span></p>
                <p className="text-xl p-1 text-gray-900 dark:text-gray-200 font-extrabold">Customer: <span className="p-1 text-lg text-gray-800 dark:text-gray-200 font-light">{project.customer}</span></p>
                <p className="text-xl p-1 text-gray-900 dark:text-gray-200 font-extrabold">Type: <span className="p-1 text-lg text-gray-800 dark:text-gray-200 font-light">{project.type}</span></p>
                <p className="text-xl text-center p-2 mt-5 mb-2 text-gray-900 dark:text-gray-200 border-2 w-40 mx-auto dark:bg-gray-00 bg-gray-400 dark:bg-gray-800/80 rounded hover:text-gray-200 hover:bg-gray-900">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View project</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-gray-900 dark:bg-gray-700/80 h-1 rounded my-8 max-w-[12rem] mx-auto" />
    </>
  );
}