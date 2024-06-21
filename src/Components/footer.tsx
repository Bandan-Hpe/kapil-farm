import footer from "../../public/assets/footer.png";
import Image from "next/image";
import footerlogo from "../../public/assets/logo/white.png";
import Link from "next/link";
import fb from "./../../public/assets/icons/fb.png";
import insta from "./../../public/assets/icons/insta.png";
import ln from "./../../public/assets/icons/ln.png";
import Qr from "./../../public/assets/QRcode.png";
const Footer = () => {
  return (
    <footer className=" text-zinc-400 ">
      <Image src={footer} alt="footerimg" />
      <section className="bg-[#0C352C]  px-10 py-5">
        <div className="md:flex ">
          <div className="md:w-1/2">
            <Image src={footerlogo} alt="logo" />
            <p className="text-white w-96 mt-3">
              Kapil Farms presents an exceptional opportunity to experience
              tranquility away from the fast-paced urban environment.
            </p>
          </div>
          <div className="md:w-1/2 flex  flex-col md:items-end sm:items-start sm:mt-5">
            <button className="bg-white text-green px-2 py-2 font-bold rounded-full">
              Subscribe Now
            </button>
            <p className="text-white mt-2">
              Don’t miss our future updates. Subscribe right away.
            </p>
            <ul className="flex gap-5 mt-2">
              <li>
                <Link href="#">
                  <Image src={fb} alt="fb" className="w-10" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={insta} alt="insta" className="w-10"/>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={ln} alt="ln" className="w-10"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex mt-5">
          <div className="md:w-2/3">
            <Image src={Qr} alt="qr" className="w-40" />
            <p className="text-white text-md mt-2">For more info scan here<br/> Number - 9705311222</p>
          </div>
          <div className="md:w-2/3 flex flex-col justify-end py-5 sm:hidden md:block lg:block">
            <h1 className="text-3xl font-bold text-[#7ABF4E] tracking-wide text-right">
              QUICK LINKS
            </h1>
            <ul className="flex justify-between mt-2">
              <li>
                <Link href="#" className="text-white uppercase">
                  who are we
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  HIGHLIGHTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  Farmland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
