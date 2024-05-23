import { SocialIcon } from 'react-social-icons'
function Footer(){
    return(
        <>
        <footer className="bg-body-tertiary text-center text-lg-start">
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:Shopify
    <SocialIcon style={{marginLeft:5}} url="https://twitter.com" />
    <SocialIcon style={{marginLeft:5}} url="https://facebook.com" />
    <SocialIcon style={{marginLeft:5}} url="https://instagram.com" />
  </div>
</footer>
        </>
    )
}
export default Footer;