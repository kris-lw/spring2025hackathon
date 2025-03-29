export default Benefactor = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [resume, setResume] = useState("");   // stores resume FILE NAME, not the file itself
    const [tags, setTags] = useState([]);
    const [calendar, setCalendar] = useState([]);

    getID = () => {
        return id;
    };

    getResume = () => {
        return resume;
    };

    getCalendar = () => {
        return calendar;
    };

    getInfo = () => {
        return {
            id: getID(),
            name: name,
            username: username,
            password: password,
            age: age,
            email: email,
            phone: phone,
            address: address,
            desc: desc,
            resume: getResume(),
            tags: tags,
            calendar: getCalendar(), 
        };
    };
}