import './style.scss'
import {useEffect, useRef, useState} from "react";

export const CustomSlider = ({handleChange, value, predefinedPositions}) => {

    const sliderThumb = useRef(null)
    const [minMax, setMinMaxValue] = useState({min: 0, max: 0})
    const [thumbValue, setThumbValue] = useState(value | 0)

    //  getting min and  max value vor slider  range
    //  detect value position outside predefinedPositions

    useEffect(() => {
        let min = Math.min(...predefinedPositions)
        let max = Math.max(...predefinedPositions)
        setMinMaxValue({min, max})
        if (value > max) {
            setThumbValue(max)
        }

        if (value < min) {
            setThumbValue(min)
        }
    }, [predefinedPositions]);

    const handleChangeThumb = (e) => {
        e.preventDefault();
        e.stopPropagation()
        document.addEventListener('mousemove', onMouseMoveMax);
        document.addEventListener('mouseup', onMouseUpMax);
    };

    const onMouseMoveMax = (e) => {
        const dragWidth = e.clientX - sliderThumb.current.offsetLeft;
        const dragWidthInPercent = (dragWidth * 100) / sliderThumb.current.clientWidth;
        const currentMax = Math.abs(parseInt((minMax.max * dragWidthInPercent) / 100));

        if (currentMax <= minMax.max && currentMax >= minMax.min &&
            e.clientX >= sliderThumb.current.offsetLeft &&
            e.clientX <= sliderThumb.current.offsetLeft + sliderThumb.current.clientWidth) {
            setThumbValue(currentMax)
            handleChange(currentMax)
        }
    }

    // removing addEventListener
    const onMouseUpMax = () => {
        document.removeEventListener('mousemove', onMouseMoveMax);
    }

    return <div className='slider-block'>
        <div className='slider-track' ref={sliderThumb} onClick={onMouseMoveMax}>
            <div className='positions'>
                {predefinedPositions.map((item, index) => {
                    return <span onClick={() => {
                        setThumbValue(item)
                        handleChange(item)
                    }} style={{left: `${item * 100 / minMax.max}%`}} key={index}>{item}</span>
                })}
            </div>
            <div className='slider-thumb' style={{width: `${(thumbValue * 100 / minMax.max) + 2}%`}}>
                <span className='slider-circle' onMouseDown={handleChangeThumb}>
                    <span className='current-value'>{thumbValue}</span>
                </span>
            </div>
        </div>
    </div>

}
