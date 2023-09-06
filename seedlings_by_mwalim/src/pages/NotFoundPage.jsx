import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex w-full h-[70vh] justify-center items-center pt-[3rem]">
      <div className="flex flex-col space-y-[2.5rem] items-start ">
        <div className="flex flex-col space-y-[0.75rem] h-full">
          <h1 className="text-[2rem] font-semiBolded">404 Page Not Found</h1>
          <p className="text-textColor">
            This is not the page you were looking for
          </p>
        </div>
        <Link
          to="/"
          className="px-[1.5rem] py-[0.75rem] bg-ctaColor rounded-lg text-bodyColor hover:bg-titleColor"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
