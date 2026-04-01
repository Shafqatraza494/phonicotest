import React from "react";

const cardsData = [
  {
    id: 1,
    tittle: "Choose Your Plan",
    description: "Select the best eSIM plan that meets your needs.",
  },
  {
    id: 2,
    tittle: "Buy Your eSIM Online",
    description:
      "You can buy your eSIM online, and it’s ready to use in minutes.",
  },
  {
    id: 3,
    tittle: "Active Instantly",
    description:
      "There is no wait, and there is no paperwork. Just click buy now, and you will receive a QR code in your e-mail for activation.",
  },
];
function Coverage({ bool }: any) {
  return (
    <>
      <div className="py-5 md:px-15 px-3 ">
        <div className="h-70 w-full bg-[#e718481c] rounded-[30px] flex justify-center items-center font-medium text-[20px] md:text-[50px]  ">
          <h1 className=" text-center   ">
            Full Coverage With the Best Prepaid <br />
            <span className="text-(--btn-pink)">USA </span>eSIM Plans
          </h1>
        </div>
        {bool && (
          <div className="mt-10 font-medium md:text-[50px]  text-[20px] ">
            <h1>
              You can get your{" "}
              <span className="text-(--btn-pink)">Phonico</span> <br />
              eSIM in 3 easy steps!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-center my-20">
              {cardsData.map((card) => (
                <div key={card.id}>
                  <h1 className="text-[30px]">
                    {card.id}.{card.tittle}
                  </h1>
                  <p className="text-[20px] w-80 text-gray-500">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Coverage;
