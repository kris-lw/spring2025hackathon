import Agent from "./Agent";

export default JobAgency = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [location, setLocation] = useState("");
    const [agents, setAgents] = useState([]);
    const [apprRate, setApprRate] = useState(0); // 0-100%
    const [tags, setTags] = useState([]);

    getID = () => {
        return id;
    };

    getAgents = () => {
        return agents;
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
            agents: agents,
            apprRate: apprRate,
            tags: tags,
        };
    };
}