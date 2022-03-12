import './App.css';
import NavBar from './components/Navigation';
import StartPost from './components/StartPostCard';
import UserCard from './components/UserCard';
import News from './components/NewsCard';
import Post from './components/UserPostCard';

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
                img = "linkedin-react.png"
                followers = {20}
            />
            <Post 
                user = "Sim Bai"
                text = "I am small and very cute but one thing that angers me is when people pay too much attention to my height"
                img = "linkedin-guide-image.png"
                followers = {40}
            />
            <Post 
                user = "DatOne"
                text = "Sometimes, I lie awake at night to listen to my next door neighbours eating."
                followers = {1}
            />
        </div>
    )
}