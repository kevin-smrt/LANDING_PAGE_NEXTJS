/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/Header";
import Footer from './Footer';

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
            <Sticky sx={styles.sticky} innerZ={10} top={0} onStateChange={handleStateChange}>
                <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
            </Sticky>
            <main sx={styles.main}>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}

const styles = {
    sticky: {
        position: 'absolute',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '100',
    },
    main: {
        position: 'relative',
    }
}