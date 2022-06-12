import style from  './sidebar.module.css'
import UserInfo from "../userInfo";
import ChargeSIM from "../chargeSIM";
import ActiveService from "../activeService";
function Sidebar() {
    return (
        <div className={style.con__sidebar}>
            <UserInfo/>
            <div className={style.services}>
                <ChargeSIM/>
                <div className={style.ActiveServices}>
                    <ActiveService/>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;