import { AiFillStar } from "react-icons/ai";

export default function CarouselList() {
  return (
    <main className="font-light tracking-wide bg-primary w-full">
      <section className="py-28 w-[1440px] mx-auto flex flex-1 gap-16">
        <div className="rounded-xl bg-[#20256f] h-[430px] w-full">
          <div className="h-[200px] relative">
            <img
              src="https://api.meborny.mn/uploads/courses/img_1_1682758877.png"
              className="w-full rounded-xl h-[200px]"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <span className="bg-[#151847] rounded text-xs font-extralight text-white px-2 py-1">
                Дунд шат
              </span>
              <div className="text-white text-xs flex">
                <AiFillStar className="text-[#FBB500] text-[16px] me-1" />
                <span className="text-[#FBB500] text-[14px] font-bold me-2">
                  5.00
                </span>{" "}
                (0)
              </div>
            </div>
            <div className="h-[64px] mt-2">
              <a href="/" className="text-white hover:underline">
                Крипто ертөнцийн үндэс
              </a>
            </div>
          </div>
          <footer></footer>
        </div>
        <div className="rounded-xl bg-[#20256f] h-[430px] w-full">
          <div className="h-[200px] relative">
            <img
              src="https://api.meborny.mn/uploads/courses/img_1_1663825449.webp"
              className="w-full rounded-xl h-[200px]"
            />
          </div>
          <div className="p-4">
            <div>
              <span>Дунд шат</span>
              <div>
                <span>5.00</span> (0)
              </div>
            </div>
            <div className="h-[64px] mt-12">
              <a className="text-white">Крипто ертөнцийн үндэс</a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#20256f] h-[430px] w-full">
          <div className="h-[200px] relative">
            <img
              src="https://api.meborny.mn/uploads/courses/img_1_1663825393.webp"
              className="w-full rounded-xl h-[200px]"
            />
          </div>
          <div className="p-4">
            <div>
              <span>Дунд шат</span>
              <div>
                <span>5.00</span> (0)
              </div>
            </div>
            <a className="text-white">Крипто ертөнцийн үндэс</a>
          </div>
        </div>
        <div className="rounded-xl bg-[#20256f] h-[430px] w-full">
          <div className="h-[200px] relative">
            <img
              src="https://api.meborny.mn/uploads/courses/img_1_1663825406.webp"
              className="w-full rounded-xl h-[200px]"
            />
          </div>
          <div className="p-4">
            <div>
              <span>Дунд шат</span>
              <div>
                <span>5.00</span> (0)
              </div>
            </div>
            <a className="text-white">Крипто ертөнцийн үндэс</a>
          </div>
        </div>
      </section>
    </main>
  );
}
