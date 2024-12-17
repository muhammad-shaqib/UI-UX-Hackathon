import Image from "next/image";

export default function ProductCard() {
  // Array of image paths directly from the public folder
  const productImages = [
    "/product1.png",
    "/product2.png",
    "/product3.png",
    "/product4.png",
    "/product5.png",
    "/product6.png",
    "/product7.png",
    "/product8.png",
  ];

  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {productImages.map((imagePath, index) => (
            <div key={index} className="w-[238px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <Image
                    src={imagePath}
                    alt={`product${index + 1}`}
                    width={239} // Explicit width
                    height={427} // Explicit height
                  />
                </div>
                {/* Card Text Section */}
                <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
                  <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                    Graphic Design
                  </h5>
                  <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                    English Department
                  </p>
                  <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                    <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="w-[82.2px] h-[16px] flex justify-center">
                    <Image
                      src="/product-colors.png" // Ensure colours.png exists in the public folder
                      alt="colours"
                      width={82}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
