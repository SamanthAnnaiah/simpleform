import { useEffect, useState } from "react"

export function TextAreaItem({ classes, itype = " ", stuff = " ", istate = {}, setistate = {} }) {
    let [mitype, setmitype] = useState(" ");

    useEffect(() => {
        setmitype(itype === "rbutton" ? "radio" : "text");
    }, [itype])

    return (
        <div>
            <textarea className={classes} type={mitype} name="" id="" rows="4" cols="50" value={istate}
                onChange={(e) => {
                    if (mitype === "checkbox") {
                        setistate(e.target.checked)
                    }
                    else {
                        setistate(e.target.value)
                    }
                }} />
            <span className="kkr pl10">{mitype === " " ? "" : stuff}</span>
        </div>
    )
}