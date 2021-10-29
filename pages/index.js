import { ThemeProvider } from "@theme-ui/theme-provider";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Presentation from "../sections/Presentation";
import theme from "../theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO />
                <Presentation />
            </Layout>
        </ThemeProvider>
    )
}
