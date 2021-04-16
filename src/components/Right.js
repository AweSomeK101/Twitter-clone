import "./styles/Right.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Right() {
  return (
    <div className="right">
      <div className="rightInput">
        <SearchIcon className="rightSearchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="rightContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId="1382755464740474882" />

        <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{height: 400}} />

      </div>
    </div>
  );
}

export default Right;
