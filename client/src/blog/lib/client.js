import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "1cvpn7ng",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: true,
});
