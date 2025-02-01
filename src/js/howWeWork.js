import '../css/howWeWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHourglassEnd, faHouseChimneyUser,faHandHoldingDollar, faPeopleArrows, faCubes } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import slide1 from "../assets/howWeWork/slide1.png";
import slide2 from "../assets/howWeWork/slide2.png";
import slide3 from "../assets/howWeWork/slide3.png";
import slide4 from "../assets/howWeWork/slide4.png";
import slide5 from "../assets/howWeWork/slide5.png";
import slide6 from "../assets/howWeWork/slide6.png";
import slide7 from "../assets/howWeWork/slide7.png";
import slide8 from "../assets/howWeWork/slide8.png";
import slide9 from "../assets/howWeWork/slide9.png";


const stages = [
    { id:'1', item:'1', text:'Online Consultation' },
    { id:'2', item:'2', text:'Approximate Quotation' },
    { id:'3', item:'3', text:'In Person Discussion' },
    { id:'4', item:'4', text:'Advance Booking' },
    { id:'5', item:'5', text:'2D/3D Design' },
    { id:'6', item:'6', text:'Material Presentation' },
    { id:'7', item:'7', text:'Final Quotation' },
    { id:'8', item:'8', text:'Execution Begins' },
    { id:'9', item:'9', text:'Project Handover' }
];
const workSteps = [
    { id:'1', desc: 'Ready to assist you regarding all things related to home interiors.', heading:'Online Consultation', url:'#', imgsrc:slide1},
    { id:'2', desc: 'Provides budget-conscious planning for a future-ready outcome.', heading:'Approximate Quotation', url:'#', imgsrc:slide2},
    { id:'3', desc: 'Meet in person for a clearer understanding of your requirements.', heading:'In Person Discussion', url:'#', imgsrc:slide3},
    { id:'4', desc: 'Book your time slot early to ensure efficient planning of your interiors.', heading:'Advance Booking', url:'#', imgsrc:slide4},
    { id:'5', desc: 'Avail digital 2D &amp; 3D visuals for a clear glimpse of your future home design.', heading:'2D/3D Design', url:'#', imgsrc:slide5},
    { id:'6', desc: 'Get a glimpse of real material samples to be used in your interior decor.', heading:'Material Presentation', url:'#', imgsrc:slide6},
    { id:'7', desc: 'Customise the quote to your preference, budget, and design execution viability. ', heading:'Final Quotation', url:'#', imgsrc:slide7},
    { id:'8', desc: 'Shape your vision and breathe life into your interior decor dreams.', heading:'Execution Begins', url:'#', imgsrc:slide8},
    { id:'9', desc: 'Shape your vision and breathe life into your interior decor dreams.', heading:'Project Handover', url:'#', imgsrc:slide9}
];

function HowWeWork() {
    const swiperRef = useRef(null); // Reference to Swiper instance
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Function to go to a specific slide
    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };
    return (
      <>
      <div className='mid-sec'>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faCouch} size="2x" color="red" />
            <p>ModernInterior Design</p>
        </div>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faCubes} size="2x" color="red" />
            <p>Customised To Your Taste</p>
        </div>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faPeopleArrows} size="2x" color="red" />  
            <p>Free Consultation & Budgeting</p>
        </div>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" color="red" />
            <p>TransparentMaterial Pricing</p>
        </div>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faHouseChimneyUser} size="2x" color="red" />
            <p>Professionally-led Execution</p>
        </div>
        <div className='serv-list'>
            <FontAwesomeIcon icon={faHourglassEnd} size="2x" color="red" />
            <p>On-time Delivery</p>
        </div>
    </div>
    <div className='howWeWork-sec'>
        <p className='heading'>How We <span>Work</span></p>
        <div className='container-div'>
            <Swiper className='main-swiper' scrollbar-clickable="true" mousewheel-invert="true" spaceBetween={50} slidesPerView={2} onSlideChange={
                (swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    goToSlide(swiper.activeIndex);
                }} 
                onSwiper={(swiper) => { }}>
                { 
                    stages.map((stage, i) => { 
                        return (
                            <>
                            <SwiperSlide key={i}>
                                <div className={`${activeIndex === i ? 'active' : ''} stages`} key={i}>
                                    <div className='stage' slot={stage.text} onClick={() => goToSlide(i)}>
                                        <span className={activeIndex === i  ? 'active' : ''} >{stage.item}</span> 
                                        <p className={activeIndex === i  ? 'active' : ''}>{stage.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                    )
                })
                }
            </Swiper>
            <div className="carousal-main">
                <Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1} modules={[Navigation]} navigation className="carousal-swiper rounded-lg">
                    {
                        workSteps.map((step, i) => {
                            return (
                                <>
                                    <SwiperSlide  key={i} className="actual-slide p-6 bg-gray-100">
                                        <div className='text-sec'>
                                            <h3 className="text-xl font-bold mb-2">{step.heading}</h3>
                                            <p>{step.desc}</p>
                                            <div className='knowMore'>
                                                <a className="custBtn hvr-sweep-to-right clr-black" href={step.url}>Know More</a>
                                            </div>
                                        </div>
                                        <div className='img-sec'>
                                            <img src={step.imgsrc} alt={step.imgsrc} />
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    </div>
    </>
  );
}

export default HowWeWork;
