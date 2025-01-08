import { useForm } from "react-hook-form";
import { useCreatePromoMutation } from "../../../../store/api/promo.api";
import Select from "../../../CustomSelect/Select";
import { useState } from "react";

const CreatePromo = ({ setOpen }) => {
    const option = ["coffee", "merch", "lemonade", "drip"];
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [selected, setSelected] = useState(option[0]);

    const [createPromo] = useCreatePromoMutation();

    const onSubmit = (data) => {
        const formData = {
            ...data,
            product: selected,
        };
        createPromo(formData)
            .unwrap()
            .then((data) => {
                alert(data.message);
                setOpen(false);
            });
    };

    return (
        <form className="form-update" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-update__input">
                <label htmlFor="name">Назва промокоду:</label>
                <input
                    id="name"
                    placeholder="Назва промокоду"
                    type="text"
                    {...register("name", { required: true })}
                />
            </div>
            <div className="form-update__input">
                <label htmlFor="procent">
                    Відсоток промокоду(писати тільки цифру):
                </label>
                <input
                    id="procent"
                    placeholder="Введіть відсоток"
                    type="text"
                    {...register("procent", { required: true })}
                />
            </div>
            <div className="form-update__input">
                <label htmlFor="select">
                    Оберіть на який продукт промокод:{" "}
                </label>
                <Select
                    arr={option}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>
            <div className="form-update__buttons">
                <button className="btn" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
};

export default CreatePromo;
