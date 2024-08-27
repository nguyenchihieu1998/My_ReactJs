const Footer = ()=> {
    return(
        <div class="bg-gray-950 dark:bg-gray-950 w-screen border-b border-gray-950 dark:border-gray-950">
            <div className='max-w-screen-xl items-center justify-between mx-auto p-4 flex flex-row'>
                 <div className="basis-1/3">
                    <a href="#"><p className=" h-3 text-white italic pt-10">CUSTOMER SERVICES</p></a>
                    <ul className="text-gray-400 pt-8 pb-10 italic">
                        <li><a href="#">Help & Contact Us</a></li>
                        <li><a href="#">Returns & Refunds Us</a></li>
                        <li><a href="#">Online Stores</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                 </div>
                 <div className="basis-1/3 text-center">
                    <a href="#"><p className=" h-3 text-white italic pt-10 ">COMPANY</p></a>
                    <ul className="text-gray-400 pt-8 pb-10 italic">
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">Available Services</a></li>
                        <li><a href="#">Latest Posts</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                 </div>
                 <div className="basis-1/3 text-end">
                    <a href="#"><p className=" h-3 text-white italic pt-10">SOCIAL MEDIA</p></a>
                    <ul className="text-gray-400 pt-8 pb-10 italic">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Pinterest</a></li>
                    </ul>
                 </div>
            </div>
        </div>
    )
}
export default Footer;