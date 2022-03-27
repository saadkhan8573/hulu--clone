import { ArrowLeftOutlined, ArrowRightAltOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react'

const Slider = () => {
    const [slider, setslider] = useState(["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1", "1"])
    const [slideNumber, setslideNumber] = useState(0)
    console.log(slider)

    const listRef = useRef()
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x + 180.641
        if (direction === "left" && slideNumber > 0) {
            setslideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance}px)`
        } 
        if(direction === "right" && slideNumber < slider.length - 6) {
            setslideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-370 + distance}px)`
        }
        console.log(distance)
    }
    return (
        <>
            <div className="relative">
                <ArrowLeftOutlined onClick={() => handleClick("left")} className="z-30 absolute left-0 w-14 h-28 py-14 px-6 bg-gray-600 cursor-pointer" />
                <div className="flex gap-2 transition-all" ref={listRef}>
                    {
                        slider.map((val,i) => (
                            <div className="w-80 h-28 transition-all bg-white z-20">flexboxSliderflexboxSlider {i}</div>
                        ))
                    }
                </div>
                <ArrowRightAltOutlined onClick={() => handleClick("right")} className="z-30 absolute top-0 right-0 py-14 px-6 bg-gray-600 cursor-pointer" />
            </div>
        </>
    )
}

export default Slider;