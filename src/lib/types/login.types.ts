export interface User {
  id: string;
  name: string;
  email: string;
  number: string | null;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  stripe_id: string;
  pm_type: string | null;
  pm_last_four: string | null;
  trial_ends_at: string | null;
  source: string | null;
  image_url: string | null;
  deleted_at: string | null;
  status: string;
  balance: number; // ← was string, actual value is number
}

export type LoginResponseType = {
  status: boolean; // ← was string, actual value is boolean
  access_token: string;
  token_type: string;
  device_token: string | null;
  user: User; // ← was User[], now single object
  customer_stripe_id: string;
  customer_stripe_blocked: boolean; // ← was string, actual value is boolean
};
