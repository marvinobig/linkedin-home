import './App.css';
import NavBar from './components/Navigation';
import StartPost from './components/StartPostCard';
import UserCard from './components/UserCard';
import News from './components/NewsCard';
import Post from './components/UserPostCard';
import img from './media/linkedin-react.png';

export default function App() {
    return (
        <div className='app-container'>
            <NavBar />
            <StartPost />
            <UserCard />
            <News />
            <Post 
                user = "Marv Obig"
                text = "This is my first post. I am a react developer"
                img = {img}
            />
            <Post 
                user = "Sim Bai"
                text = "I am small and very cute but one thing that mes me annoyed is when people pay too much attention to my height"
            />
            <Post 
                user = "DatOne"
                text = "SOmetimes, I lie awake at night to listen to my next door neighbours eating."
            />
        </div>
    )
}