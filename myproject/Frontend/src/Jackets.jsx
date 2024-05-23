import DashboardNavbar from "./DashboardNavbar";
import jacket from "./images/jacket.jpg"
import Footer from "./Footer";
function Jackets(){
    return(
        <>
         <div className="bg-body-tertiary" style={{height:820}}>
         <DashboardNavbar/>
           <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Jacket by Flying Machine</h1>
            <div className="container">
                <img style={{marginLeft:350,height:400,width:400}} src={jacket}></img>
                <p style={{marginTop:30}}> Flying Machine jackets offer a blend of contemporary style and functionality, catering to the fashion-forward individual seeking both warmth and trendiness. Known for their innovative designs and quality craftsmanship, Flying Machine jackets are a staple in the modern wardrobe.<br/>

Crafted with attention to detail and utilizing high-quality materials, Flying Machine jackets provide durability and comfort. From classic denim jackets to edgy biker styles, the brand offers a diverse range of designs to suit various tastes and occasions.<br/>

Flying Machine jackets often feature trendy elements such as distressed finishes, unique embellishments, and bold prints, appealing to the fashion-conscious consumer. Whether you're layering up for chilly weather or making a fashion statement, Flying Machine jackets effortlessly combine style with practicality.<br/>

With their affordable pricing and contemporary aesthetics, Flying Machine jackets have become popular among the youth and fashion enthusiasts alike. They represent a perfect fusion of style, quality, and affordability, making them a go-to choice for those looking to elevate their outerwear game.</p>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Jackets;