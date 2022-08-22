import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
    {
      img: profilePic2,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
    {
      img: profilePic3,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
    {
      img: profilePic4,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
    {
      img: profilePic5,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
    {
      img: profilePic6,
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitaecongue mauris rhoncus aenean vel elit scelerisque. Inegestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusMattis pellentesque id nibh tortor id a",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="tastimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
