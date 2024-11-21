import Bedroom from "./Bedroom/Bedroom.jsx";
import Kitchen from "./Kitchen/Kitchen.jsx";
import Bath from "./Bath/Bath.jsx";
import LivingRoom from "./LivingRoom/LivingRoom.jsx";

const FloorPlan = () => {
    return (
        <div>
            <Bedroom bedNum="1" />
            <Kitchen />
            <Bath size="Full" />
            <Bedroom bedNum="2" />
            <LivingRoom />
            <Bath size="Half" />
            <Bedroom bedNum="3" />
        </div>
    );
};

export default FloorPlan;