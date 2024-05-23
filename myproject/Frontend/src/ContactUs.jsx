import Navba from "./Navba";
import Footer from "./Footer";
function ContactUs(){
    return(
        <>
        <div className="bg-body-tertiary" style={{height:702}}>
            <Navba/>
         <div className="container">
          <h1 style={{fontFamily: "Times New Roman"}} className="mt-5">Contact Us</h1>
          <p>
          Have questions, concerns, or just want to say hello? We'd love to hear from you! Here's how you can reach us:<br/>

Customer Support:<br/>

Our dedicated customer support team is available to assist you with any inquiries or issues you may have. Whether you need help with placing an order, tracking your package, or navigating our website, we're here to help!<br/>

Email: Shopify@gmail.com<br/>

Phone: +91 (123) 456-7890<br/>

Hours of Operation:<br/>
Monday - Friday: 9:00 AM - 6:00 PM (EST)<br/>

Live Chat:<br/>
Chat live with one of our representatives during business hours for real-time assistance.<br/>

Social Media:<br/>
Connect with us on social media for updates, promotions, and more!<br/>

Facebook: facebook.com/Shopify<br/>
Twitter: twitter.com/Shopify<br/>
Instagram: instagram.com/Shopify<br/>
Corporate Headquarters:<br/><br/>

Shopify Inc.<br/><br/>

123 Main Street, Suite 101<br/>
Amritsar, Punjab, 143001<br/>
India


          </p>
         </div>
        </div>
        <Footer/>
        </>
    )
}
export default ContactUs;