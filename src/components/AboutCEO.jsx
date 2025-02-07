import founder from "../assets/founder.webp";
import about from "../assets/about.webp";

export default function AboutCEO() {
  return (
    <>
    <div
          className="dark:bg-gray-600/80 dark:text-gray-200 md:flex justify-between mb-10 text-xl md:py-20 py-10 px-5 md:max-w-[100rem] mx-auto bg-gray-200 shadow-2xl rounded">
          {/* left */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:ml-10">
            <h2 className="md:text-4xl text-bold lg:text-5xl font-sans font-bold mb-10 rounded">About Us</h2>
            <p className="flex">In the past, Pactel was a prominent provider of marketing and graphic design services in
              Egypt and beyond. Despite our success, we have decided to expand our services to become a solution for
              other companies, both new and existing. Initially, we provided two services, but now we offer seven. We
              are aware of the potential risks, but we have faith in our employees and customers. Here are the new
              services offered by Pactel: marketing, graphic design, programming, organization, translation and
              proofreading, photography. We are not only a company that provides services to businesses, but also to
              individuals. Our business in Egypt is not just a service provider, but a partner in success with our
              customers. __,</p>
            <br />
            <h2 className="md:text-4xl text-bold lg:text-5xl text-right font-sans font-bold mb-10 rounded arabic">من نحن؟
            </h2>
            <p className="text-right arabic">في الفترة الماضية كانت شركة بكتل للتسويق والتصميم الجرافيكي احدى الشركات
              الرائدة في المجال وعلى الرغم من نجاحنا مع العديد من العملاء في مصر وخارج مصر الا اننا قررنا التوسع بخدمات
              جديدة نقدمها لتصبح بكتل حلول للشركات الأخرى سواء الجديدة في السوق او الموجودة حاليا كنا نقدم خدمتين الان
              اصبحنا نقدم 7 خدمات نعلم حجم المخاطرة ولكننا نثق في موظفينا وعملاؤنا ولذلك ها هي خدماتنا الجديدة (التسويق
              – التصميم الجرافيكي – البرمجة – التنظيم – الترجمة والتدقيق اللغوي – التصوير) شركة بكتل لن تقتصر فقط على
              تقديم الخدمات للشركات انما للأشخاص أيضا انتظرو الإعلان عن خدماتنا مع سابقة اعمالنا بها لسنا مجرد شركة تقدم
              خدماتها انما شركاء النجاح مع عملاءونا.</p>
            <a href="#" className=" inline-block py-4 px-4 text-lg ">Learn more</a>
            {/* founder info */}
            <hr className="border-gray-400 my-8" />
            <div id="ourwork" className="text-center p-4 rounded-2xl border-1 border-gray-300">
              <img className="rounded-full mx-auto p-2" src={founder} width="110" height="110" alt="foundericon" />
              <h2 className="font-bold p-2">Yasser Hejazi</h2>
              <p className="text-lg font-mono px-2">Founder and Marketing Manager</p>

            </div>

            {/* <a href=""className="inline-block py-4 px-4 font-mono bg-gray-400 hover:bg-yellow-400 transition ease-in duration-150">Get started</a> */}
          </div>
          {/* Right */}
          <div className="">
            <img src={about} width="600" height="600" alt="photo" className="rounded-t-xl p-4 mt-10" loading="lazy" />

          </div>
        </div>
                <div className="bg-gray-900 dark:bg-gray-700/80 h-1 rounded mb-8 max-w-[12rem] mx-auto" />
                </>
  );
}
