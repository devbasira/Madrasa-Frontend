import Image from 'next/image';

export default function Header({setshowMenu,showMenu }) {
    return (
      <header className="flex justify-center w-full ">
<div className='max-w-screen-lg w-full flex justify-between py-5 px-5 lg:px-0'>




<img   src="/logo.svg" height="40px" width="40px" alt="" />  



<div className="sm:flex sm:gap-8 ">




   <div className=' hidden sm:flex gap-5  cursor-pointer'> <div>home</div>
    <div className='cursor-pointer'>course</div>
    <div className='cursor-pointer'>resources</div></div>

 <div className='flex gap-7 align-items-center'> <button className='bg-blue-600 text-white p-1 px-3 rounded-full '>enroll now</button> <span> <img className={`${showMenu?'rotate-90':'rotate-0'} cursor-pointer  transition-all duration-[1500ms]`} onClick={(e)=>{setshowMenu((e)=>!e)}} src="/Humburger.svg" height="30px" width="30px"  alt="" />
 </span></div>
</div>

</div>


      </header>
    );
  }
  