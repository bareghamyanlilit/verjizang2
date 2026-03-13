import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";

export function Home() {
  return (
    <div>
      <div
        className="FontArmAllegroU tracking-0 h-screen bg-cover bg-bottom flex flex-col justify-between text-white p-9 text-3xl"
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <p className="FontSHK_Dzeragir text-center text-3xl text-shadow-2xs">
          Ավարտական Հանդես
        </p>
        <h1 className="FontSHK_Dzeragir text-center text-8xl">Վերջին Զանգ</h1>

        <p className="text-center text-4xl">
          Սիրով ՝ 12ա <br />
          Դասարան
        </p>
      </div>

      <div className="FontSHK_Dzeragir relative italic text-center py-7 bg-[##FFFF69]">
        <div className="py-12 mb-10">
          <h3 className=" static z-2 text-[26px] px-7 mt-3">
            Ամեն սկիզբ ունի ավարտ, <br />
            Ամեն ավարտ մի նոր սկիզբ է․․․
          </h3>
          <Image
            src="/icon1.png"
            alt="icon1"
            width={500}
            height={500}
            className="w-50 absolute -left-4 top-5 z-1"
          />
        </div>
        <h3 className="text-3xl px-7">Վերջին Զանգին մնաց</h3>
        <TimeBox />
      </div>
      <div className="px-7">

      <p className="FontSHK_Dzeragir italic text-2xl rounded-3xl py-7  text-center bg-[#FFFFFF69]">
        Սիրով հրավիրում ենք Ձեզ <br /> ներկա գտնվելու մեր <br /> ՎԵՐՋԻՆ ԶԱՆԳ{" "}
        <br />
        հանդիսավոր միջոցառմանը։
        <br /> 23 Մայիսի, 2026 <br /> Ժամը՝ 10:00 <br /> Մեր հարազատ դպրոցում
      </p>
      </div>

      <div className="FontSHK_Dzeragir text-xl italic p-7 grid gap-2">
        <p className="text-center text-2xl text-[#65452C] tracking-[8px]">Սիրով սպասում ենք</p>

        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full rounded-3xl my-10"
        />
        <p className="text-center text-2xl text-[#65452C] tracking-[8px]">Պահպանիր Օրը</p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <Image
        src="/img2.1.jpg"
        alt="icon1"
        width={500}
        height={500}
        className="w-full my-7 rounded-3xl  "
      />
      <Program />
    </div>
  );
}
