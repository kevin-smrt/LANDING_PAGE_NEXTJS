/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Text, Flex, Button, Image, Box } from 'theme-ui';

export default function DownloadButton(props) {
    return (
        <Button variant="download">
            <Flex>
                <Image sx={styles.img} src={props.imgUrl} alt={props.alt} />
                <Box>
                    <Text as="p">{props.text}</Text>
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
    },
    img: {
        objectFit: 'contain',
    }
}