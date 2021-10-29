import { ThemeProvider } from "@theme-ui/theme-provider";
import Layout from "../components/Layout";
import Presentation from "../sections/Presentation";
import theme from "../theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Presentation />
            </Layout>
        </ThemeProvider>
    )
}
