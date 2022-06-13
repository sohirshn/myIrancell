import style from  './sidebar.module.css'
import UserInfo from "../userInfo";
import ChargeSIM from "../chargeSIM";
import ActiveService from "../activeService";
import FollowLink from "../followLink";
import profile from  '../../assets/img/profile.png'
function Sidebar() {
    return (
        <div className={style.con__sidebar}>
            <UserInfo theme={'con__UserInfo'} imgprofile={profile} userName={'حسین احمد پناه'} userNumber={'+98 012367548'}/>
            <div className={style.services}>
                <ChargeSIM/>
                <div className={style.ActiveServices}>
                    <ActiveService/>
                </div>
                <FollowLink/>
            </div>
        </div>
    );
}
export default Sidebar;