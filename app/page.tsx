'use client'

import TimeBox from "@/src/components/TimeBox/TimeBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon1 from '../src/icons/icon_1.png';
import Icon2 from '../src/icons/icon_2.png';
import Icon3 from '../src/icons/icon_3.png';
import Icon4 from '../src/icons/icon_4.png';


export default function Home() {
 const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-07-12T13:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-pink-50 flex items-center justify-center overflow-x-hidden">
      <div className="z-[5] flex flex-col items-center justify-center p-[30px] text-center">
        <h1 className="text-[36px] font-serif text-pink-700 mb-[10px]">Коля та Римма</h1>
        <p className="text-[20px] text-gray-800 mb-[20px]">запрошують на весілля</p>

        <div className="flex gap-[10px] justify-center mb-[20px]">
          <TimeBox label="Днів" value={timeLeft.days} />
          <TimeBox label="Годин" value={timeLeft.hours} />
          <TimeBox label="Хвилин" value={timeLeft.minutes} />
          <TimeBox label="Секунди" value={timeLeft.seconds} />
        </div>

        <p className="text-[18px] text-gray-700">12 липня 2025 о 13:00</p>
        <p className="text-[16px] text-gray-600 mb-[16px]">також буде викуп о 11:00</p>
        <p className="text-[18px] text-gray-700 mb-[20px]">Кропивницький, ресторан Локація</p>

        <a href="https://www.google.com/maps/place/%D0%90%D0%9B%D0%91%D0%95%D0%9D%D0%90,+%D0%9A%D0%90%D0%A4%D0%95/@48.4974385,32.2124611,509m/data=!3m1!1e3!4m9!1m2!2m1!1z0LrQsNGA0YLQsA!3m5!1s0x40d042f09438ee97:0x898863c61b6c1644!8m2!3d48.4980481!4d32.2141402!16s%2Fg%2F1q2vwkn_p?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-300 text-pink-800 px-[24px] py-[10px] rounded-[10px] mb-[16px] hover:bg-pink-400 transition"
        >
          Показати на карті
        </a>

        <p className="text-[14px] text-gray-600 mb-[30px] max-w-[280px]">
          Якщо у вас не вдасться приїхати на весілля, просимо записати відео з побажаннями.
        </p>

        <div className="flex flex-col gap-[12px] w-full max-w-[300px]">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvNN5u2CSljGLV-Ke7RBEido-br3gDhZB3ZoJ95eFxmwXUNQ/viewform?usp=pp_url&entry.358039117=%E2%9C%85+%D0%9F%D1%80%D0%B8%D0%B9%D0%B4%D1%83" className="bg-pink-200 text-pink-800 py-[10px] rounded-[8px] hover:bg-pink-300 transition">Прийду ✓</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvNN5u2CSljGLV-Ke7RBEido-br3gDhZB3ZoJ95eFxmwXUNQ/viewform?usp=pp_url&entry.358039117=%E2%9C%89+%D0%92%D1%96%D0%B4%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8E+%D0%B2%D1%96%D0%B4%D0%B5%D0%BE" className="bg-pink-200 text-pink-800 py-[10px] rounded-[8px] hover:bg-pink-300 transition">Відправлю відео ✉</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvNN5u2CSljGLV-Ke7RBEido-br3gDhZB3ZoJ95eFxmwXUNQ/viewform?usp=pp_url&entry.358039117=%E2%9D%93%D0%A1%D0%BA%D0%B0%D0%B6%D1%83+%D0%B1%D0%BB%D0%B8%D0%B6%D1%87%D0%B5+%D0%B4%D0%BE+%D0%B4%D0%B0%D1%82%D0%B8" className="bg-pink-200 text-pink-800 py-[10px] rounded-[8px] hover:bg-pink-300 transition">Скажу ближче до дати ?</a>
        </div>       
      </div>
      <Image
        src={Icon1}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className=" absolute right-[60%] top-[20%] rotate-[-40deg] z-[0] opacity-50"
      />
      <Image
        src={Icon2}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className="absolute left-[60%] top-[50%] rotate-[40deg] z-[0] opacity-50"
      />
      <Image
        src={Icon3}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className="absolute left-0 bottom-0 z-[0] opacity-50 transform-[100%]"
      />
      <Image
        src={Icon3}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className="absolute right-0 bottom-0 z-[0] opacity-50 scale-x-[-1]"
      />
      <Image
        src={Icon3}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className="absolute right-0 top-0 z-[0] opacity-50 scale-x-[-1] scale-y-[-1]"
      />
      <Image
        src={Icon3}
        alt="icon"
        width={200}
        height={200}
        draggable="false"
        className="absolute left-0 top-0 z-[0] opacity-50 scale-y-[-1]"
      />
    </div>
  );
}
