import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import testimonialsData from '../../../Data/testimonials.json';
import TestimonialCard from './Components/TestimonialCard';

const NavigationBtn = ({ className = '', type = '', iconDir = '' }) => {
    return (
        <button
            title='Previous Slide'
            className={`w-10 h-10 leading-10 text-center bg-white rounded-md shadow-sm text-primary text-xl disabled:opacity-65 transition ${className}`}
        >
            <i className={`fa-solid fa-angle-${iconDir} fa-fw`}></i>
            <span className='sr-only'>{type} Button</span>
        </button>
    )
};

function TestimonialsSection() {
    return (
        <section className="testimonials-section bg-section py-10" id="testimonials">
            <div className="container">
                {/* Title */}
                <h2 className="text-center font-semibold text-2xl mb-10">Clients Testimonial</h2>
                {/* Testimonials Slier Wrapper */}
                <div className='testimonials-slider-wrapper flex items-center gap-7'>
                    {/* Previous Button */}
                    <NavigationBtn
                        className='custom-prev'
                        iconDir='left'
                        type='Previous'
                    />
                    {/* Testimonial Slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 2
                            },
                            1280: {
                                slidesPerView: 3
                            }
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        className='flex-1'
                    >
                        {
                            testimonialsData.map((testimonial, index) => (<SwiperSlide key={index}>
                                <TestimonialCard testimonialData={testimonial} />
                            </SwiperSlide>))
                        }
                    </Swiper>
                    {/* Next Button */}
                    <NavigationBtn
                        className='custom-next'
                        iconDir='right'
                        type='Next'
                    />
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;