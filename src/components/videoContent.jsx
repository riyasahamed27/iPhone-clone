import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

export default function VideoContent(){
    const videoRef = useRef([]);
    const videoDivRef = useRef([]);
    const videoSpanRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        isStart: false,
        isPlaying: false,
        islast: false,
        videoId: 0
    });

    const {isEnd, isStart, isPlaying, islast, videoId} = video;

    useEffect(()=> {
        const currentProgress = 0;
        const span = videoSpanRef.current;

        if(span[videoId]){
            let anim = gsap.to(span[videoId], {
                onUpdate: ()=> {},
                onComplete: ()=> {}
            })
        }
    }, [])
    return(
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((video, id)=> (
                    <div key={video.id} className="sm:pr-20 pr-10" id="slider">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video id="video" playsInline={true} preload="auto" muted>
                                    <source src={video.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute top-12 left-[5%] z-10">
                                {video.textLists.map((text)=> (
                                    <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}