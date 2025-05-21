import { GoArrowUpRight, GoMail } from "react-icons/go"
import { Link } from "react-router-dom"
import { FaCopyright, FaMapLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { footerLinks, socialLinks } from "../../utils/staticData";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer 
    className=" pt-28 relative"
    style={{background:'linear-gradient(to bottom,white 0% , white 25%, #181818 25% , #181818 100%)'}}
    >
      {/* <img src="/ptn-2-invert.png" className=" absolute  h-[60%] right-0 opacity-25 bottom-0 object-cover" alt="" /> */}
        <div className="main">
            <div className=" w-full p-14 bg-secondary rounded-2xl flex flex-col md:flex-row justify-between gap-16">
                <div className=" md:w-[40%]">
                    <h1 className=" !font-heading text-4xl font-bold text-white">Don’t Miss Awesome Story From Our Alumni</h1>
                </div>
                <div className="md:w-[40%] flex gap-5 flex-col lg:flex-row">
                <input type="text" name="" id="" placeholder="Enter Your Mail" className=" rounded-2xl placeholder-white placeholder:font-medium text-white border m-auto w-full font-medium p-5  border-white" />
                    <Link className=" bg-primary m-auto p-5 rounded-2xl w-full text-center font-medium border-primary border text-white flex gap-3 items-center justify-center capitalize " to={'/'}>subscribe <GoArrowUpRight className=" text-xl"/> </Link>
                </div>
            </div>
            <div className=" py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
                <div className=" space-y-7">
                    <Logo logoStyle={''} textStyle={'text-white'}/>
                    <div className=" space-y-7">
                        <p className=" text-paragraph leading-relaxed capitalize">We are passionate education dedicated to providing high-quality resources learners all backgrounds.</p>
                        <div className="social flex items-center gap-5">
                            {socialLinks.map((item,index)=>{
                                const Icon = item.icon
                                return(
                                    <Link className=" text-paragraph border border-paragraph rounded-xl  p-2" key={index} to={item.path}><Icon/></Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className=" space-y-7 xl:mx-auto">
                    <h2 className=" text-white text-lg font-medium capitalize !font-heading underline underline-offset-[12px] decoration-primary">our campus</h2>
                    <ul className='text-paragraph  capitalize space-y-3 '>
                        {footerLinks.col1.map((item,index)=>(
                            <li className=" hover:text-primary duration-300 transition-all" key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" space-y-7">
                    <h2 className=" text-white text-lg font-medium capitalize !font-heading underline underline-offset-[12px] decoration-primary">our pages</h2>
                    <ul className='text-paragraph  capitalize space-y-3 '>
                        {footerLinks.col2.map((item,index)=>(
                            <li className=" hover:text-primary duration-300 transition-all" key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="  space-y-7">
                    <h2 className=" text-white text-lg font-medium capitalize !font-heading underline underline-offset-[12px] decoration-primary">get in touch</h2>
                    <div className="address space-y-4 text-paragraph ">
                            <h3 className=" flex gap-3 capitalize leading-relaxed"> <FaMapLocationDot className=" mt-1"/>  Dr. E.M. Abdullah Campus, <br />
                            madurai - rameshwaram road, landhai, <br />
                            ramanathapuram <br />
                            tamilnadu - 623 502</h3>
                            <h3 className=" flex items-center gap-3"> <MdLocalPhone/> +91 9786221304</h3>
                            <h3 className=" flex items-center gap-3"> <GoMail/>contact@syedengg.ac.in</h3>
                        </div>
                </div>
            </div>
        </div>
        <div className="main p-[.1px] bg-paragraph mt-5"></div>
        <div className="flex main justify-center py-7">
                <h3 className=" text-paragraph flex gap-4 items-center">Copyright <FaCopyright/> syedengg.ac.in</h3>
            </div>
    </footer>
  )
}

export default Footer