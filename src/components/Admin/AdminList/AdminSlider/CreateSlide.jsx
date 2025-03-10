import React, { useEffect, useState } from "react";
import DropZone from "../../../DropZone/DropZone";

import { useGetAllAdminCoffeeQuery } from "../../../../store/api/api";
import { useCreateSlideMutation } from "../../../../store/api/slider.api";
import SelectSlide from "../../../CustomSelect/SelectSlide";

const CreateSlide = ({ setOpen }) => {
    const { data, isLoading } = useGetAllAdminCoffeeQuery();
    const [arr, setArr] = useState([]);
    const [files, setFiles] = useState([]);
    const [selected, setSelected] = useState("");
    const [coffee, setCoffee] = useState();
    const [createSlide] = useCreateSlideMutation();
    const onSubmit = (e) => {
        e.preventDefault();
        if (files.length < 1) {
            return alert("Добавьте изображение");
        }
        let formData = new FormData();
        formData.append("title", coffee.title);
        formData.append("coffeeId", coffee._id);
        for (let i = 0; i < files.length; i++) {
            formData.append("img", files[i]);
        }
        createSlide(formData)
            .unwrap()
            .then((data) => {
                alert(data.message);
                setOpen(false);
            });
    };
    useEffect(() => {
        if (!isLoading) {
            setArr(data);
            setCoffee(data[0]);
            setSelected(data[0].title);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <form className="form-update">
            {data && (
                <div className="form-update__input">
                    <SelectSlide
                        arr={arr}
                        selected={selected}
                        setSelected={setSelected}
                        setCoffee={setCoffee}
                    />
                </div>
            )}
            <div className="form-update__drop">
                <DropZone files={files} setFiles={setFiles} title={"Мерча"} />
            </div>
            <div className="form-update__buttons">
                <button className="btn" onClick={onSubmit}>
                    Добавить
                </button>
            </div>
        </form>
    );
};

export default CreateSlide;
