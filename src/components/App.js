import { Container } from "./shared/Container.style";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./style/Global";
import theme from "./style/theme";
import Header from "./Header";
import Card from "./Card";
import content from "../content";
import Footer from "./Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
