import { HashLoader } from "react-spinners";
import { blue } from "../../styles/colors.ts";

export default function Spinner() {
    return (
        <HashLoader color={blue} size={80} speedMultiplier={2} />
    );
}
