/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Flex, Link } from 'theme-ui';

export default function FooterLinks(props) {
    return (
        <Box>
            <Text as="h3">{props.title}</Text>
            <Flex sx={styles.flex}>
                {props.links.map((text, index) => (
                    <Link
                        sx={styles.link}
                        key={index} 
                        href='#footer'
                    >
                        {text}
                    </Link>
                ))}
            </Flex>
        </Box>
    )
}

const styles = {
    flex: {
        mt: 3,
        flexDirection: 'column',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'text',
        transition: 'color .2s',
        '&:hover': {
            color: 'black',
        }
    }
}