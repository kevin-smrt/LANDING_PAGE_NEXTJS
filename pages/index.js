import { ThemeProvider } from "@theme-ui/theme-provider";
import Layout from "../components/Layout";
import theme from "../theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
            </Layout>
        </ThemeProvider>
    )
}
