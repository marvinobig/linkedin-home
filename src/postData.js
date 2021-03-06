import Post from "./components/UserPostCard";

const POST = [
  {
    id: 1,
    user: "Marv Obig",
    text: "This is my first post. I am a react developer",
    img: "linkedin-react.png",
    followers: 20
  },

  {
    id: 2,
    user: "Sim Bai",
    text: "I am a graphic designer with next level skills",
    img: "linkedin-react.png",
    followers: 40
  },

  {
    id: 3,
    user: "datOne",
    text: "I c u",
    img: "",
    followers: 13
  },

  {
    id: 4,
    user: "freeCode",
    text: "Skills a fullstack JavaScript developer needs to have",
    img: "",
    followers: 100000
  }
];

const PostData = POST.map((post) => {
  return (
    <Post
      key={post.id}
      post={post}
    />
  );
});

export { PostData };
