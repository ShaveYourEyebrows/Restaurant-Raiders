import './App.css';
import Navigator from './Components/Navigator.tsx';
import MainScreen from './Components/MainScreen.tsx'
import Contact from './Components/Contact.tsx';
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigator />}
                    />
                    <Route
                        path="/main"
                        element={<MainScreen />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                    <Route
                      path="/contact"
                      element={<Contact />}
                    />
                </Routes>
            </Router>
        </>
      </header>
    </div>
  );
}

export default App;
