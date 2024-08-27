// import product1 from '/Users/Admin/Desktop/reacJS/my-project/src/Image/product_1.png'
import product1 from '../../assets/Image/product_1.png';
import product2 from '../../assets/Image/product_2.png';
import product3 from '../../assets/Image/product_3.png';
import product4 from '../../assets/Image/product_4.png';
import product5 from '../../assets/Image/product_5.png';
const Body = ()=>{
    return(
    <div class="bg-white dark:bg-gray-50 w-screen border-b border-gray-200 dark:border-gray-50 justify-center">
        <div className="text-center pt-5 pb-3 mx-auto">
            <p className="text-gray-400 italic text-xs">CAREFULLY CREATED COLLECTIONS</p>
            <p className="italic text-lg">BROWER OUR CATEGORIES</p>
        </div>
        <div className="flex justify-between max-w-screen-xl mx-auto p-4">
            <div className="">
                <img src={product1}></img>
            </div> 
            <div >
                <img src={product2}></img>
            </div>
        </div>
        <div className="flex justify-between max-w-screen-xl mx-auto p-4">
            <div className="">
                <img src={product3}></img>
            </div> 
            <div className="">
                <img src={product4}></img>
            </div>
            <div className="">
                <img src={product5}></img>
            </div>
        </div>
    </div>
    )
}
export default Body;