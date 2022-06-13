import style from './userInfo.module.css';
import profile from '../../assets/img/profile.png'

function UserInfo(props) {
    const {theme , imgprofile , userName , userNumber} = props;
    return (
        <div className={style[theme]}>

            <img src={imgprofile}/>
            <div className={style.content__info}>
                <p>سلام {userName}</p>
                <span>{userNumber}</span>
            </div>
        </div>
    );
}

export default UserInfo;