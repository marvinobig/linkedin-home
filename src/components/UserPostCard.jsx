export default function Post(props) {
    return (
        <section id="post-card">
            <div className="user-post">
                <div className="user-icon">
                    <i className="material-icons">account_circle</i>
                    <div className="user-info">
                        <p>{props.user}</p>
                        <p className="followers">{props.followers} Followers</p>
                        <p className="posted">19h <i className="material-icons">public</i></p>
                    </div>
                </div>
                <div className="user-post-actions">
                    <i className="material-icons">more_horiz</i>
                </div>
            </div>

            <p className="post-text">
                {props.text}
            </p>

            <img src={`../media/${props.img}`} alt="" className="post-img" />

            <div className="user-actions">
                <div className="action">
                    <i className="material-icons">thumb_up</i>
                    <p>Like</p>
                </div>
                <div className="action">
                    <i className="material-icons">message</i>
                    <p>Comment</p>
                </div>
                <div className="action">
                    <i className="material-icons">share</i>
                    <p>Share</p>
                </div>
                <div className="action">
                    <i className="material-icons">send</i>
                    <p>Send</p>
                </div>
            </div>
        </section>
    )
}