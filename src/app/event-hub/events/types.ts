interface Data {
  scheduled_dates: string[];
  timezone: string;
  location_long: number;
  location_lat: number;
}

export interface Event {
  id: string;
  name: string;
  slug: string;
  status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  data: Data;
}
