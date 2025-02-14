"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export  function HeroSection() {

  return (
    <div className="h-[100vh]   flex justify-center items-center w-full">


<div className="w-[80%] flex justify-center">


<div className="flex flex-col gap-7 sm:w-[50%] ">

<h1 className="sm:text-[45px] text-[35px] leading-tight text-[grey] font-[700] bg-gradient-to-r from-gray-500 via-gray-500 to-blue-500 bg-clip-text text-transparent">ColorUI - Rethink & ReDesign</h1>  
<p className=' sm:text-[20px] text-[16px]'>ColorUI is an application designed to help you select the perfect colors for your design projects. It includes a powerful color palette generator that allows you to create, edit, and fine-tune palettes.</p>

<div className=' flex justify gap-x-6'
							initial={{opacity: 0, translateY: 30}}
							whileInView={{opacity: 1, translateY: 0}}
							viewport={{once: true}}
							transition={{delay: 1.2, duration: 1.0, type: 'spring'}}>
							<div className='flex items-center'>
								<Image
									alt='Hendrik Sommerfeldt'
									className='-mr-[10px] rounded-full border-2 border-borC max-md:hidden'
									height='0'
									priority={true}
									src='/users/hendrik.jpeg'
									width='30'
								/>
								<Image
									alt='Martin Moravek'
									className='-mr-[10px] rounded-full border-2 border-borC'
									height='0'
									priority={true}
									src='/users/martin.png'
									width='30'
								/>
								<Image
									alt='Miloš Đorić'
									className='-mr-[10px] rounded-full border-2 border-borC max-md:hidden'
									height='0'
									priority={true}
									src='/users/milos.jpeg'
									width='30'
								/>
							
								<Image
									alt='Kevin Wessa'
									className='-mr-[10px] rounded-full border-2 border-borC'
									height='0'
									priority={true}
									src='/users/kevin.png'
									width='30'
								/>
								
								<Image
									alt='Harry Mylonadis'
									className='-mr-[10px] rounded-full border-2 border-borC max-md:hidden'
									height='0'
									priority={true}
									src='/users/harry.jpeg'
									width='30'
								/>
								<Image
									alt='Micah Odell'
									className='-mr-[10px] rounded-full border-2 border-borC max-md:hidden'
									height='0'
									priority={true}
									src='/users/micah.png'
									width='30'
								/>
								<Image
									alt='Laurentiu Stefan'
									className='-mr-[10px] rounded-full border-2 border-borC max-md:hidden'
									height='0'
									priority={true}
									src='/users/stefan.png'
									width='30'
								/>
							</div>
							<div className='flex flex-col justify-center gap-y-1'>
								<div className='flex'>
									
								</div>
								<div className='text-sm font-medium text-textA'>
									Used by 6000+ <span className='max-md:hidden'>professionals</span>
								</div>
							</div>
						</div>
<div className="flex gap-8">
  <button>Generate Palettes</button>
<button style={{background:'#242424', border:''}}>Add to Chrome</button>
</div>

</div>

<div className='w-[50%] hidden sm:flex justify-center items-center'>
<img  src="/image.png"className="shadow-2xl" height={'390px'} width={"300px"} alt="" /> 
</div>
  
  </div> 
    
      
        
        
        </div>
  );
}


export  function Header() {

	const [MobileMenuToggle, setMobileMenuToggle] = useState(false)


  return (
    <div style={{backdropFilter:'blur(30px)'}} className="h-[7vh] bg-[transparent] flex justify-center items-center fixed w-full ">

 
    
<div className="w-[70%] flex justify-between">


<h2>ColorUI</h2>

<nav className="hidden gap-8 sm:flex">
  <Link href='/'>Home</Link>
  <Link href='/'>Reviews</Link>
  <Link  href='/'>Pricing</Link>
  <Link  href='/'>About</Link>
</nav>

{/* <div className={`sm:hidden  fixed flex w-full bg-slate-800 ${MobileMenuToggle?'left-[100%]':'[-100%]'}   top-[70%] transition-all h-[100vh]`}>
hello

		</div> */}

<svg  onClick={() => setMobileMenuToggle((prev) => !prev)}  className='sm:hidden block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_336_2)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.625C0 5.32663 0.118526 5.04048 0.329505 4.8295C0.540483 4.61853 0.826631 4.5 1.125 4.5H22.875C23.1734 4.5 23.4595 4.61853 23.6705 4.8295C23.8815 5.04048 24 5.32663 24 5.625C24 5.92337 23.8815 6.20952 23.6705 6.4205C23.4595 6.63147 23.1734 6.75 22.875 6.75H1.125C0.826631 6.75 0.540483 6.63147 0.329505 6.4205C0.118526 6.20952 0 5.92337 0 5.625ZM0 12C0 11.7016 0.118526 11.4155 0.329505 11.2045C0.540483 10.9935 0.826631 10.875 1.125 10.875H22.875C23.1734 10.875 23.4595 10.9935 23.6705 11.2045C23.8815 11.4155 24 11.7016 24 12C24 12.2984 23.8815 12.5845 23.6705 12.7955C23.4595 13.0065 23.1734 13.125 22.875 13.125H1.125C0.826631 13.125 0.540483 13.0065 0.329505 12.7955C0.118526 12.5845 0 12.2984 0 12ZM1.125 17.25C0.826631 17.25 0.540483 17.3685 0.329505 17.5795C0.118526 17.7905 0 18.0766 0 18.375C0 18.6734 0.118526 18.9595 0.329505 19.1705C0.540483 19.3815 0.826631 19.5 1.125 19.5H22.875C23.1734 19.5 23.4595 19.3815 23.6705 19.1705C23.8815 18.9595 24 18.6734 24 18.375C24 18.0766 23.8815 17.7905 23.6705 17.5795C23.4595 17.3685 23.1734 17.25 22.875 17.25H1.125Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_336_2">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


  
  </div> 
    
      
      
        
        
        </div>
  );
}



export  function Pricing() {
 

  return (
 <div className='h-[100vh] w-full flex justify-center gap-10 items-center'>
  
	<div className='h-[200px] w-[40%] bg-[#171717]'>
hello
	</div>



	<div className='h-[200px] w-[40%] bg-[#171717]'>
hello
	</div>


	<div className='h-[200px] w-[40%] bg-[#171717]'>
hello
	</div>
 </div>
  );
}



export  function Footer() {


  return (
    <div className="h-[10vh] bg-[#242424] flex justify-center items-center text-[11px]">

ColorUI © 2025
 

  
    
    
    </div>
  );
}

export function MobileMenu(){

	return(
		<div className='sm:hidden flex w-full bg-slate-800 fixed transition-all h-[100vh] '>


		</div>
	)
}