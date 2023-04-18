import FloatingIcons from "./FloatingIcons/FloatingIcons";
import FGProfile from "./FGProfile";

export default function Profile() {
    // Separated: FGProfile states affect FloatingIcons state for some reason
    return (
        <>
            <FloatingIcons />
            <FGProfile />
        </>
    )
}