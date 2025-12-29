import { useState } from "react";
import { colors } from "../assets/style/tokens/colors";

export default function Comment({ user, comment, onClick, active = false }) {
    const [hover, setHover] = useState(false);

    const styles = active
        ? { color: colors.orange.normal.base }
        : hover
        ? { color: colors.orange.normal.base }
        : {
              backgroundColor: "transparent",
          };

    return (
        <div className="comment-wraper">
            <div className="comment-name">
                {user}왕**
                {/* <p>{comment.created_at}</p> */} 2025.11.27
            </div>
            <div className="comment-content">{/* {comment.content} */} 좋은 의견인 것 같습니다.</div>
        </div>
    );
}
