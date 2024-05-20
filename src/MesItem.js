import { useEffect } from "react"

export function MesItem({ classes, mes1, mes2, err1, err2, istate, setistate, isvisible, setvisible }) {

    useEffect(
        () => {
            if (isvisible) {
                setTimeout(() => {
                    setvisible(false);
                }, 3000);
            }
        },
        [isvisible, setvisible]
    )

    return (
        isvisible && (
            <div className={`${classes} ${istate ? "bgr" : "err"}`}>
                <p className="pl10">
                    {istate ? mes1 : err1}
                </p>
                <p className="pl10">
                    {istate ? mes2 : err2}
                </p>
            </div>
        )
    )
}