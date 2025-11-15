// Shape of User Details
interface UserDetailsProps {
  id: string;
}

// Shape of page params that are accessible only through NextJS page
interface UserDetailsPageParams {
  params: Promise<UserDetailsProps>;
}

const UserDetails = async ({ params }: UserDetailsPageParams) => {
  const { id } = await params;

  return (
    <>
      <h1>Showing details for user #{id}</h1>
    </>
  );
};

export default UserDetails;
