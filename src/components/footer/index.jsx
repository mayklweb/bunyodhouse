import React from "react";

function Footer() {
  return (
    <footer className="mt-14">
      <div className="w-full bg-no-repeat bg-top bg-cover bg-[url('/footer.webp')]">
        <div className="container">
          <div className="grid grid-row-3 lg:grid-cols-3 justify-between pt-[80px]">
            <div className="w-full flex flex-col items-center">
              <div className="w-full">
                <img src="/logo.svg" alt="" />
              </div>
              <p className="text-white font-marcellus text-justify mt-2">
                "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
                tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
                mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white lg:text-4xl font-marcellus">
                Sayt haritasi
              </h1>
              <div className="grid grid-cols-2 gap-3">
                <p className="text-white lg:text-xl font-marcellus">Asosiy</p>
                <p className="text-white lg:text-xl font-marcellus">Faoliyat</p>
                <p className="text-white lg:text-xl font-marcellus">Narxlar</p>
                <p className="text-white lg:text-xl font-marcellus">
                  Biz haqimizda
                </p>
                <p className="text-white lg:text-xl font-marcellus">
                  Loyihalar
                </p>
                <p className="text-white lg:text-xl font-marcellus">Aloqa</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white lg:text-4xl font-marcellus">Aloqa</h1>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl font-marcellus">
                    Manzil:
                  </h2>
                  <p className="text-white lg:text-2xl font-marcellus">
                    Xorazm viloyati, Urganch tumani, Gaybu qishlogi
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl font-marcellus">
                    Telefon:
                  </h2>
                  <div>
                    <p className="text-white lg:text-2xl font-marcellus">
                      +998 99 999 99 99
                    </p>
                    <p className="text-white lg:text-2xl font-marcellus">
                      +998 99 999 99 99
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl font-marcellus">
                    E-mail:
                  </h2>
                  <p className="text-white lg:text-2xl font-marcellus">
                    buyurtma@bunyodhouse.uz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-black w-full h-[80px] flex flex-col items-center justify-center">
        <p className="text-white text-xs">
          © 2022 Bunyod House. Barcha huquqlar himoyalangan.
        </p>
        <p className="text-white text-xs mt-2">Developed by Myakl</p>
      </div>
    </footer>
  );
}

export default Footer;
