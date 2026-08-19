import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    return(
        <section className="container text-white mt-10">
            <nav className="flex items-center justify-between border-3">
                <div className="text-[50px] pl-3">
                    <h1>Caffeine</h1>
                </div>
                <ul className="flex gap-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Facilities</a></li>
                </ul>
                <div className="flex gap-5 pr-3 items-center">
                    <div>
                        <a href="#">Sign In</a>
                    </div>
                    <div className="text-[30px] border-l-[3px] border-white/50 pl-5">
                        <FontAwesomeIcon icon="magnifying-glass" />
                    </div>
                </div>
            </nav>
        </section>
    )
}export default Header