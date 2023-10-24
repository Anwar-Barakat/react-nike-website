import ReviewCart from "../components/Reviewcart";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our
        <spn className="text-coral-red"> Customers </spn>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center leading-normal">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-1">
        {reviews.map((review, index) => (
          <ReviewCart key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
