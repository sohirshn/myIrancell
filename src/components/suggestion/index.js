import style from './suggestion.module.css'

function Suggestion() {
    return (
        <div className={style.con__Suggestion}>
            <h2>بسته های پیشنهادی مخصوص خود شما!</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>تاریخ انقضا بسته</th>
                    <th>نام بسته</th>
                    <th>تخفیف</th>
                    <th>قیمت</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>14 شهریور 1401</td>
                    <td>بسته اینترنت سه‌ماهه</td>
                    <td>20 %</td>
                    <td>
                        <button className={style.btn}>خرید</button>
                    </td>
                </tr>
                <tr>
                    <td>12 خرداد 1401</td>
                    <td>بسته ترکیبی هفته‌ای</td>
                    <td>45%</td>
                    <td>
                        <button className={style.btn}>خرید</button>
                    </td>
                </tr>
                <tr>
                    <td>15 تیر 1401</td>
                    <td>بسته اینترنت یکماهه</td>
                    <td>15%a</td>
                    <td>
                        <button className={style.btn}>خرید</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Suggestion;