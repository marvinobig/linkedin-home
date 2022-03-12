import Post from "./components/UserPostCard";

const POST = [
  {
    id: 1,
    user: "Marv Obig",
    text: "This is my first post. I am a react developer",
    img: "linkedin-react.png",
    followers: 20,
  },

  {
    id: 1,
    user: "Sim Bai",
    text: "I am a graphic designer with next level skills",
    img: "linkedin-react.png",
    followers: 40,
  },

  {
    id: 1,
    user: "datOne",
    text: "I c u",
    img: "",
    followers: 13,
  },

  {
    id: 1,
    user: "freeCode",
    text: "Skills a fullstack JavaScript developer needs to have",
    img: "",
    followers: 100000,
  },
];

const PostData = POST.map((post) => {
  return (
    <Post
      key={post.id}
      user={post.user}
      text={post.text}
      img={post.img}
      followers={post.followers}
    />
  );
});

export { PostData };
