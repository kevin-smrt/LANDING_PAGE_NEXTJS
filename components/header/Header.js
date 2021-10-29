/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import menuItems from "./header.data";
import { Link } from "react-scroll";

export default function Header({ className }) {
    return (
        <header sx={styles.header} className={className} id="header">
            <Box>
                <Flex sx={styles.flex}>
                    <Box>
                        <Link
                            sx={styles.title}
                            to={0}
                            // A finir
                        >
                            <h1>FOODO</h1>
                        </Link>
                    </Box>
                    <Flex sx={styles.nav} as="nav">
                        {menuItems.map((menuItem, index) => (
                            <Link
                                sx={styles.link}
                                activeClass="active"
                                to={menuItem.path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                key={index}
                            >
                                {menuItem.label}
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </header>
    )
}

const styles = {
    header: {
        color: 'text',
        py: 4,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'all 0.4s ease',
        '&.sticky': {
            position: 'fixed',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
            py: 3,
            bg: 'white',
        }
    },
    flex: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nav: {
        justifyContent: 'space-around',
    },
    link: {
        mr: 20,
        cursor: 'pointer',
        '&:hover': {
            color: 'black',
        },
    },
    title: {
        cursor: 'pointer',
        '&:hover': {
            color: 'black',
        },
    }
};