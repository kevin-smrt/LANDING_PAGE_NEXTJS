/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Text, Flex } from 'theme-ui';
import DownloadButton from '../components/DownloadButton';

export default function Download() {
    return (
        <section sx={styles.download} id="download">
            <Container sx={styles.container}>
                <Text as="h2">Download The App</Text>
                <Text as="h3" sx={styles.subtitle}>Get Food With Foodo</Text>
                <Text as="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Flex sx={styles.flex}>
                    <DownloadButton
                        imgUrl="/assets/ios-icon.png"
                        alt="ios icon"
                        text="Download On The"
                        platform="App Store"
                    />
                    <DownloadButton
                        imgUrl="/assets/google-icon.png"
                        alt="google icon"
                        text="Android App On"
                        platform="Google play"
                    />
                </Flex>
            </Container>
        </section>
    )
}

const styles = {
    download: {
        position: 'relative',
        bg: 'secondary',
        py: 5,
    },
    container: {
        width: '60%',
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: 500,
    },
    flex: {
        justifyContent: 'center',
        '@media screen and (max-width: 950px)': {
            flexDirection: 'column',
            alignItems: 'center',
        }
    }
}