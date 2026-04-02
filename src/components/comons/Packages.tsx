import Link from "next/link";
import { generateSlug } from "@/lib/slug";

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

function Packages({ data }: { data: Plan[] }) {
  return (
    <div className="py-10 px-3">
      <div className="bg-[url('/wavyBlob.svg')] bg-cover bg-center">
        <h1 className="text-center font-light text-[50px]">
          Buy the Best eSIM Prepaid Plans Meeting All Your{" "}
          <span className="text-(--btn-pink)">Expectations!</span>
        </h1>

      
        <div className="flex flex-wrap justify-center gap-5 mt-10  mx-auto">
          {data?.map((item: Plan) => (
            <div
              key={item.id}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] rounded-2xl bg-card shadow-xl "
            >
          
              <h2 className="text-center text-2xl font-bold py-4">
                {item.data_usable}
                {item.unit}
              </h2>

        
              <div className="bg-chart-2/70 text-center py-4">
                <p className="text-2xl font-bold text-card-foreground">
                  ${item.price}/month
                </p>
                <p className="text-sm text-card-foreground mt-1">
                  {item.data_usable}
                  {item.unit} Data and Unlimited Talk & Text
                </p>
              </div>

          
              <div className="p-5">
                <h3 className="text-center font-semibold mb-2">
                  Business Boost Plan
                </h3>

                <p className="text-sm text-ring text-center mb-4">
                  Rushing to an International Conference for New Business
                  Ventures? Enjoy Hi-Speed Connectivity.
                </p>

          
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    ✔ High-speed internet
                  </li>
                  <li className="flex items-center gap-2">
                    ✔ Unlimited talk & text
                  </li>
                  <li className="flex items-center gap-2">
                    ✔ High-quality video streaming
                  </li>
                  <li className="flex items-center gap-2">✔ No hidden fees</li>
                  <li className="flex items-center gap-2">
                    ✔ No contract (cancel anytime)
                  </li>
                </ul>

             
                <Link href={`/plans/${item.slug ?? generateSlug(item.name)}`}>
                  <button className=" cursor-pointer mt-6 w-full bg-(--btn-pink) text-background py-3 rounded-xl font-semibold  transition">
                    View Plan
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;
