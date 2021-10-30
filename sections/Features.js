/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Features() {
    return (
        <section sx={styles.oui}>
            <h1>Features</h1>
        </section>
    )
}

const styles = {
    oui: {
        position: 'relative',
        mt: '100vh',
        height: '100vh',
        bg: 'whitesmoke',
    }
}