"use client"
import Image from "next/image";
import '../app/globals.css';
import { useState } from "react"; 



export default function Home() {
  const [expend, setExpend] = useState(false);
  
  const toggleMenu = () =>{
    setExpend(!expend)
  }
  return (
    <div >
      <div className="border-[3px] bg-cover bg-center w-[100%] relative bg-[url('/Rectangle.png')]">
                                                              
        <div  className="flex justify-start md:justify-end font-sans w-[100%] p-[10px]">
          {/* <div className="border-[1px] flex flex-col items-end w-[100%] md:p-[22px]"> */}
          
            <button className="block md:hidden border-[2px] border-stone-300 rounded-[3px]" onClick={toggleMenu}>
              <Image src="./menu.svg" width={30} height={30}></Image>
            </button>
              
            <nav className="border-[1px] p-[5px] w-[80%]">
              <div className="flex border-[1px] justify-around items-center flex-col md:flex-row">            
                <p >Website Services</p>
                <p >Oriention</p>
                <p >Programming</p>
                <p >team</p>
                <p > team</p>
                <button className="bg-[#F84646] text-[white] p-[10px] rounded-[4px]">Contact Us</button>
              </div>  
            </nav>
          {/* </div> */}
        </div>
        <div className="w-[100%] p-[18px] md:p-[68px] flex justify-center flex-col" >
          <div className="w-[100%] md:w-[50%] ml-[1px] md:ml-[64px] font-[sans-serif] p-[18px]">
            <h1 className="leading-[1.2] text-[42px] md:text-[60px] font-bold leading-tight text-center md:text-start" >
            23 Years of Experience in Website Development
            </h1>
            <p className="text-[12px] md:text-[20px] mt-[20px] leading-tight text-center md:text-start">
               We provide professional website setup and development services, including website construction and functional website development, with over 23 years of experience in the tech field.
               </p>
            <div className="flex bg-[white] mt-[48px] md:mt-[20px] p-[5px] w-[100%] md:w-[72%] justify-around rounded-md">
              <input className="w-[100%]" placeholder="Subscribe to our email newsletter"></input>
              <button style={{backgroundColor:'#F84646', color:'white',padding:'14px', width:'90px', borderRadius:'7px'}}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
       {/* page.2-特色 */}
      <div className="flex w-[100%] border-[1px] border-solid border-gray flex-col items-center font-sans">
        <div className="w-[90%] md:w-[85%] flex flex-col p-[20px] justify-center border-[1px] border-solid border-gray items-center"> 
        <div className="w-[100%] md:w-[80%] flex flex-col items-center leading-none justify-items-center ">
            <h1 className="text-[24px] md:text-4xl font-extrabold p-[20px]">Feature</h1>
            <p className="text-[12px] md:text-[24px] leading-[1.5] text-center p-[10px]">
            Experience our comprehensive range of services tailored to meet your business needs. From meticulous project management to rigorous test management, our expert teams ensure the highest standards of quality across diverse sectors.
              </p>       
        </div>
            <div className="w-[100%] md:w-[85%] flex flex-col md:flex-row md:p-[30px] justify-center content-center text-[18px]" style={{ border:'1px solid gray', }}>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center text-center">
                  <Image src='./shopping-cart.svg' width={100} height={100} alt='shopping' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold" >User-Friendly Interface</h3>
                  <p className="mt-[5px]">We provide an intuitive and easy-to-use interface, allowing you to effortlessly manage your website content and functionality.</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center text-center">
                  <Image src='./computer.svg' width={100} height={100} alt='computer' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold">Customized Design</h3>
                  <p className="mt-[5px]">We tailor unique website designs based on your requirements and brand image, ensuring a perfect match with your brand style.</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center text-center">
                  <Image src='./search-glass.svg' width={100} height={100} alt='search' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold">Responsive Layout</h3>
                  <p className="mt-[5px]">Our website designs feature responsive layouts that seamlessly adapt to various devices, providing users with a consistent browsing experience.</p>
              </div>  
          </div>
          <div className="w-[100%] md:w-[85%] flex flex-col md:flex-row p-[20px] justify-start content-center text-[18px]" style={{ border:'1px solid gray', }}>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center  text-center">
                  <Image src='./book.svg' width={100} height={100} alt='book' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold">Powerful Functionality</h3>
                  <p className="mt-[5px]">We offer a wide range of functional modules to meet your diverse business needs, making your website functionality more robust.</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center text-center">
                  <Image src='./calendar.svg' width={100} height={100} alt='calendar' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold">Secure and Reliable</h3>
                  <p className="mt-[5px]">We employ advanced security technologies and measures to ensure the safety and reliability of your website data and user information, allowing you to use it with confidence.</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-1/3 p-[20px] items-center text-center">
                  <Image src='./lock.svg' width={100} height={100} alt='lock' className="p-[16px]"></Image>
                  <h3 className="text-[24px] font-extrabold">Fast Deployment</h3>
                  <p className="mt-[5px]">With our efficient development team and processes, we can quickly respond to your needs, enabling your website to go live rapidly and gain a competitive edge.</p>
              </div>  
          </div>
        </div>
      </div>
      {/* 橘色流程??? */}
      <div className="bg-[#F84646] flex flex-col items-center p-[48px] text-white w-[100%]">
        <div className="p-[20px] items-center text-center">
            <h1 className="text-[48px] text-extrabold">What's we offer for?</h1>
            <p className="p-[10px]">IoT support</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-[80%] text-[18px]">
           <div className="flex justify-center p-[9px] text-[18px] text-bold md:w-1/3">
              <p className="text-center">We customize solutions to fit your needs.</p>
            </div>
            <div className="flex justify-center p-[9px]">
              <Image src='./arrow-right.svg' width={32} height={32} alt='arrow'></Image>
            </div>
            <div className="flex justify-center p-[9px] md:w-1/3">
              <p className="text-center">Experienced professionals lead project management and testing.</p>
            </div>
            <div className="flex justify-center p-[9px]">
              <Image src='./arrow-right.svg' width={32} height={32} alt='arrow'></Image>
            </div>
            <div className="flex justify-center p-[9px] md:w-1/3">
              <p className="text-center">We ensure high-quality standards.</p>
            </div>
            <div className="flex justify-center p-[9px] ">
              <Image src='./arrow-right.svg' width={32} height={32} alt='arrow'></Image>
            </div>
            <div className="flex justify-center p-[9px] md:w-1/3">
              <p className="text-center">We work closely with you for ongoing improvement.</p>
            </div>
        </div>
      </div>
      {/* 公司介紹圖片??? */}
      <div>
        <div>
          <div>
             <h1>Quality and process management</h1>
           </div>
           <div>
            <Image></Image>
           </div>
        </div>
      </div>



    </div>
  );
}
