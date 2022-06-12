import style from  './sidebar.module.css'
import UserInfo from "../userInfo";
import ChargeSIM from "../chargeSIM";
function Sidebar() {
    return (
        <div className={style.con__sidebar}>
            <UserInfo/>
            <div className={style.services}>
                <ChargeSIM/>
            </div>
        </div>
    );
}
export default Sidebar;