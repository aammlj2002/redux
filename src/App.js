import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:imdbID" element={<MovieDetail />} />
                    <Route element={<PageNotFound />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
