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
        <div>
            <div>
                {user}
                <p>{comment.created_at}</p>
            </div>
            <div>{comment.content}</div>
        </div>
    );
}
