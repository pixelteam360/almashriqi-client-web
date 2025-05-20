import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full my-20 justify-center items-center gap-5">
      <h2 className="text-primary text-2xl font-semibold">
        Payment SuccessFull
      </h2>
      <Link href={"/"}>
        <button className="bg-primary px-5 py-3 text-white text-lg rounded-xl">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default page;
