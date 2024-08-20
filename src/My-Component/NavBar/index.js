const Navbar = ()=>{
    return<>
    <nav class="bg-white dark:bg-gray-50 fixed w-screen top-0 start-0 border-b border-gray-200 dark:border-gray-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="md:flex">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-50 md:dark:bg-gray-50 dark:border-gray-50">
                    <li>
                        <a href="#" class="block py-2 px-3 md:p-0 md:dark:text-yellow-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 md:hover:text-yellow-500 md:p-0">Shop</a>
                    </li>
                </ul>
            </div>
            <a href="/" class="flex">
                <span class="text-2xl font-semibold dark:text-gray-900">BOUTIQUE</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-gray-500 mx-auto md:p-2 hover:text-yellow-500"><i class="bi bi-cart-fill"> Cart</i></button>
                <button type="button" class="text-gray-500 mx-auto md:p-2 hover:text-yellow-500"><i class="bi bi-person-fill"> Login</i></button>
            </div>
        </div>
    </nav>
    </>
}
export default Navbar;