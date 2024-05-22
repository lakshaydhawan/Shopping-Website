import DashboardNavbar from "./DashboardNavbar";
import tshirt from "./images/tshirt.jpg"
function Tshirts(){
    return(
        <>
         <div className="bg-body-tertiary" style={{height:800}}>
            <DashboardNavbar/>
           <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Tshirt by Wrangler</h1>
            <div className="container">
                <img style={{marginLeft:350,height:400,width:400}} src={tshirt}></img>
                <p style={{marginTop:30}}>Wrangler's t-shirts embody the brand's rugged, Western-inspired heritage while delivering on comfort and style. Crafted from high-quality materials like cotton, they offer durability that stands up to everyday wear and tear. The classic designs, often featuring graphic prints or iconic logos, evoke a sense of Americana and adventure. Versatile enough for any occasion, Wrangler t-shirts can be dressed up or down with ease, making them a wardrobe staple for those who appreciate both style and functionality. With their attention to detail and commitment to quality, Wrangler t-shirts are a timeless addition to any wardrobe, perfect for embracing the spirit of the open road and the great outdoors.</p>
            </div>
            </div>
        </>
    )
}
export default Tshirts;