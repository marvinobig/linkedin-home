import './App.css';
import NavBar from './components/Navigation';
import StartPost from './components/StartPostCard';

export default function App() {
    return (
        <div className='app-container'>
            <NavBar />
            <StartPost />
        </div>
    )
}