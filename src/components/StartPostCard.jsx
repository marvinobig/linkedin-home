export default function StartPost() {
    return (
        <section id="post-add">
            <div id="post">
                <i className="material-icons">account_circle</i>
                <div id="write-post">
                    <label htmlFor="post-input" className="material-icons">post_add</label>
                    <input id="post-input" type="text" placeholder="Start a post"/>
                </div>
            </div>
            <div id="post-actions">
                <p><i className="material-icons">image</i> Photo</p>
                <p><i className="material-icons">slideshow</i> Video</p>
                <p><i className="material-icons">calendar_month</i> Event</p>
                <p><i className="material-icons">article</i> Write article</p>
            </div>
        </section>
    )
}