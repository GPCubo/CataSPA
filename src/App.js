import './App.css';
import './components/Main.css'
import { Outlet } from 'react-router';
import { HeaderBannerAndIcons } from './components/HeaderBannerAndIcons';

function App() {
  return (
    <>
      <header className="App-header">
        <HeaderBannerAndIcons/>
      </header>
      <main className="App-main">
        <Outlet/>
      </main>
      <footer className="App-footer">
      </footer>
    </>
  );
}

export default App;
