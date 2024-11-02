import { Link } from 'react-router-dom';
import './index.scss';


export default function NotFound() {

    return (
        <Link  to='/'>
        <div className='page-not-found'>
   
            <div className='not'>
                <h1 className='titulo'>Error 404</h1>
            <img className='icone-not-found' src='/assets/images/errorimg.jpg' alt=''/>
            </div>

        </div>
        </Link>
    )
}