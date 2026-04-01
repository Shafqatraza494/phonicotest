import AddToCart from "@/components/plans/AddToCart";
import { getGuestPlans } from "@/lib/services/packages/plan.services";
import { generateSlug } from "@/lib/slug";

type PageProps = {
  params: {
    slug: string;
  };
};
export interface Plan {
  id: string;
  name: string;
  code: string;
  price: number;
  status: number;
  slug?: string;
  expiry_type: "MONTHLY" | string;
  validity_in_days: number;
  bill_type: "PREPAID" | string;
  data_usable: number;
  minutes_usable: number;
  sms_usable: number;
  created_at: string;
  updated_at: string;
  auto_renew: number;
  billing_code_id: number;
  base_price: string;
  unit: string;
}

export default async function PlanSection({ params }: PageProps) {
  const { slug } =await params;

  const data = await getGuestPlans();

  const packagesWithSlug: Plan[] =
    data?.map((pkg: Plan) => ({
      ...pkg,
      slug: generateSlug(pkg.name),
    })) ?? [];

  const planFromSlug: Plan[] = packagesWithSlug.filter(
    (pkg: Plan) => pkg.slug === slug,
  );

  if (planFromSlug.length < 1) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-8xl">Plan Not Found</h1>
      </div>
    );
  }

  return <AddToCart planFromSlug={planFromSlug} />;
}
