import ContactHero from "./partials/ContactHero"
import ContactForm from "./partials/Form"


const ContactUs = () => {
  return (
    <div>
        <div  className="relative mb-20">
        <ContactHero/>
        <div className="absolute z-50 top-36 left-[750px]">
        <ContactForm/>
        </div>
        </div>
        
    </div>
  )
}

export default ContactUs