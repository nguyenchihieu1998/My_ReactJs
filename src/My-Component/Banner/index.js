import banner from '../Image/banner1.jpg'
const Banner = ()=>{
    return<>
    <div class="bg-white dark:bg-gray-50 w-screen border-b border-gray-200 dark:border-gray-50">
        <div className='max-w-screen-xl items-center justify-between mx-auto p-4'>
            <img className="sm:w-fit" src={banner}></img>
        </div>
    </div>
    <div className="z-3 xl:absolute xl:w-[300px] xl:top-[20%] xl:left-[30%] sm:static sm:bg-gray-50 sm:w-screen">
            <p className='italic text-slate-500'>NEW INSPIARATION 2020</p>
            <p className="text-3xl italic">20% OFF ON NEW SEASON</p>
            <p className="h-[30px] w-[150px] text-center pt-1 bg-black text-white italic"><a href='#' >Browse collections</a></p>
    </div>
    </>
}
export default Banner;