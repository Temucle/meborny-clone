import { CgCheck } from "react-icons/cg";

export default function Hero() {
  return (
    <main className="relative z-0 top-12 right-1">
      <div
        className="bg-cover h-[620px] relative rounded-xl"
        style={{
          backgroundImage: "url('https://meborny.mn/static/main-min.jpeg')",
        }}
      >
        <div className=" w-full uk-overlay-default uk-position-cover bg-gradient-to-r from-[#ffffffa3] via-[#ffffffa3] to-transparent dark:bg-gradient-to-b dark:from-[#151847] absolute top-0 right-0 left-0 bottom-0">
          <div className="py-2 px-12">
            <div className="text-white block font-extrabold pt-32 text-6xl">
              <span className="uppercase block">Онцлох мэдлэгт</span>
              <span className="uppercase block">Онлайнаар суралц</span>
            </div>{" "}
            <div className="text-white font-extrabold leading-32 text-15 my-5 ">
              Хамгийн хүчтэй зэвсэг бол мэдлэг, боловсрол юм
            </div>
            <div className="my-9">
              <a
                href="/"
                className="bg-blue-500 rounded-xl text-white p-4 text-xl font-thin me-4"
              >
                Бидний тухай
              </a>
              <a
                href="/"
                className="bg-white rounded-xl p-4 text-xl font-thin text-black"
              >
                Сурагчдын сэтгэгдэл
              </a>
            </div>
            <ul className="text-white font-extralight">
              <li className=" tracking-wider">
                <CgCheck className="inline text-4xl text-blue-500" /> Шалгалт
                болон дүгнэлттэй
              </li>
              <li className=" tracking-wider">
                {" "}
                <CgCheck className="inline text-4xl text-blue-500" />
                Хэзээ ч хаанаас ч суралцах боломжтой
              </li>
              <li className="  tracking-wider">
                {" "}
                <CgCheck className="inline text-4xl text-blue-500" />
                Дижитал баталгаа олгодог
              </li>
              <li className="  tracking-wider">
                {" "}
                <CgCheck className="inline text-4xl text-blue-500" />
                Нэг л удаа төлбөр төлнө
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
