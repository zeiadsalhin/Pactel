import { useEffect } from 'react';

export default function OurStats() {
  // incrementing the numbers when they are in view
  useEffect(() => {
    const counters = document.querySelectorAll('.num');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const updateCount = () => {
            const target = +counter.getAttribute('data-goal');
            const count = +counter.innerText;

            const speed = 200; //speed of the counter
            const increment = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(counter => {
      observer.observe(counter);
    });

    return () => {
      counters.forEach(counter => {
        observer.unobserve(counter);
      });
    };
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 text-gray-800 flex justify-center w-auto text-center m-10 md:py-5 py-10 bg-gray-200 rounded shadow-md mt-10">
      <div className="nums flex md:flex-row flex-col mx-auto p-4 m-4 justify-center md:space-x-20 alg:space-x-40 md:space-y-0 space-y-10 text-2xl">
        <section className="one flex-col">
          <i className="fa-solid fa-store fa-xl"></i>
          <p className="p-4 font-semibold">Store Designs</p>
          <div className="flex justify-center">
            <p className="text-4xl">+</p>
            <div style={{ fontWeight: 800 }} className="num text-4xl" data-goal="50">0</div>
          </div>
        </section>
        <section className="two flex-col">
          <i className="fa-brands fa-xl fa-twitch"></i>
          <p className="p-4">Twitch Designs</p>
          <div className="flex justify-center">
            <p className="text-4xl">+</p>
            <div style={{ fontWeight: 800 }} className="num text-4xl" data-goal="50">0</div>
          </div>
        </section>
        <section className="four flex-col">
          <i className="fa-brands fa-youtube fa-xl"></i>
          <p className="p-4">Youtube Designs</p>
          <div className="flex justify-center">
            <p className="text-4xl">+</p>
            <div style={{ fontWeight: 800 }} className="num text-4xl" data-goal="30">0</div>
          </div>
        </section>
        <section className="four flex-col">
          <i className="fa-solid fa-ad fa-xl"></i>
          <p className="p-4">Advertising Campaigns</p>
          <div className="flex justify-center">
            <p className="text-4xl">+</p>
            <div style={{ fontWeight: 800 }} className="num text-4xl" data-goal="300">0</div>
          </div>
        </section>
      </div>
    </div>
  );
}