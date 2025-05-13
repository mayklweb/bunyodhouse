import React from "react";

function Info() {
  return (
    <div>
      <div className="container">
        <div className="w-full py-10 bg-[url('/house-2.svg')] bg-no-repeat bg-right bg-contain bg-size-[100%]">
          <div className="">
            <h1 className="text-4xl text-[#FFC045]">Info</h1>
            <div className="mt-10">
              <div className="w-2/3 mt-10 ml-[40px] text-3xl flex gap-4">
                <h1 className=" text-[#FFC045]">01.</h1>
                <h1 className="text-[#030303] text-4xl">
                  Biz mijozlarimi uchun eng qulay bo'lgan narxlarni taqdim
                  etamiz.
                </h1>
              </div>
              <div className="w-2/3 mt-10 ml-[80px] text-3xl flex gap-2">
                <h1 className="text-[#FFC045]">02.</h1>
                <h1 className="text-[#030303] text-4xl">
                  "Bunyod House" uylari o'zining zamonaviy va yuqori did bilan
                  qurilgan dizaynga ega.
                </h1>
              </div>
              <div className="w-2/3 mt-10 ml-[120px] text-3xl flex gap-2">
                <h1 className="text-[#FFC045]">03.</h1>
                <h1 className="text-[#030303] text-4xl">
                  Qurilish jarayonida biz faqatgina yuqori sifatli qurillish
                  mollarini ishlatamiz.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
