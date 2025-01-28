import '../css/howWeWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHourglassEnd, faHouseChimneyUser,faHandHoldingDollar, faPeopleArrows, faCubes } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';


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

function HowWeWork() {
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
        <div className='slider'>
            <Swiper spaceBetween={50} slidesPerView={2} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                { 
                    stages.map((stage, i) => { 
                        return (
                            <>
                            <SwiperSlide key={i}>
                                <div className='stages' key={i}>
                                    <div className='stage'>
                                        <span className={i=== 0  ? 'active' : ''} >{stage.item}</span> 
                                        <p className={i=== 0  ? 'active' : ''}>{stage.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                    )
                })
                }
            </Swiper>
        </div>
    </div>
    </>
  );
}

export default HowWeWork;
