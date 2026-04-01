export interface category {
  id: string;
  name: string;
  parent?: null;
  created_at: string;
  updated_at: string;
  slug: string;
}

export type CategoryResponseTypes = {
  status: boolean;
  data: category[];
};
