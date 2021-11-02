/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Flex, Image, Text, Button } from "theme-ui";
import classes from '../styles/Wallpaper.module.css';

export default function Presentation() {
    return (
        <section sx={styles.container} className={classes.wallpaper}>
            <Container sx={styles.container} className={classes.texture}>
                <Flex sx={styles.flex}>
                    <Box>
                        <Image src="/assets/mobile.png" alt="Mobile Image" />
                    </Box>
                    <Box sx={styles.glass}>
                        <Image variant="plateTwo" sx={styles.images.plateTwo} src="/assets/plate-two.png" alt="Plate Image" />
                        <Image variant="plateThree" sx={styles.images.plateThree} src="/assets/plate-three.png" alt="Plate Image" />
                        <Box sx={styles.center}>
                            <Text as="p" sx={styles.tinyTitle}>FOODO</Text>
                            <Text as="p" sx={styles.subtitle}>Get Your Food In</Text>
                            <Text as="h2" sx={styles.title}>FOODO</Text>
                            <Text as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            <Button sx={styles.button}>Download App</Button>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}

const styles = {
    container: {
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
    },
    flex: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    glass: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        width: '40%',
        background: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.30)',
        backdropFilter: 'blur(5px )',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
    },
    center: {
        width: '90%',
    },
    tinyTitle: {
        letterSpacing: '4px',
        color: 'primary',
        fontWeight: '500',
    },
    subtitle: {
        fontWeight: '500',
        fontSize: '24px',
    },
    title: {
        letterSpacing: '5px',
        fontSize: '40px',
        fontWeight: '500',
    },
    button: {
        userSelect: 'none',
        mt: 20,
    },
    images: {
        plateTwo: {
            position: 'absolute',
            top: '-20px',
            right: '30px',
        },
        plateThree: {
            position: 'absolute',
            top: '-20px',
            right: '120px',
        }
    }
}