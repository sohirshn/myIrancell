import Style from './search.module.css';
import searchIcon from '../../assets/img/Search.png'

function Search(props) {
    const {type, placeholder, className} = props;
    return (
        <div className={Style.search}>
            <input type={type} placeholder={placeholder} className={Style[className]}/>
            <img src={searchIcon} className={Style.search__icon}/>
        </div>
    )
}

export default Search;