import React from 'react'
import HeaderBanner from '../../components/HeaderBanner'
import MaxWidthContainer from '../../components/MaxWidthContainer/MaxWidthContainer'
import ContactForm from './Components/ContactFrom'
import ContactInfo from './Components/ContactInfo'

const ContactPage = () => {

     const onSubmit = () => {
          console.log("form submited function call");
          // here you write form submition details
     }
     return (
          <div>
               <HeaderBanner
                    title="Get In Touch"
                    subtitle="Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals."
                    backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80"
               />
               <MaxWidthContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 my-12">
                         <ContactInfo />
                         <ContactForm />
                    </div>
               </MaxWidthContainer>
          </div>
     )
}

export default ContactPage
