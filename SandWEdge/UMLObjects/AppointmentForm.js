import Benefactor from "./Benefactor";
import GovtAgency from "./GovtAgency";

export default AppointmentForm = () => {
    const [id, setId] = useState(GovtAgency.getID());
    const [benefactorID, setBenefactorID] = useState(Benefactor.getID());
    const [date, setDate] = useState("");
    const [isActive, toggleStatus] = useState(true); // true = active, false = inactive
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    getID = () => {
        id = GovtAgency.getID();
        console.log(id);
        return id;
    };

    getBenefactorID = () => {
        benefactorID = Benefactor.getID();
        console.log(benefactorID);
        return benefactorID;
    };

    getInfo = () => {
        let currStatus = "";
        if (isActive) {
            currStatus = "active";
        } else {
            currStatus = "inactive";
        }
        return {
            id: getID(),
            benefactorID: getBenefactorID(),
            date: date,
            status: currStatus,
            location: location,
            description: description,
        };
    };

    // call to this when handling submit button click within page
    submit = () => {
        console.log(getInfo());
        console.log("Appointment submitted!");
    };
}