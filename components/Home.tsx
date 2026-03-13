'use client'
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { FaMusic } from "react-icons/fa";
import { anim } from "@/data/data";
import { motion } from "framer-motion";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 text-2xl  rounded-2xl bg-[#7c4b00b6] opacity-95 text-[#fdf8f5] right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <FaMusic />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontArmAllegroU tracking-0 h-screen bg-cover bg-bottom flex flex-col justify-between text-white p-9 text-3xl"
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <p className="FontSHK_Dzeragir text-center text-3xl text-shadow-2xs">
          Ավարտական Հանդես
        </p>
        <h1 className="FontSHK_Dzeragir text-center text-9xl">Վերջին Զանգ</h1>

        <p className="text-center text-4xl">
          Սիրով ՝ 12ա <br />
          Դասարան
        </p>
      </div>

      <div className="FontSHK_Dzeragir relative text-center py-7 bg-[##FFFF69]">
        <div className="py-12 mb-10">
          <motion.h3 {...anim}  className=" static z-2 text-[26px] px-7 mt-3">
            Ամեն սկիզբ ունի ավարտ, <br />
            Ամեն ավարտ մի նոր սկիզբ է․․․
          </motion.h3>
          <Image
            src="/icon1.png"
            alt="icon1"
            width={500}
            height={500}
            className="w-50 absolute -left-4 top-5 z-1"
          />
        </div>
        <motion.h3 className="text-3xl px-7">Վերջին Զանգին մնաց</motion.h3>
        <TimeBox />
      </div>
      <div className="px-7">
        <motion.p {...anim}  className="FontSHK_Dzeragir text-2xl rounded-3xl py-7  text-center bg-[#FFFFFF69]">
          Սիրով հրավիրում ենք Ձեզ <br /> ներկա գտնվելու մեր <br /> ՎԵՐՋԻՆ ԶԱՆԳ{" "}
          <br />
          հանդիսավոր միջոցառմանը։
          <br /> 23 Մայիսի, 2026 <br /> Ժամը՝ 10:00 <br /> Մեր հարազատ դպրոցում
        </motion.p>
      </div>

      <div className="FontSHK_Dzeragir text-xl p-7 grid gap-2">
        <motion.p {...anim}  className="text-center text-2xl text-[#65452C] tracking-[8px]">
          Սիրով սպասում ենք
        </motion.p>

        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full rounded-3xl my-10"
        />
        <motion.p {...anim}  className="text-center text-2xl text-[#65452C] tracking-[8px]">
          Պահպանիր Օրը
        </motion.p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <div className="px-7">
        <Image
          src="/img2.1.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full my-7 rounded-3xl  "
        />
      </div>
      <Program />

      <div className="px-7">
        <Image
          src="/img6.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full my-7 rounded-3xl  "
        />
      </div>
      <h2 className="FontSHK_Dzeragirm text-center text-5xl">23 / 05 / 2026</h2>
        <Image
          src="/icon4.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-[60%] m-auto rounded-3xl  "
        />
    </div>
  );
}
