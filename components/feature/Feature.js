/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Image } from 'theme-ui';

export default function Feature(props) {
    return (
        <Box sx={styles.box}>
            <Image sx={styles.img} src={props.imgUrl} />
            <Text sx={styles.title} as="h2">{props.title}</Text>
            <Text sx={styles.content} as="p">{props.content}</Text>
        </Box>
    )
}

const styles = {
    box: {
        m:4,
        maxWidth: '300px',
    },
    title: {
        fontWeight: '400',
    },
    img: {
        width: '80%',
    },
    content: {
        fontSize: '14px',
    }
}