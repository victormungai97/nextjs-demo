import { Metadata } from "next";

// Shape of User Details
interface UserDetailsProps {
  id: string;
}

// Shape of page params that are accessible only through NextJS page
interface UserDetailsPageParams {
  params: Promise<UserDetailsProps>;
}

export const generateMetadata = async ({
  params,
}: UserDetailsPageParams): Promise<Metadata> => {
  const { id } = await params;

  return {
    title: `User ${id} | NextJS Demo`,
    description: "This page shows an individual user's details",
    openGraph: {
      type: "profile",
      title: `User ${id} | NextJS Demo`,
      description: "This page shows an individual user's details",
    },
    twitter: {
      title: `User ${id} | NextJS Demo`,
      description: "This page shows an individual user's details",
    },
  };
};

const UserDetails = async ({ params }: UserDetailsPageParams) => {
  const { id } = await params;

  return (
    <>
      <h1>Showing details for user #{id}</h1>
    </>
  );
};

export default UserDetails;
