import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
    const { title} = props
    return (
        <article className="header">
            <div className="container p-2 d-flex flex-column">
                <h1 className="article-header--title text-uppercase">{title}</h1>
            </div>
        </article>    
    );
}
 
export default Header;