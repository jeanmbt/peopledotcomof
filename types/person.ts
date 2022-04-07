export interface IPerson {
  id: number | undefined;
  name: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  email: string | undefined;
  specialties: [{ id: number | undefined; name: string | undefined } | undefined];
  street: string | undefined;
  streetNumber: string | undefined;
  zip: string | undefined;
  posts: [{ id: number | undefined; title: string | undefined } | undefined];
  city: string | undefined;
}