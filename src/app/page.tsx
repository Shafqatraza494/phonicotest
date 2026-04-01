import Carousal from "@/components/comons/Carousal";
import Coverage from "@/components/comons/Coverage";
import Faq from "@/components/comons/Faq";
import Interdoucing from "@/components/comons/Interdoucing";
import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";

import Packages from "@/components/comons/Packages";
import WhyChose from "@/components/home/WhyChose";
import { getGuestPlans } from "@/lib/services/packages/plan.services";
import { generateSlug } from "@/lib/slug";

import React from "react";
import { Plan } from "@/lib/types/plan.types";

export default async function page() {
  const data = await getGuestPlans();
  const packagesWithSlug = data?.map((pkg: Plan) => ({
    ...pkg,
    slug: generateSlug(pkg.name),
  }));

  return (
    <>
      <Hero />
      <Grid />

      <Packages data={packagesWithSlug} />

      <Coverage bool={true} />
      <WhyChose
        head={"Why Choose"}
        headspan={"PHONICO"}
        headtwo={"eSIM?"}
        para={
          "When you are in the United States, there should be no complications, especially with connectivity. Phonico makes it simple with affordable USA eSIM plans built for travellers, remote workers, and locals who want fast, reliable mobile data without the extra hassle.From Alaska to Hawaii or California to Maine, you’ll get strong nationwide coverage with instant activation, and clear voice quality powered by trusted U.S. carrier networks. No contracts & no hidden charges. Just seamless connectivity wherever you go. Phonico keeps you online with flexible data, call, and text plans that fit the way you travel and live. Choose Phonico to stay connected in the USA effortlessly."
        }
        img={"/benefit.webp"}
      />
      <Interdoucing
        head={"Introducing a World of Connectivity with the"}
        headspan={"Phonico"}
        headtwo={"eSIM App"}
        img={"/mobileImg.webp"}
        para={
          "Download our eSIM App for monitoring your real-time data usage. You can also use this app to activate your eSIM, manage profiles, and get updates on new features and promotions. You can find this app on the Play Store and Apple Store!"
        }
      />
      <Carousal />
      <Faq />
    </>
  );
}
