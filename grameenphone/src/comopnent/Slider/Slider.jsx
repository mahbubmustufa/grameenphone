import { useEffect, useRef, useState } from "react";
let count = 0;

const sliderImg = [
    "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    "https://e0.pxfuel.com/wallpapers/176/892/desktop-wallpaper-taylor-swift-beautiful-and-famous-singer-dual-wide-widescreen-16-9-widescreen-taylor-swift-lover.jpg",
    "https://media.gettyimages.com/id/1474302747/photo/opening-night-of-taylor-swift-the-eras-tour.jpg?s=1024x1024&w=gi&k=20&c=e6eQ8CO7Tzx2P2aKjCwC6aH8bvZhx9jJWA3V1NqLli4=",
    "https://www.syndicationbureau.com/wp-content/uploads/2023/10/33WZ4YW-highres-1024x683.jpg",
    "https://hd.wallpaperswide.com/thumbs/tiger_cub-t2.jpg"
]

export default function Slider(){

    const [index, setInsex] = useState(0);
    const slideRef = useRef();
    const removeAnimation = ()=>{
        slideRef.current.classList.remove("fade-anim");
    }
    useEffect(()=>{
        slideRef.current.addEventListener("animationend", removeAnimation)
        // startSlider();
    },[])
    const startSlider =()=>{
        setInterval(()=>{
            handleOnNextClick();
        },5000);
    }




    const handleOnNextClick=()=>{
        const imgLength = sliderImg.length;
        count = (count + 1) % imgLength;
        setInsex(count);
        slideRef.current.classList.add("fade-anim")
    }
    const handleOnPrevClick=()=>{
        const imgLength = sliderImg.length;
        count = (index  + imgLength - 1) % imgLength;
        setInsex(count)
    }

    console.log(slideRef)

    return(
        <>
            <div ref={slideRef} className="w-full select-none relative">
                <div className="aspect-w-16 aspect-h-9">
                    <img className="" src={sliderImg[index]} alt="" />
                </div>
                <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 px-3">
                    <button onClick={handleOnPrevClick} className="bg-gray-900 rounded-lg px-2 py-1 opacity-70 text-white hover:opacity-90">Previous</button>
                    <button onClick={handleOnNextClick} className="bg-gray-900 rounded-lg px-2 py-1 opacity-50 text-white hover:opacity-90">Next</button>
                </div>
            </div>
        </>
    );
}