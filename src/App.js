import "./App.css";
import NavBar from "./components/Navigation";
import StartPost from "./components/StartPostCard";
import UserCard from "./components/UserCard";
import News from "./components/NewsCard";
import {PostData} from "./postData";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <StartPost />
      <UserCard />
      <News />
      {PostData}
    </div>
  );
}
