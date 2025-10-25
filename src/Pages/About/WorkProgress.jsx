"use client";
import React, { useState, useEffect, useRef } from "react";
import progress1 from '../../../public/img/home/workprogress/progress1.png'
import progress2 from '../../../public/img/home/workprogress/progress2.png'
import progress3 from '../../../public/img/home/workprogress/progress3.png'
import progress4 from '../../../public/img/home/workprogress/progress4.png'
// useInView hook (JS version)
const useInView = (ref) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
};

// Counter component
const Counter = ({ from, to, inView, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const duration = 2000;

  useEffect(() => {
    if (!inView) {
      setCount(from);
      return;
    }

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentCount = Math.min(
        to,
        from + (to - from) * (progress / duration)
      );
      setCount(Math.ceil(currentCount));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to]);

  const formatNumber = (num) => {
    const formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedNum}${suffix}`;
  };

  return <span>{formatNumber(count)}</span>;
};

const WorkProgress = () => {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const stat4Ref = useRef(null);

  const inView1 = useInView(stat1Ref);
  const inView2 = useInView(stat2Ref);
  const inView3 = useInView(stat3Ref);
  const inView4 = useInView(stat4Ref);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 my-10  bg-gradient-to-r from-[#092846] to-[#06585C] ">
      <div className="xl:border-r border-[#737373] py-8 flex justify-center items-center">
        <img src={progress1} alt="" className="w-20 h-20 bg-[#d9d9d946] p-2 rounded-full border border-[#006CAF]"  />
        <div
          ref={stat1Ref}
          className="relative flex flex-col items-center p-6  texth    transition-transform transform hover:scale-105"
        >
          <div className="text-4xl font-extrabold texth mb-2">
            <Counter from={0} to={25} inView={inView1} suffix="+" />
          </div>
          <h2 className="text-lg font mb-1">Years experience</h2>
        </div>
      </div>

      <div className="xl:border-r border-[#737373] py-8 flex justify-center items-center">
         <img src={progress2} alt="" className="w-20 h-20 bg-[#d9d9d946] p-2 rounded-full border border-[#006CAF]"  />
        <div
          ref={stat2Ref}
          className="relative flex flex-col items-center p-6   texth    transition-transform transform hover:scale-105"
        >
          <div className="text-4xl font-extrabold texth mb-2">
            <Counter from={0} to={200} inView={inView2} suffix="+" />
          </div>
          <h2 className="text-lg font-bold mb-1">Delivery project</h2>
        </div>
      </div>
      <div className="xl:border-r border-[#737373] py-8 flex justify-center items-center">
         <img src={progress3} alt="" className="w-20 h-20 bg-[#d9d9d946] p-2 rounded-full border border-[#006CAF]"  />

        <div
          ref={stat3Ref}
          className="relative flex flex-col items-center p-6  texth  transition-transform transform hover:scale-105"
        >
          <div className="text-4xl font-extrabold texth mb-2">
            <Counter from={0} to={25} inView={inView3} suffix="+" />
          </div>
          <h2 className="text-lg font-bold mb-1">Team members</h2>
        </div>
      </div>

      <div className="xl:border-r border-[#737373] py-8 flex justify-center items-center">
         <img src={progress4} alt="" className="w-20 h-20 bg-[#d9d9d946] p-2 rounded-full border border-[#006CAF]"  />
        <div
          ref={stat4Ref}
          className="relative flex flex-col items-center p-6  texth   transition-transform transform hover:scale-105"
        >
          <div className="text-4xl font-extrabold texth mb-2">
            <Counter from={0} to={50} inView={inView4} suffix="+" />
          </div>
          <h2 className="text-lg font-bold mb-1">Total award wins</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkProgress;
