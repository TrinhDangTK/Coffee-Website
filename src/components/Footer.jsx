import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer(){
    return(
        <section class="text-white bg-[#30261C]">
            <div className="container flex justify-between py-[96px]">
                <div><h4>COFFEE</h4></div>
                <div className="flex flex-col gap-5">
                    <h4>PRIVACY</h4>
                    <ul>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Order ahead</a></li>
                        <li><a href="#">Menu</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href="#">Find a location</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our story</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li><a href="#">Plans & pricing</a></li>
                        <li><a href="#">Sell your products</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h4>SOCIAL MEDIA</h4>
                    <div className="text-[30px] flex gap-[20px]">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </div>
                </div>
            </div>
        </section>
    )
}export default Footer