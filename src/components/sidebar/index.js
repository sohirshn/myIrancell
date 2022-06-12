import style from  './sidebar.module.css'
import UserInfo from "../userInfo";
import ChargeSIM from "../chargeSIM";
import ActiveService from "../activeService";
import FollowLink from "../followLink";
function Sidebar() {
    return (
        <div className={style.con__sidebar}>
            <UserInfo/>
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