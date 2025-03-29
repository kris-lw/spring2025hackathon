import Counselor from "./Counselor";

export default GovtAgency = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [location, setLocation] = useState("");
    const [counselors, setCounselors] = useState([]);
    const [apprRate, setApprRate] = useState(0); // 0-100%
    const [tags, setTags] = useState([]);

    getID = () => {
        return id;
    };

    getCounselors = () => {
        return counselors;
    };

    getApprRate = () => {
        return apprRate;
    };

    getInfo = () => {
        return {
            name: name,
            desc: desc,
            email: email,
            phone: phone,
            location: location,
            counselors: counselors,
            apprRate: apprRate,
            tags: tags,
        };
    };
}