import './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
  return (
    <div className='contact'>
       
        <h2>Contacto</h2>
        
        <div className="contact_mail">
            <input type="text" name="" id="" placeholder='escribe tu mail' />
            <button className="contact_botton">
                enviar
            </button>
        </div>

        <div className="contact_icons">
            <FacebookIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
            <EmailIcon/>
            <InstagramIcon/>

       </div>






    </div>
  )
}

export default Contact