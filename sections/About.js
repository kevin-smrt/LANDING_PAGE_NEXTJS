/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container, Box, Image, Text } from 'theme-ui';

export default function About() {
    return (
        <section sx={styles.about} id="about">
            <Container sx={styles.container}>
                <Flex sx={styles.flex}>
                    <Image sx={styles.img} src="/assets/image-about.png" />
                    <Box>
                        <Text as="h2" sx={styles.title}>Best Offer In Town</Text>
                        <Text as="h3" sx={styles.subtitle}>Lorem ipsum dolor sit amet consectur adipisicing elit.</Text>
                        <Text as="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae delectus voluptates reprehenderit hic dicta aliquid, reiciendis odit, debitis unde quibusdam eaque aperiam maiores, suscipit quae quo doloremque magnam voluptatum?</Text>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}

const styles = {
    about: {
        position: 'relative',
        py: 4,
        bg: 'whitesmoke',
    },
    container: {
        width: '60%',
    },
    img: {
        width: '100%',
    },
    flex: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 600,
    },
    subtitle: {
        fontWeight: 500,
        mb: 4,
    }
}