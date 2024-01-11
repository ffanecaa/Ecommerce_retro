import { Link } from '@mui/material'
import './categories.css'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories_col">
            <div className="categories_row">
                <img className='img_row' src='/apple1.jpg' alt="" />
                <button className="categories_button">
                    <Link className='link'>onde</Link>
                </button>
            </div>
           <div className="categories_row">
             <img className="img_row" src='/consola.jpg' alt="" />
                <button className="categories_button">
                    <Link className='link'>onde</Link>
                </button>
            </div>
        </div>
        <div className="categories_col">
          <div className="categories_row">
             <img className="img_row" src='/consola.jpg' alt="" />
                <button className="categories_button">
                    <Link  className='link'>onde</Link>
                </button>
          </div>
        </div>
        <div className="categories_col categories_col-l">
          <div className="categories_row">
              <div className="categories_col">
                  <div className="categories_row">   
                    <img className='img_row' src='/apple1.jpg' alt="" />
                    <button className="categories_button">
                       <Link className='link'>onde</Link>
                    </button>
                 </div>
               </div>
          <div className="categories_col">
              <div className="categories_row">
                <img className="img_row" src='/consola.jpg' alt="" />
                  <button className="categories_button">
                    <Link className='link'>o que</Link>
                  </button>
             </div>
        </div>
      
      </div>
       
            <div className="categories_row">  
             <img className='img_row' src='/apple1.jpg' alt="" />
                <button className="categories_button">
                    <Link></Link>
                </button>
                </div>
        </div>
     
    </div>
  )
}

export default Categories