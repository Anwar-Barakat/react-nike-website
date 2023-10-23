import { shoe8 } from "../assets/images";
import { Button } from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you
          <br />
          <span className="text-coral-red inline-block mt-3">Super </span>{" "}
          <span className="text-coral-red inline-block mt-3"> Quality</span>
          <span> Shoes</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, unde
          temporibus! Perferendis tenetur doloribus nemo porro odio nam minima
          fuga at?
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Eaque nemo et nobis reiciendis distinctio a, rerum animi sequi.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
