import logo from './logo.svg';
import './App.css';
import BookStore from './components/BookStore';
import HeaderMessage from './components/HeaderMessage';
import UserInfo from './components/UserInfo';
import FooterMessage from './components/FooterMessage';

function App() {
    return (
        <main className="container">
            <header className="row">
                <HeaderMessage />
                <UserInfo />
            </header>
            <div className="row">
                {/* BookStore goes here */}
                <BookStore callToAction="Browse our books below:" />
            </div>
            <footer className="row">
                {/* FooterMessage goes here */}
                <FooterMessage />
            </footer>
        </main>
    );
}

export default App;