export default function NavBar() {
    return (
        <nav className="navigation">
            <div id="left">
                <i id="logo" className="fab fa-linkedin"></i>
                <div id="search">
                    <i className="material-icons">search</i>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div id="right">
                <div id="home" className="alignment">
                    <i className="material-icons">home</i>
                    <p>Home</p>
                </div>
                <div id="network" className="alignment">
                    <i className="material-icons">people</i>
                    <p>My Network</p>
                </div>
                <div id="jobs" className="alignment">
                    <i className="material-icons">business_center</i>
                    <p>Jobs</p>
                </div>
                <div id="message" className="alignment">
                    <i className="material-icons">textsms</i>
                    <p>Messaging</p>
                </div>
                <div id="notifications" className="alignment">
                    <i className="material-icons">notifications</i>
                    <p>Notifications</p>
                </div>
                <div id="account" className="alignment">
                    <i className="material-icons">account_circle</i>
                    <p>Me  <i className="material-icons">arrow_drop_down</i></p>
                </div>
                <div className="seperate">
                    <div id="work" className="alignment">
                        <i className="material-icons">apps</i>
                        <p>Work <i className="material-icons">arrow_drop_down</i></p>
                    </div>
                    <div id="premium" className="alignment">
                        <p>Reactivate</p>
                        <p>Premium</p>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}