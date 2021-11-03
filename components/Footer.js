/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import FooterLinks from './FooterLinks';

export default function Footer() {
    return (
        <footer sx={styles.footer} id="footer">
            <Container sx={styles.container}>
                <Flex sx={styles.flex}>
                    <Box sx={styles.box}>
                        <Text sx={styles.title} as="h2">FOODO</Text>
                        <Text as="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae delectus voluptates reprehenderit.</Text>
                    </Box>
                    <Flex sx={styles.links}>
                        <FooterLinks
                            title="Links"
                            links={["Overview", "Social Media", "Contact"]}
                        />
                        <FooterLinks
                            title="Links"
                            links={["Overview", "Social Media", "Contact"]}
                        />
                    </Flex>
                </Flex>
            </Container>
            <Container sx={styles.copyright}>
                <Text as="p">Foodo &#169; Kévin Sanmartin</Text>
            </Container>
        </footer>
    )
}

const styles = {
    footer: {
        position: 'relative',
        width: '100%',
        bg: 'footer',
    },
    container: {
        py: 6,
        width: '60%',
        '@media screen and (max-width: 950px)': {
            width: '80%',
        }
    },
    flex: {
        justifyContent: 'space-around',
        '@media screen and (max-width: 950px)': {
            flexDirection: 'column',
        }
    },
    links: {
        justifyContent: 'space-around',
        width: '50%',
        '@media screen and (max-width: 950px)': {
            width: '100%',
            justifyContent: 'space-between',
        }
    },
    title: {
        fontWeight: 300,
        fontSize: 34,
    },
    box: {
        width: 500,
        '@media screen and (max-width: 950px)': {
            width: '100%',
        }
    },
    copyright: {
        py: 2,
        textAlign: 'center',
        bg: '#1A0D00',
        color: 'white',
    }
}