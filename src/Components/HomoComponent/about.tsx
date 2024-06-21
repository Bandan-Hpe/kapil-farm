import Image from "next/image";
import kapil from "../../../public/assets/kapil-logo.png";

const About = () => {
  return (
    <div className="mt-10 lg:flex items-center">
      <div className="lg:w-1/3 flex justify-center">
        <Image src={kapil} alt="kapil-logo" />
      </div>
      <div className="lg:w-2/3 px-5  mx-5 h-[500px] hover:shadow-green hover:shadow-md rounded-tl-[100px] rounded-tr-[30px]  rounded-bl-[30px] rounded-br-[100px] flex flex-col justify-center gap-10 sm:mt-5">
        <p className=" lg:text-xl text-green text-justify tracking-wide sm:text-sm">
          Kapil Group started its journey with chit funds in 1981 and ventured
          into real estate in 1982. Since then, it has expanded into 25 diverse
          verticals, including financial services, solar power, agriculture,
          electronic media, construction, print media, business centres,
          hospitality, edtech, and drone technology, among others. Kapil Group
          has consistently broadened its horizons year after year, establishing
          itself as one of the most prestigious business conglomerates in India.
        </p>
        <p className="lg:text-xl  text-green text-justify tracking-wide sm:text-sm">
          With Mruganayani, we present the opportunity to be closer to nature.
          These expansive acres offer a serene escape from the everyday urban
          rush. Our property provides a unique blend of farming and
          vacationing—whether you want to foster farming or spend a few days
          amid the charm of nature with your kids, Mruganayani is your ideal
          location. Experience the luxury of nature in a way only Mruganayani
          can offer. Be Rooted, Be Mruganayani!
        </p>
      </div>
    </div>
  );
};

export default About;
