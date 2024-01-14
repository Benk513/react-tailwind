// import {PopularProducts , Hero} from './sections/index.js'
import Hero from './sections/Hero.jsx'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './components/Nav.jsx'

const App = () => {
  return (
    
    <main className="relative ">
     <Nav/>
      <section className="xl:padding-l  padding-b" >
        <Hero/>
      </section>

      <section className="padding  ">
        <PopularProducts/>
      </section>
      
      <section className="padding ">
       <SuperQuality/> 
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding bg-pale-blue">
        <SpecialOffer/>
      </section>
      <section className="padding">
       <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
   )
  
}

export default App