import '../styles/banner.css'
import logo from '../assets/bannerimage.webp'



function Banner() {
  const title = "le site des jv faits !";
    return (
      <div className="testingsite">
        <img src= {logo} alt='ici on parlotte!' className='testingsiteimage' />
        <h1 className="testingsite">{title}</h1>
      </div>
    )
  }

  export default Banner