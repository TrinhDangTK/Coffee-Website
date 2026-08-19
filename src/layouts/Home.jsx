import arrow from "../assets/header/arrow.svg"
function Home() {
    return (
        <section className="container flex flex-col gap-5">
            <div className="max-w-[300px] mt-10 text-white">
                <h1 className="text-[50px]">Discover The Art Of Perfect Coffee</h1>
            </div>
            <div className="max-w-[350px] text-white">
                <p>
                    Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right
                </p>
            </div>
            <div className="flex gap-5">
                <div className="w-full max-w-[150px] text-[#161211] bg-[#fefefd] flex items-center justify-center">
                    <a className="flex items-center justify-center"href="#">Order Now<img src={arrow} alt="Arrow" className="w-10 h-10 items-center justify-center" /></a>
                </div>
                <div className="w-full max-w-[150px] text-[#d6d2cb] bg-[#1b1006] border-[#a29a97] border-[1px]">
                    <a href="#" className="flex items-center justify-center py-2.5">Explore More</a>
                </div>
            </div>
            <div className="flex gap-10 text-white text-center pt-10">
                <div>
                    <h4>50+</h4>
                    <p>ITEMS OF COFFEE</p>
                </div>
                <div>
                    <h4>20+</h4>
                    <p>Offer Running</p>
                </div>
                <div>
                    <h4>2k+</h4>
                    <p>Happy Customers</p>
                </div>
            </div>
        </section>
    )
}export default Home