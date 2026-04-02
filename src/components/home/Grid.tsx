import React from "react";

export default function Grid() {
  const cards = [
    {
      img: "/phoneIcon.svg",
      title: "Unlimited Calls & Sms",
      desc: "Phonico wants you to stay connected with your loved ones all the time with no limits on Calls and Sms.",
      bg: "bg-muted",
    },
    {
      img: "/moneyBag.svg",
      title: "Variety of Data Plans",
      desc: "Multiple travel eSIM Data plans packages, tailored to your needs so you can stay connected.",
      bg: "bg-muted",
    },
    {
      img: "/speaker.svg",
      title: "Easy Activation Process",
      desc: "Phonico eSIM activation is so easy that anyone can do it. Just Scan the QR code or Activate it from the Phonico eSIM App.",
      bg: "bg-muted",
    },
    {
      img: "/globe.svg",
      title: "WirelessSecure Network",
      desc: "Phonico understands your data privacy. We have applied the highest standard of security protocols to avoid any cyber threat.",
      bg: "bg-muted",
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-16 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-6 rounded-lg shadow-sm flex flex-col items-start`}
          >
          
            <img className="w-12 h-12 mb-4" src={card.img} alt="" />

       
            <h2 className=" font-medium text-lg sm:text-xl mb-2">
              {card.title}
            </h2>

        
            <p className="text-sm sm:text-base text-ring">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
