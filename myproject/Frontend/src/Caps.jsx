import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
import cap from "./images/cap.jpg"
function Caps(){
    return(
        <>
         <div className="bg-body-tertiary" style={{height:820}}>
        <DashboardNavbar/>
           <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Cap by Reebok</h1>
            <div className="container">
                <img style={{marginLeft:350,height:400,width:400}} src={cap}></img>
                <p style={{marginTop:30}}> Reebok caps in the 2000s encapsulated the brand's fusion of sporty functionality and urban style. Crafted from lightweight, breathable materials, they provided comfort and performance during workouts or casual wear. Adjustable closures ensured a snug fit for wearers of all sizes. These caps often featured moisture-wicking fabrics and ventilation panels, enhancing breathability and keeping the head cool and dry during intense activities. Reflecting Reebok's athletic heritage, caps typically showcased the brand's logo prominently, adding a touch of sporty flair to any ensemble. With a variety of styles available, from classic baseball caps to snapbacks, Reebok caps were versatile accessories suitable for various occasions. Whether hitting the gym or running errands, wearers could count on Reebok caps to offer both functionality and urban style, making them a popular choice among athletes, fitness enthusiasts, and streetwear aficionados alike.</p>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Caps;