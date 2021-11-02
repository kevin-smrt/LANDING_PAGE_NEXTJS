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
                            alt={featureItem.altText}
                        />
                    ))}
                </Flex>
                <Divider sx={styles.divider} />
            </Container>
        </section>
    )
}

const styles = {
    features: {
        position: 'relative',
        mt: '100vh',
        bg: 'secondary',
    },
    container: {
        width: '60%',
    },
    flex: {
        justifyContent: 'center',
    },
    divider: {
        margin: 0,
    }
}