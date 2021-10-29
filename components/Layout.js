import { Fragment, useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/Header";

export default function Layout(props) {
    const [isSticky, setIsSticky] = useState(false);

    function handleStateChange(status) {
        if (status.status === Sticky.STATUS_FIXED) {
            setIsSticky(true);
        } else if (status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false);
        }
    }

    return (
        <Fragment>
            <Sticky innerZ={10} top={0} onStateChange={handleStateChange}>
                <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
            </Sticky>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}