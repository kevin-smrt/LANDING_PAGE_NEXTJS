/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Text, Flex, Button, Image, Box } from 'theme-ui';

export default function DownloadButton(props) {
    return (
        <Button variant="download">
            <Flex>
                <Image sx={styles.img} src={props.imgUrl} alt={props.alt} />
                <Box>
                    <Text sx={styles.text} as="p">{props.text}</Text>
                    <span sx={styles.button}>{props.platform}</span>
                </Box>
            </Flex>
        </Button>
    )
}

const styles = {
    button: {
        display: 'block',
        fontSize: 24,
        fontWeight: 500,
        '@media screen and (max-width: 950px)': {
            fontSize: 16,
        }
    },
    text: {
        '@media screen and (max-width: 950px)': {
            fontSize: 12,
        }
    },
    img: {
        objectFit: 'contain',
    }
}