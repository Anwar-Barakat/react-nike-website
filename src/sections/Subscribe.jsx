import { Button } from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-10 lg:max-w-md font-palanquin font-bold">
        <span>Sign up form </span>
        <span className="text-coral-red"> Updates </span>
        <span> & </span>
        <span> Newsletter </span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input" placeholder="Subscribe Now" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
