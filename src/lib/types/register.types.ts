export interface Pivot {
  model_type: string;
  model_id: string;
  role_id: string;
}

export interface Roles {
  id: string;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

export interface User {
  name: string;
  email: string;
  email_verified_at: string;
  id: string;
  updated_at: string;
  created_at: string;
  stripe_id: string;
  roles: Roles;
}

export type RegisterResponseType = {
  status: string;
  message: string;
  access_token: string;
  token_type: string;
  user: User;
  balance: number;
  image_url: null | string;
};
