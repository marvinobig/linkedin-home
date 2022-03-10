export default function UserCard() {
    return (
        <section id="user-card">
            <div className="user-cover"></div>
            <div className="user"></div>
            <div id="user-title">
                <p>Marv Obig</p>
                <p>Frontend Developer</p>
            </div>
            <div id="connections">
                <div id="current-connections">
                    <p>Connections</p>
                    <p id="num-of-connections">15</p>
                </div>
                <p>Grow your network</p>
            </div>
            <div className="extra">
                <div id="exclusive">
                    <p>Exclusive tools & insights</p>
                    <p>Reactivate premium</p>
                </div>
                <p id="items"><i className="material-icons">bookmark</i>My items</p>
            </div>
        </section>
    )
}