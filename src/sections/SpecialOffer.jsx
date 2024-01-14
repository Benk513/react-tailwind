import { arrowRight } from '../assets/icons'
import offer from '../assets/images/offer.svg'
import Button from '../components/Button'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
          
      <div className="flex-1">
        <img src={offer} width={500} height={400} alt="offer special for nike" className="object-contain w-full" />
      </div>


      <div>
      <div>
      <h2
          className="mt-10 font-palanquin  font-bold text-4xl capitalize" >
          <span
            className="text-coral-red inline-block pr-4 ">Special</span>
          <span
            className=" xl:whitespace-nowrap relative z-10 ">
            Offer</span>
          </h2>
        
        <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals , qualiy comfort, and innovation for your active lifequaliy comfort, and innod innovation for your active lifequaliy comfort, and innovvation for your active life..</p>
          <p className="mt-6 lg:max-w-lg mb-4 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          
          <div className='flex justify-start gap-4'>
        <Button label="Shop Now" iconURL={arrowRight}  />
            <Button
              label="Learn More"
              backgroundColor="bg-trajsparent"
              borderColor="border-slate-gray"
              textColor = "text-slate-gray"
            />

          </div>
      </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer