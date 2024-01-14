import { reviews } from "../constant"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers </span>Say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis ducimus vero officiis incidunt accusamus aperiam, tempore eius eum a.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">{reviews.map((reviews) => (
        <ReviewCard key={reviews.customerName}
          imgURL={reviews.imgURL}
          customerName={reviews.customerName}
          rating={reviews.rating}
          feedback={reviews.feedback}
        />
      ))} </div>
    </section>
  )
}

export default CustomerReviews