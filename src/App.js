import './css/App.css';
import Header from './components/Header.js'
import ParcelOptions from './components/ParcelOptions';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
function App() {
  return (
    <div className="App">
      <Header />
      <ParcelOptions />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
