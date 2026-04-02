import Grid from "@/components/home/Grid";
import Packages from "@/components/comons/Packages";
import { getGuestPlans } from "@/lib/services/packages/plan.services";
import { Plan } from "./[slug]/page";
import { generateSlug } from "@/lib/slug";
import Carousal from "@/components/comons/Carousal";
import Coverage from "@/components/comons/Coverage";
import Faq from "@/components/comons/Faq";
import Interdoucing from "@/components/comons/Interdoucing";
import WhyChose from "@/components/home/WhyChose";

async function page() {
  const data = await getGuestPlans();
  const packagesWithSlug: Plan[] =
    data?.map((pkg: Plan) => ({
      ...pkg,
      slug: generateSlug(pkg.name),
    })) ?? [];
  return (
    <div className="container">
      <Packages data={packagesWithSlug} />
      <Grid />
      <Coverage bool={false} />
      <WhyChose
        head={"Frustrated by Unexpected Data"}
        headspan={"Overage"}
        headtwo={"Charges?"}
        para={
          "Our plans are designed to meet all your needs and offer the right amount of data for your usage. If your data runs out, Phonico will not charge you a cent. You will stay connected to the carrier network, as you get unlimited calls and texts on every eSIM phone plan."
        }
        img={"/benefitsImg2.webp"}
      />
      <Interdoucing
        head={"Download the"}
        headspan={"Phonico"}
        headtwo={"App To Take Full Control!"}
        img={"/mobileImg2.webp"}
        para={
          "Manage your plan, check your data balance, and top up on the go, all in one app with your personal dashboard. Phonico runs on leading 4G and 5G networks across all 50 states.Available for both Android and iOS."
        }
      />
      <Carousal />
      <Faq />
    </div>
  );
}

export default page;
