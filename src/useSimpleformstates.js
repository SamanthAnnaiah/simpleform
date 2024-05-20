import { useState } from "react";

export function useSimpleformstates() {
    let [fname, setfname] = useState(" ");
    let [sname, setsname] = useState(" ");
    let [femail, setfemail] = useState(" ");
    let [qtype, setqtype] = useState(" ");
    let [mes, setmes] = useState(" ");
    let [consent, setconsent] = useState(false);
    let [submit, setsubmit] = useState("");
    let [errorcheck, seterrorcheck] = useState(false);
    let [isvisible, setvisible] = useState(false);

    let usesformstates = {
        fname, setfname,
        sname, setsname,
        femail, setfemail,
        qtype, setqtype,
        mes, setmes,
        consent, setconsent,
        submit, setsubmit,
        errorcheck, seterrorcheck,
        isvisible, setvisible
    }

    return usesformstates;
}