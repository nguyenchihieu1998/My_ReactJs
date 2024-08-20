import banner from '/Users/Admin/Desktop/reacJS/my-project/src/Image/banner1.jpg'
const Banner = ()=>{
    return<>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <img src={banner}></img>
        </div>
    </>
}
export default Banner;