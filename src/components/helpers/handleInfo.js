export const addInfo = (e, info, setInfo) => {
    e.preventDefault();
    setInfo([...info, { name: "", text: "", _id: Date.now() }]);
};

export const removeInfo = (id, info, setInfo) => {
    setInfo(info.filter((i) => i._id !== id));
};

export const changeInfo = (key, value, id, info, setInfo) => {
    setInfo(info.map((i) => (i._id === id ? { ...i, [key]: value } : i)));
};

export const toArray = (str) => {
    return str.split(/\s*,\s*/);
};
