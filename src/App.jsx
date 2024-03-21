import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App(props) {
  const imageData = props.data;
  return (
    <div>
      <Header/>
      <Body imageData={imageData}/>
      <Footer/>
    </div>
  )
}

export default App;
