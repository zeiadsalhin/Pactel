import yaserrImg from "../assets/yaserr.webp";
import azImg from "../assets/az.webp";
import isImg from "../assets/is.webp";
import privImg from "../assets/priv.webp";

const teamMembers = [
  {
    name: "Yasser Hijazi",
    role: "Founder, CEO and Marketing Manager of Pactel",
    img: yaserrImg,
    alt: "foundericon",
  },
  {
    name: "Abdulaziz Yasser",
    role: "Planning Manager of Pactel",
    img: azImg,
    alt: "a.yasser",
  },
  {
    name: "Islam Khalifa",
    role: "Public Relations Manager of Pactel",
    img: isImg,
    alt: "i.khalifa",
  },
  {
    name: "Zeiad Abdeltawab",
    role: "Web Developer of Pactel",
    img: privImg,
    alt: "ziad",
  },
];

export default function AboutCEO() {
  return (
    <>
      <hr className="border-2 rounded border-gray-400 m-10 mx-auto w-60 opacity-90" />
      <div className="dark:bg-gray-900/80 dark:text-gray-200 mb-10 text-xl md:py-20 py-10 px-5 bg-gray-200/50 shadow-2xl max-w-[100rem] mx-auto rounded">
        <h2 className="font-bold text-3xl underline-offset-4 hover:underline transform mb-5 rounded">
          Meet our team
        </h2>
        <div className="md:flex justify-center flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-col p-4 text-center">
              <div className="relative w-[200px] h-[200px] mx-auto">
                <img
                  className="rounded-2xl mx-auto"
                  src={member.img}
                  width="200"
                  height="200"
                  alt={member.alt}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="font-bold p-2">{member.name}</h2>
              <p className="text-lg font-mono px-2 mx-auto max-w-[18rem]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
