import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="max-container flex flex-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special </span>{" "}
          <span> Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, unde
          temporibus! Perferendis tenetur doloribus nemo porro odio nam minima
          fuga at?
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Eaque nemo et nobis reiciendis distinctio a, rerum animi
          sequi.Perferendis tenetur doloribus nemo porro odio nam minima fuga
          at?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
