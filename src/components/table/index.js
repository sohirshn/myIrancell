import style from "./table.module.css";
import Buttons from "../button";

function Table(props) {
    const {theme} = props;
    const th = [
        {name: "تاریخ انقضا بسته"},
        {name: "نام بسته"},
        {name: "تخفیف"},
        {name: "قیمت"},
    ]
    const td =[
        {date: "14 شهریور 1401" , name :"بسته اینترنت سه‌ماهه" , takhfif:"20 %"},
        {date: "14 شهریور 1401" , name :"بسته اینترنت سه‌ماهه" , takhfif:"20 %"},
        {date: "14 شهریور 1401" , name :"بسته اینترنت سه‌ماهه" , takhfif:"20 %"},

    ];
    return (
        <table className={style[theme]}>
            <thead>
            <tr>
                {
                    th.map((value, key) => {
                        return (
                            <th>{value.name}</th>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                td.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td>{value.date}</td>
                            <td>{value.name}</td>
                            <td>{value.takhfif}</td>
                            <td><Buttons content={'خرید'} theme={'yellow'}/></td>
                        </tr>

                    )
                })
            }
            </tbody>
        </table>
    );
}

export default Table;