import Button from "../components/Button"
import shoe8 from '../assets/images/shoe8.svg'
const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container ">
    
      <div>
      <h2
          className="mt-10 font-palanquin  font-bold text-4xl capitalize" >
          
          <span
            className=" xl:bg-white xl:whitespace-nowrap relative z-10 ">
            We Provide You </span>
          <span
            className="text-coral-red inline-block ">Super</span><br />
          <span className="text-coral-red inline-block ">Quality</span> Shoes

        </h2>
        
        <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals , qualiy comfort, and innovation for your active lifequaliy comfort, and innovation for your active life..</p>
        <p className="mt-6 lg:max-w-lg mb-4 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label="View Details"  />
      </div>


      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-containt"
        />
      </div>
    </section>
  )
}

export default SuperQuality