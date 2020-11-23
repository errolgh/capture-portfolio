import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
// const { default: AboutSection } = require("./components/AboutSection");


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
