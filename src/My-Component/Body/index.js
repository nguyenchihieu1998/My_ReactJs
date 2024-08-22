// import product1 from '/Users/Admin/Desktop/reacJS/my-project/src/Image/product_1.png'
import product1 from '../../assets/Image/product_1.png';
import product2 from '../../assets/Image/product_2.png';
const Body = ()=>{
    return(
    <div class="bg-white dark:bg-gray-50 w-screen border-b border-gray-200 dark:border-gray-50">
        <div className="text-center pt-5 pb-3">
            <p className="text-gray-400 italic text-xs">CAREFULLY CREATED COLLECTIONS</p>
            <p className="italic text-lg">BROWER OUR CATEGORIES</p>
        </div>
        <div className="flex flex-wrap justify-center">
            <div className="max-w-screen-md">
                <img src={product1}></img>
            </div>
            <div className="max-w-screen-md">
                <img src={product2}></img>
            </div>
        </div>
    </div>
    )
}
export default Body;