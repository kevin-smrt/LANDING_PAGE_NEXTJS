import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Presentation from "../sections/Presentation";
import Features from "../sections/Features";
import theme from "../theme";
import About from "../sections/About";
import Download from "../sections/Download";

import { ThemeProvider } from "@theme-ui/theme-provider";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO />
                <Presentation />
                <Features />
                <About />
                <Download />
            </Layout>
        </ThemeProvider>
    )
}
