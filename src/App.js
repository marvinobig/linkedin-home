import "./App.css";
import NavBar from "./components/Navigation";
import StartPost from "./components/StartPostCard";
import UserCard from "./components/UserCard";
import News from "./components/NewsCard";
import Post from "./components/UserPostCard";
import PostData from "./postData";

export default function App() {
  const POST = PostData.map((post) => {
    return (
      <Post
        user={post.user}
        text={post.text}
        img={post.img}
        followers={post.followers}
      />
    );
  });
  return (
    <div className="app-container">
      <NavBar />
      <StartPost />
      <UserCard />
      <News />
      {POST}
    </div>
  );
}
