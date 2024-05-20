import { useEffect, useReducer, useState } from "react"

export function InputItem({ classes, itype = " ", stuff = " ", iname = " ",
    errorcheck, seterrorcheck, istate = {}, setistate = {}, patn = "" }) {
    let [mitype, setmitype] = useState(" ");
    let [rname, setrname] = useState(" ");

    let trs = {
        trs_res: false,
        trs_ele: " ",
        trs_echeck: false
    }
    let [rstate, rstatedispatch] = useReducer(rstatefunc, trs);

    useEffect(() => {
        setmitype(itype === "rbutton" ? "radio" : (itype === "rcheck" ? "checkbox" : "text"));
        setrname((iname) => iname);
    }, [itype])

    function rstatefunc(cstate, { res, ele, echeck }) {
        switch (ele) {
            case "General Enquiry":
                document.querySelector(".srequest").classList.remove("bgr")
                document.querySelector(".genquiry").classList.add("bgr")
                return ({ res, ele, echeck: false })
            case "Support Request":
                document.querySelector(".genquiry").classList.remove("bgr")
                document.querySelector(".srequest").classList.add("bgr")
                return ({ res, ele, echeck: false })
            case "error_check":
                seterrorcheck(res)
                return ({ res, ele, echeck: res })
            default:
                break;
        }
    }

    function Handleerrorcheck(e, patn) {
        if (mitype === "text") {
            let content = e.target.value.trim();
            let ptn1 = new RegExp(patn);
            console.log("matching_result:", ptn1.test(content));
            rstatedispatch({ res: !ptn1.test(content), ele: "error_check" })
        }
    }
    function Handleonfocus() {
        rstatedispatch({ res: false, ele: "error_check" })
    }

    return (
        <div /*className={rstate.echeck ? "bgr" : ""}*/>
            <input className={`${classes} ${(rstate.echeck ? "err" : "")}`} type={mitype} name={rname} id="" value={istate} pattern={patn}
                onBlur={(e) => Handleerrorcheck(e, patn)}
                onFocus={(e) => Handleonfocus()}
                onChange={(e) => {
                    if (mitype === "radio") {
                        setistate(e.target.nextElementSibling.textContent)
                        rstatedispatch({ res: true, ele: stuff })
                    }
                    else {
                        if (mitype === "checkbox") {
                            setistate(e.target.checked);
                        }
                        else {
                            setistate(e.target.value);
                        }
                    }
                }
                } />
            <span className="kkr pl10 tc">{mitype === " " ? "" : stuff}</span>
        </div>
    )
}