export default function NavBar() {
    return (
        <nav className="navigation">
            <div id="left">
                <i id="logo" className="fab fa-linkedin"></i>
                <div id="search">
                    <i className="material-icons">search</i>
                    <input type="text" />
                </div>
            </div>

            <div id="right">
                <div>
                    <i className="material-icons">home</i>
                    <p>Home</p>
                </div>
                <div>
                    <i className="material-icons">people</i>
                    <p>My Network</p>
                </div>
                <div>
                    <i className="material-icons">business_center</i>
                    <p>Jobs</p>
                </div>
                <div>
                    <i className="material-icons">comment</i>
                    <p>Messaging</p>
                </div>
                <div>
                    <i className="material-icons">notifications</i>
                    <p>Notifications</p>
                </div>
                <div>
                    <i className="material-icons">account_circle</i>
                    <p>Me</p>
                </div>
                <div>
                    <i className="material-icons">apps</i>
                    <p>Work</p>
                </div>
                <div>
                    <p>Reactivate</p>
                    <p>Premium</p>
                </div>
            </div>
            
        </nav>
    )
}