import DashboardNavbar from "./DashboardNavbar";
import jean from "./images/jean.jpg"
function Jeans(){
    return(
        <>
         <div className="bg-body-tertiary" style={{height:820}}>
         <DashboardNavbar/>
           <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Jeans by Levi's</h1>
            <div className="container">
                <img style={{marginLeft:350,height:400,width:400}} src={jean}></img>
                <p style={{marginTop:30}}>Levi's jeans are iconic denim trousers known for their durability, comfort, and timeless style. Founded by Levi Strauss in 1853, the brand has become synonymous with denim culture worldwide. Originally designed as durable workwear for miners and laborers during the California Gold Rush, Levi's jeans have evolved into a staple fashion item worn by people of all ages and backgrounds.<br/>

Key features of Levi's jeans include their sturdy denim fabric, classic five-pocket design, rivet reinforcements, and signature stitching details such as the arcuate stitching on the back pockets. Over the years, the brand has introduced various fits and styles to cater to different preferences and trends, including the classic 501, slim-fit 511, and skinny 710.<br/>

Levi's jeans have also become associated with cultural movements, from rebellious youth in the 1950s to the countercultural movements of the 1960s and 70s. Today, Levi's continues to innovate while staying true to its heritage, offering a wide range of washes, finishes, and collaborations to suit modern tastes.</p>
            </div>
            </div>
        </>
    )
}
export default Jeans;