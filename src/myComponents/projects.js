// import React from 'react'
// import Slider from "react-slick";
// import Calcimage from "./Images/project-calc.png"
// import Rocketimage from "./Images/project-rocket.png"
// import Shopimage from "./Images/project-shop.png" 
// import Portfolioimage from "./Images/project-portfolio.jpg"


// export default function projects() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <>
      // <div className="section-seprator" id='projects' data-aos="fade-in">
      //   <span className="section-head" id="about">projects</span>
      //   <span className="section-sub-head">my works!</span>
      //   <img className="section-divider"
      //     src={SectionDivider} alt="" />
      // </div>
//       <div className='section-parent'>
//       {/* <Slider {...settings}> */}
//         <div className='project-head-card'>
//           <div className="card project-card">
//             <img className="card-img-top" src={Shopimage} />
//             <div className="card-body">
//               <h4 className="card-title">E-Commerce Website</h4>
//               <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
//               <p className="card-text">Designed and implemented a responsive website for my independent jewellery store, highlighting proficiency in React, HTML,
//                 and CSS. Delivered a seamless user experience, showcasing expertise in web development and user interface design.</p>
//               <a href="https://jaiprakashornamenthouse.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore </a>
//             </div>
//           </div>
//           <div className="card project-card">
//             <img className="card-img-top" src={Portfolioimage} />
//             <div className="card-body">
//               <h4 className="card-title">Portfolio Website</h4>
//               <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
//               <p className="card-text">Showcased advanced HTML, CSS, and JavaScript skills in responsive web design, creating dynamic, user-friendly interfaces,
//                 demonstrating elevated development expertise.</p>
//               <a href="#top" className="btn btn-dark text-white">You are there!</a>
//             </div>
//           </div>
//           <div className="card project-card">
//             <img className="card-img-top" src={Rocketimage} />
//             <div className="card-body">
//               <h4 className="card-title">RocketMan Website</h4>
//               <h6 className="card-subtitle mb-2 text-muted">Tech Used: HTML | CSS</h6>
//               <p className="card-text">Leveraged extensive knowledge to architect and develop a HTML/CSS
//                 website, gaining practical acumen to address realworld challenges, enhancing teamwork and personal growth.</p>
//               <a href="https://rocketman2001.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore</a>
//             </div>
//           </div>
//           <div className="card project-card">
//             <img className="card-img-top" src={Calcimage} />
//             <div className="card-body">
//               <h4 className="card-title">Basic Calculator</h4>
//               <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
//               <p className="card-text">Developed a basic calculator application using React, demonstrating proficiency in state management, user input handling, and implementing interactive features to enhance functionality and user experience.
//               </p>
//               <a href="https://basi-c-alc.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore</a>
//             </div>
//           </div>
//         </div>
//         {/* </Slider> */}
//       </div>
//     </>

//   )
// }


import Slider from "react-slick";
import SectionDivider from "./Images/divider.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: false,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 800,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="section-seprator" id='projects' data-aos="fade-in">
        <span className="section-head" id="about">projects</span>
        <span className="section-sub-head">my works!</span>
        <img className="section-divider" src={SectionDivider} alt="" />
      </div>

      <div className = "section_container" >
      <div className="section">
      <Slider {...settings}>
        {project.map((p) => (
         <div className = "card_container">
          <div className="img_container">
            <img src={p.img} alt="" className = "project_img"/>
          </div>

          <div className= "desc_container" >
            <h4 className= "project_name">{p.name}</h4>
            <h6 className="project_subtitle">Tech Used: {p.tech}</h6>
            <p className='desc_body'>{p.desc}</p>
            <a href={p.web} className='btn btn-dark text-white'>Explore</a>
          </div>
         </div>
         
        ))}
      </Slider> 
      </div>
    </div>
      </>
    
    
  );
}

const project = [
  {
    name: "E-commerce Website",
    img: `/project_images/project-shop.png`,
    tech: "ReactJs | Bootstrap | HTML | CSS",
    desc: "Designed and implemented a responsive website for my independent jewellery store, highlighting proficiency in React, HTML, and CSS. Delivered a seamless user experience, showcasing expertise in web development and user interface design.",
    web : "https://jaiprakashornamenthouse.netlify.app/"
  },
  {
    name: "Portfolio Website",
    img: `/project_images/project-portfolio.jpg`,
    tech: "ReactJs | Bootstrap | HTML | CSS",
    desc: "Designed and implemented a responsive website for my independent jewellery store, highlighting proficiency in React, HTML, and CSS. Delivered a seamless user experience, showcasing expertise in web development and user interface design.",
    web : "https://jaiprakashornamenthouse.netlify.app/"
  },
  {
    name: "RocketMan Website",
    img: `/project_images/project-rocket.png`,
    tech: "HTML | CSS",
    desc: "Leveraged extensive knowledge to architect and develop a HTML/CSS website, gaining practical acumen to address realworld challenges, enhancing teamwork and personal growth.",
    web : "https://rocketman2001.netlify.app/"
  },
  {
    name: "Basic Calculator",
    img: `/project_images/project-calc.png`,
    tech: "ReactJs | Bootstrap | HTML | CSS",
    desc: "Developed a basic calculator application using React, demonstrating proficiency in state management, user input handling, and implementing interactive features to enhance functionality and user experience.",
    web : "https://basi-c-alc.netlify.app/"
  },
  {
    name: "TIC-TAC-TOE Game",
    img: `/project_images/project-calc.png`,
    tech: "HTML | CSS | Javascript",
    desc: "Created a responsive Tic-Tac-Toe game demonstrating strong proficiency in JavaScript, interactive design, and adaptability for various devices, highlighting skills in web development and user-friendly interfaces.",
    web : "https://tictactoe-aryan.netlify.app/"
  }
]