import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from '../utils';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const HiLight = () => {

    const ref = useRef();

    useGSAP(()=> {

        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#title', {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#title',
                start: 'top 90%',
                end: '25% 92%',
                markers: true,
                toggleActions: 'restart none reverse none'
            }
        }),
        
        gsap.to('#lii', {
            y: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: '#lii',
                start: 'top 85%',
                end: '20% 87%',
                // markers: true,
                toggleActions: 'restart none reverse none'
            }
        }),

        gsap.to('#lii2', {
            y: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: '#lii2',
                start: 'top 75%',
                end: '20% 77%',
                // markers: true,
                toggleActions: 'restart none reverse none'
            }
        })
        // gsap.to('#lii', {
        //     y: -50
        // })
    }, [])
    // useGSAP(()=>{
    //     const Texts = gsap.utils.toArray(ref.current.children);

    //     Texts.forEach((text)=>[
    //         gsap.to(text,{
    //             y: -50,
    //             opacity:1,
    //             stagger: 0.25,
    //             // transitionDuration: 2,
    //             // delay: 10,
    //             scrollTrigger:{
    //                 trigger:text,
    //                 // start:'bottom bottom',
    //                 // end:' top 10%',
    //                 scrub:true,
    //             }
    //         })
    //     ]);
    // },{scope:ref})

    return (
        <section className="bg-zinc w-screen h-full overflow-hidden common-padding">
            <div className="screen-max-width">
                <div className="mb-12 md:flex items-end justify-between">
                    <h1 id='title' className="section-heading">Get the highlights</h1>
                    <div className='flex gap-5 flex-wrap items-end'>
                        <p id='lii' className='link flex items-center translate-y-20'>
                            Watch the film
                            <img src={watchImg} alt='watchImg' className='ml-2' />
                        </p>
                        <p id='lii2' className='link flex items-center translate-y-20'>
                            Watch the event
                            <img src={rightImg} alt='right' className='ml-2 mt-1' />
                        </p>
                    </div>
                </div>
                <div style={{height:'400px'}}>

                </div>
            </div>
        </section>
    )
}

export default HiLight;