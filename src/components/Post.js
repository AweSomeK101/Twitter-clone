import "./styles/Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, text, image, avatar }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>

      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {displayName}
              <span className="postHeaderSpecial">
                @{username}
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          alt=""
        />
        <div className="postFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
