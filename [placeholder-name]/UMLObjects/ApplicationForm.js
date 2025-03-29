import Benefactor from "./Benefactor";
import JobAgency from "./JobAgency";

export default ApplicationForm = () => {
    const [id, setId] = useState(0);
    const [benefactorID, setBenefactorID] = useState(Benefactor.getID());
    const [jobAgencyID, setJobAgencyID] = useState(JobAgency.getID());
    const [date, setDate] = useState("");
    const [isActive, toggleStatus] = useState(true); // true = active, false = inactive
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    getID = () => {
        return id;
    };

    getBenefactorID = () => {
        benefactorID = Benefactor.getID();
        console.log(benefactorID);
        return benefactorID;
    };

    getJobAgencyID = () => {
        jobAgencyID = JobAgency.getID();
        console.log(jobAgencyID);
        return jobAgencyID;
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
            jobAgencyID: getJobAgencyID(),
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