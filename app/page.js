import Image from "next/image";
import '../app/globals.css';
import computer from '../public/computer.jpg';
import Rectangle from '../public/Rectangle.png'


export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-center w-screen border-solid border-gray-400 relative"
           style={{ backgroundImage: 'url(/Rectangle.png)', border:'1px solid gray' }}>      
        <div  className="flex justify-end font-sans">
          <nav className="flex w-4/6 p-[30px]"style={{border:'1px solid gray'}}>
            <div className="font-bold flex items-center w-full justify-around text-sm" style={{border:'1px solid gray'}}>             
                <p>Solutions & Service</p>
                <p>Products</p>
                <p>Teck</p>
                <p>team</p>
                <p>Program</p>             
                <button style={{backgroundColor:'#F84646', color:'white',padding:'10px'}}>Contact Us</button>
            </div>
          </nav>
        </div>
        <div className="border-[1px] border-solid border-gray w-[100%] p-[10px] md:p-[68px] flex justify-center flex-col" >
          <div className="w-[100%] md:w-[50%] border-[1px] border-solid border-gray ml-[1px] md:ml-[64px] font-[sans-serif] p-[18px]">
            <h1 className="leading-[1.2]" style={{fontSize:'60px', fontWeight:700, lineHeight:1.2}}>There's 23 years experience in tech field</h1>
            <p style={{fontSize:'20px', marginTop:'20px', lineHeight:1.6}}>We offer Project Management, Business Analysis, and Test Management services with our expert teams who have gained experience in various sectors to ensure our customers maintain high levels of quality.</p>
            <div style={{backgroundColor:'white', marginTop:'20px', padding:'5px', width:'70%', justifyContent:'space-between', borderRadius:'5px', display:'flex'}}>
              <input placeholder="訂閱我們的電子郵件通訊"></input>
              <button style={{backgroundColor:'#F84646', color:'white',padding:'14px', width:'90px', borderRadius:'7px'}}>確認</button>
            </div>
          </div>
        </div>
      </div>
      {/* page.2-特色 */}
      <div className="flex border-[1px] border-solid border-gray flex-col items-center font-sans">
        <div className="w-[85%] flex flex-col p-[20px] justify-center border-[1px] border-solid border-gray items-center"> 
        <div className="w-[70%] flex flex-col items-center leading-none justify-items-center ">
            <h1 className="text-4xl font-extrabold">Analysis</h1>
            <p className="text-2xl leading-[1.5] text-center p-[10px]">
              In order for our customers to maintain high quality levels, we offer Project Management, Business Analysis and Test Management services with our expert staff who have gained experience in different sectors.
              </p>       
        </div>
            <div className="w-[85%] flex p-[30px] justify-center content-center" style={{ border:'1px solid gray', }}>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-items-center ">
                  <Image src='./shopping-cart.svg' width={100} height={100} alt='shopping'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-items-center">
                  <Image src='./computer.svg' width={100} height={100} alt='computer'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-items-center">
                  <Image src='./search-glass.svg' width={100} height={100} alt='search'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              </div>  
          </div>
          <div className="w-[85%] flex p-[20px] justify-center content-center" style={{ border:'1px solid gray', }}>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-center">
                  <Image src='./book.svg' width={100} height={100} alt='book'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-items-center">
                  <Image src='./calendar.svg' width={100} height={100} alt='calendar'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex flex-col w-1/3 p-[20px] items-center justify-items-center">
                  <Image src='./lock.svg' width={100} height={100} alt='lock'></Image>
                  <h3 >Process</h3>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              </div>  
          </div>
          



          
        </div>
      </div>
    </div>
  );
}
