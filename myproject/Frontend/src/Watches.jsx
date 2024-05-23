import DashboardNavbar from "./DashboardNavbar";
import watch from "./images/watch.jpg";
import Footer from "./Footer";
function Watches(){
    return(
        <>
         <div className="bg-body-tertiary" style={{height:820}}>
            <DashboardNavbar/>
           <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Watch by Titan</h1>
            <div className="container">
                <img style={{marginLeft:350,height:400,width:400}} src={watch}></img>
                <p style={{marginTop:30}}> Titan offers a diverse range of styles to suit various tastes and occasions. From classic analog designs to modern digital watches, each timepiece reflects the brand's commitment to craftsmanship and innovation. Limited-edition collections, often created in collaboration with renowned designers, add an element of exclusivity to the brand's offerings.<br/>

With their affordability and accessibility, Titan watches have garnered a loyal customer base. They have become synonymous with trust and reliability, cementing their status as a household name in the watch industry.<br/>

Overall, Titan watches embody a perfect balance of style, functionality, and value, making them a popular choice for consumers seeking quality timepieces at accessible price points.<br/>



</p>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Watches;