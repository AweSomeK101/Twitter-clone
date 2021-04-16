import { useContext } from "react";
import { GlobalContext } from "../Global";
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  const { tweetList } = useContext(GlobalContext);

  var tweets = tweetList.map(tweet => <Post
    displayName={tweet.displayName}
    username={tweet.username}
    text={tweet.text}
    avatar={tweet.avatar}
    image={tweet.image}
  />
   );

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {tweets}

     
    </div>
  );
}

export default Feed;
