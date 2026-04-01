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

export type PlansResponseType = {
  status: boolean;
  data: Plan[];
};
