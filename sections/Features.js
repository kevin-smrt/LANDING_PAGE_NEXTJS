/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Divider, Container } from 'theme-ui';
import Feature from '../components/feature/Feature';
import featureItems from '../components/feature/feature.data';

export default function Features() {
    return (
        <section sx={styles.features} id="feature">
            <Container sx={styles.container}>
                <Flex sx={styles.flex}>
                    {featureItems.map((featureItem, index) => (
                        <Feature
                            key={index}
                            title={featureItem.title}
                            content={featureItem.content}
                            imgUrl={featureItem.imgUrl}
                        />
                    ))}
                </Flex>
                <Divider />
            </Container>
        </section>
    )
}

const styles = {
    features: {
        position: 'relative',
        mt: '100vh',
        bg: 'whitesmoke',
    },
    container: {
        width: '60%',
    },
    flex: {
        justifyContent: 'center',
    },
}