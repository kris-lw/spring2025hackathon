export default Agent = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [apprRate, setApprRate] = useState(0);
    const [desc, setDesc] = useState("");
    const [tags, setTags] = useState([]);

    getID = () => {
        return id;
    };

    getInfo = () => {
        return {
            id: getID(),
            name: name,
            username: username,
            password: password,
            email: email,
            phone: phone,
            apprRate: apprRate,
            desc: desc,
            tags: tags,
        };
    };
};