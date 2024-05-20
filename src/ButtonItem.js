export function ButtonItem({ classes, itype = " ", stuff = " ", iname = " ", submitcheck = {} }) {

    return (
        <div className={classes} onClick={submitcheck}>
            {stuff}
        </div>
    )
}