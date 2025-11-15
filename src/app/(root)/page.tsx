import { Hello } from "@/components/Hello";

const Home = () => {
  console.log("What type of a component am I?");

  return (
    <>
      <div className="text-5xl underline">Welcome to Next.js!</div>
      <Hello />
    </>
  );
};

export default Home;
