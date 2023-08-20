import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Что говорят наши
        <span className='text-coral-red'> Покупатели </span>
        ?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Послушайте подлинные истории наших довольных клиентов об их исключительном опыте покупок в нашем магазине.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
