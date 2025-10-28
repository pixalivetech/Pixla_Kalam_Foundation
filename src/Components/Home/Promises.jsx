import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const promises = [
  {
    id: "01.",
    title: "Pixlakart Green Promise",
    desc: "“Every Order Plants a Tree.” For every order placed on Pixlakart, we plant one tree sapling through Pixla Kalam Foundation. Your shopping supports sustainable living and environmental restoration.",
    tag: "1 Order = 1 Tree 🌱",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "02.",
    title: "Pixla Gold Green Promise",
    desc: "“Every Gram of Gold Plants a Tree.” Each gram of gold purchased from Pixla Gold plants a tree. Build your wealth while nurturing the Earth.",
    tag: "1 Gram = 1 Tree 🌳",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "03.",
    title: "Pixla App Install Promise",
    desc: "“Every Install Throws a Seed Ball.” For every new install of the Pixla App, we launch a seed ball through our environmental drives. Your single app install helps green barren lands and rural areas across India.",
    tag: "1 Install = 1 Seed Ball 🌰",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "04.",
    title: "Pixla App Subscription Promise",
    desc: "“Every Subscription Plants a Tree.”Each subscription to Pixla App contributes to planting a tree under the Pixla Kalam Foundation.Your entertainment directly supports a cleaner, greener India.",
    tag: "1 Subscription = 1 Tree 🌿",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "05.",
    title: "Pixla Academy Green Promise",
    desc: "“Every Learner Plants a Tree.”Every individual who joins Pixla Academy helps us plant a tree — symbolizing both growth in knowledge and in nature.Learn new skills, empower yourself, and give back to the planet.",
    tag: "1 Learner = 1 Tree 🌲",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
];

const PixlaPromises = () => {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollAmount += scrollStep;
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f2f2f2] py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h2 className="text-gray-500 text-lg font-medium">Pixla Promises</h2>
        <p className=" max-w-xl mt-2 md:mt-0 text-lg md:text-2xl text-black font-semibold  leading-snug">
          Through Pixla Kalam Foundation, we’ve made five meaningful promises —
          where every click, purchase, or learning step contributes to our
          planet’s growth.
        </p>
      </div>
<br />
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide"
      >
        {promises.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[310px] border-r-2 last:border-none border-gray-200 pr-6"
          >
            <h3 className="text-6xl font-bold text-gray-900 mb-4">
              {item.id}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <ArrowUpRight className="w-5 h-5" />
              <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.title}
              </h4>
            </div><br />
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
              {item.desc}
            </p><br /><br />
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-28 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium">
                {item.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PixlaPromises;
