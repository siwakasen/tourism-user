export interface ListDriverResI {
  data: Driver[];
}

export interface Driver {
  id: string;
  name: string;
  photo_profile: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
