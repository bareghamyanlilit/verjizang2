import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";

export function Home() {
  return (
    <div>
      <div
        className="FontArmAllegroU tracking-0 h-screen bg-cover bg-center flex flex-col justify-between text-white p-7 text-3xl"
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <p className="FontSHK_Dzeragir text-center text-3xl text-shadow-2xs">Ավարտական Հանդես</p>
        <h1 className="FontSHK_Dzeragir text-center text-8xl">
          Վերջին Զանգ
        </h1>

        <p className="text-end text-4xl">
          Սիրով ՝ 12ա <br />
          Դասարան
        </p>
      </div>

      <div className="FontSHK_Dzeragir italic text-center py-7 bg-[#EFEFEF]">
        <h3 className="text-xl px-7 mt-3">
          Ամեն սկիզբ ունի ավարտ, <br />
          Ամեն ավարտ մի նոր սկիզբ է․․․
        </h3>
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-full"
        />
        <h3 className="text-2xl px-7">Մեր միջոցառմանը մնաց</h3>
        <TimeBox />
      </div>

      <p className="FontSHK_Dzeragir italic text-xl p-7 text-center">
        Սիրով հրավիրում ենք Ձեզ <br /> ներկա գտնվելու մեր <br /> ՎԵՐՋԻՆ ԶԱՆԳ{" "}
        <br />
        հանդիսավոր միջոցառմանը։
        <br /> 23 Մայիսի, 2026 <br /> Ժամը՝ 10:00 <br /> Մեր հարազատ դպրոցում
      </p>

      <Image
        src="/img2.jpg"
        alt="icon1"
        width={500}
        height={500}
        className="w-full p-7 bg-[#EFEFEF]"
      />

      <div className="FontSHK_Dzeragir text-xl italic p-7 grid gap-2">
        <p className="text-center">Սիրով սպասում ենք</p>
        <hr className="w-40 my-4 m-auto" />
        <p className="text-center">Պահպանիր Օրը</p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <Program />
    </div>
  );
}
