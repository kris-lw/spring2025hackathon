import Benefactor from "./Benefactor";
// FIXME: implement ID calls for imports below
import Agent from "./Agent";
import Counselor from "./Counselor";

export default ReviewForm = () => {
    const [id, setId] = useState(Benefactor.getID());
    const [review, setreview] = useState("");
    const [apprRate, setApprRate] = useState(0); // 0-100%

    getID = () => {
        return id;
    };

    getInfo = () => {
        return {
            id: id,
            review: review,
            apprRate: apprRate,
        };
    };

    // call to this when handling submit button click within page
    submit = () => {
        console.log(getInfo());
        console.log("Appointment submitted!");
    };
}