import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ContactSection from './pages/Contact';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/contact" element={<ContactSection />} />
            </Routes>
        </Router>
    )
}