import React from 'react'
import * as R from 'ramda'
//Hint Use R.map is a pure function for map array
// https://ramdajs.com/docs/#map

const RenderRamda = ({ Bear }) => <h1 className="text">Pls use R.map and fix code herer</h1> /*** Fix Here TEST 1 R.map***/

const ChildComponent = ({ code, subject }) => <p className="text" key={code + subject}>Code:{code} Subject:{subject}</p>

const whoAmI = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
var yellGreeting = R.compose(R.toUpper, whoAmI)

const RamdaMapComponent = (props) => (
    <div className="container">
        <div id="count">
            <RenderRamda {...props} />
        </div>

        <div classname="containcar">
            {/* TEST 2 HINT props.car ={ vihecal: { car: { lambogini: 'Aventador' } }} place "Aventador" by R.path  */}
            <h1 className="text path">Write R.path to Aventador</h1>
        </div>
        <div>
            {/*TEST 3 Test function how to use function yellGreeting to show "THE NAME'S DO, JOHN DO" in .text */}
            <h1 className="text">I DON"T KNOW WHO AM I</h1>
        </div>
    </div >
)


export default RamdaMapComponent