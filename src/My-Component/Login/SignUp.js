import bgimage from './banner1.jpg'
const SignUp = ()=>{
    return<>
        <div className="bg-gray-300 max-w-xl">
            <div className="shadow-gray-400 w-[30%] h-[80%] justify-center absolute bg-white rounded top-[10%] left-[35%]">
                <p className="text-3xl italic text-gray-500 text-center pt-24">Sign Up</p>
                <div className='justify-items-center grid pt-20'>
                    <input placeholder='Full Name' className='block w-[60%] h-12 border-2 mb-2 ps-6 text-sm'></input>
                    <input placeholder='Email' className='block w-[60%] h-12 border-2 mb-2 ps-6 text-sm'></input>
                    <input placeholder='Password' className='block w-[60%] h-12 border-2 mb-2 ps-6 text-sm'></input>
                    <input placeholder='Phone' className='block w-[60%] h-12 border-2 mb-2 ps-6 text-sm'></input>
                    <button className="bg-black text-white w-[60%] h-12 mt-4">SIGN UP</button>
                    <p className="text-gray-400 mt-24">Login? <a href='#' className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
    </>
}
export default SignUp;