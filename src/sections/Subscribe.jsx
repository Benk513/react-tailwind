import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 " id="contact-us">
    
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from <span className="text-coral-red">Updates</span>& Newsletter</h3>
    
      <div>
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div>
          <Button label="Sign Up" fullwidth/> 
        </div>
      </div>
    </section>
  )
}

export default Subscribe