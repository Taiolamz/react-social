import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Safak Kocaoglu</span>
                <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                    </div>
                    <MoreVert />
                </div>
                <div className="postCenter"></div>
                <span className="postText">Hey! It's my first Text:)</span>
                <img src="/assets/post/1.jpeg" alt="" className="postImage" />
                <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">9 comments</span>
                </div>
                </div>
            </div>
        </div>
    )
}
