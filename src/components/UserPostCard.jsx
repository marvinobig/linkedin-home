import PostImg from "../media/linkedin-react.png";

export default function Post() {
    return (
        <section id="post-card">
            <div className="user-post">
                <div className="user-icon">
                    <i className="material-icons">account_circle</i>
                    <div className="user-info">
                        <p>Marv Obig</p>
                        <p className="followers">17 followers</p>
                        <p className="posted">19h <i className="material-icons">public</i></p>
                    </div>
                </div>
                <div className="user-post-actions">
                    <i className="material-icons">more_horiz</i>
                </div>
            </div>

            <p className="post-text">Day 9 & 10 of #100daysofcode:
                Nearly finished my take on recreating LinkedIn's home feed. 
                Doesn't look to bad so far. Just need to add two more cards 
                and then I can focus on rendering posts through an array with #Reactjs.
            </p>

            <img src={PostImg} alt="" className="post-img" />

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