import {CustomSlider} from "./components/custom-slider";
import {useState} from "react";

function App() {
    const [sliderValueBase, setSliderValueBase] = useState()
    const [sliderValueSomePositions, setSliderValueSomePositions] = useState()
    const [sliderValueRandomWidth, setSliderValueRandomWidth] = useState()
    const handleChangeBase = (value) => {
        setSliderValueBase(value)
    }
    const handleChangeSomePositions = (value) => {
        setSliderValueSomePositions(value)
    }
    const handleChangeRandomWidth = (value) => {
        setSliderValueRandomWidth(value)
    }
    return (
        <div className='container'>
            <h3 className='slider-title'>Custom Range Slider with some options</h3>
            <h2 className='slider-subtitle'>Base range</h2>
            <div className='random-slider-container'>
                <CustomSlider predefinedPositions={[0,1000]}
                              handleChange={handleChangeBase}
                             />
            </div>
            <p className='result'>Range value: {sliderValueBase}</p>

            <h2 className='slider-subtitle'>Range with some predefinedPositions [0,10,20,30,60,100] </h2>
            <div className='random-slider-container'>
                <CustomSlider predefinedPositions={[0,10,20,30,60,100]}
                              handleChange={handleChangeSomePositions}
                />
            </div>
            <p className='result'>Range value: {sliderValueSomePositions}</p>

            <h2 className='slider-subtitle'>Range with random with  250px, 350px</h2>
            <div className='random-slider-container' style={{maxWidth:'250px'}}>
                <CustomSlider predefinedPositions={[0,10,20,30,60,100]}
                              handleChange={handleChangeRandomWidth}
                />
            </div>
            <div className='random-slider-container' style={{maxWidth:'350px'}}>
                <CustomSlider predefinedPositions={[0,100]}
                              handleChange={handleChangeRandomWidth}
                />
            </div>
            <p className='result'>Range value: {sliderValueRandomWidth}</p>

        </div>
    )
}

export default App;
