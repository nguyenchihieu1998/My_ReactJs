import banner from '/Users/Admin/Desktop/reacJS/my-project/src/Image/banner1.jpg'
const Banner = ()=>{
    return<>
    <div class="bg-white dark:bg-gray-50 w-screen border-b border-gray-200 dark:border-gray-50">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <img src={banner}></img>
        </div>
    </div>
    <div className="z-3 absolute w-[300px] top-[20%] left-[20%]">
            <p className='italic text-slate-500'>NEW INSPIARATION 2020</p>
            <p className="text-3xl italic">20% OFF ON NEW SEASON</p>
            <p className="h-[30px] w-[150px] text-center pt-1 bg-black text-white italic"><a href='#' >Browse collections</a></p>
    </div>
    </>
}
export default Banner;