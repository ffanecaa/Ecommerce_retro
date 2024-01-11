import Categories from '../../componets/categorias/Categories'
import Contact from '../../componets/contact/Contact'
import Featured from '../../componets/festuredProducts/Featured'
import  Slider  from '../../componets/slider/Slider'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <Featured type="featured"/>
        {/* estatica */}
        <Categories/>  
        <Featured type="trending"/>

    </div>
  )
}

export default Home