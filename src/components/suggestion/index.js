import style from './suggestion.module.css'
import Table from "../table";

function Suggestion() {
    return (
        <div className={style.con__Suggestion}>
            <h2>بسته های پیشنهادی مخصوص خود شما!</h2>
            <Table theme={'table'}/>
        </div>
    );
}

export default Suggestion;