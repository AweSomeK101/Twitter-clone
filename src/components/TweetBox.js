import { useState, useContext } from "react";
import {GlobalContext} from "../Global"
import { Avatar, Button } from "@material-ui/core";
import "./styles/TweetBox.css";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImg, setTweetImg] = useState("");
  const {addTweet} = useContext(GlobalContext)

  function sendTweet(e){
    e.preventDefault();

    addTweet({
      displayName: "Samad Khan",
      username: "samk101",
      text: tweetMsg,
      avatar: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
      image: tweetImg,
    })

    setTweetMsg("");
    setTweetImg("");
  }

  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetboxInput">
          <Avatar src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMsg}
            onChange={(e) => setTweetMsg(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Image Url"
          className="tweetboxInputImage"
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
        />

        <Button type="submit" onClick={sendTweet} className="tweetboxButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
