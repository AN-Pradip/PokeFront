import GenderButtons from "../components/GenderButtons";
import ShinyButton from "../components/ShinyButton"

function Buttons(){
    return(
        <div className="buttonsContainer">
            <GenderButtons/>
            <ShinyButton />
        </div>
    )
}

export default Buttons;