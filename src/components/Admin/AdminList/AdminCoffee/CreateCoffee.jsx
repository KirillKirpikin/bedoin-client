import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DropZone from "../../../DropZone/DropZone";
import { useCreateCoffeeMutation } from "../../../../store/api/api";
import SelectType from "../../../CustomSelect/SelectType";
import { useGetAllStickerQuery } from "../../../../store/api/sticker.api";

const CreateCoffee = ({ setOpen }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { isLoading, data } = useGetAllStickerQuery();
    const [info, setInfo] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [files, setFiles] = useState([]);
    const [kgImg, setKgImg] = useState([]);

    const [inStock, setInStock] = useState(true);
    const [inStockKg, setInStockKg] = useState(true);
    const [creatCoffee] = useCreateCoffeeMutation();

    const [selectedTypes, setSelectedTypes] = useState([]); // Стейт для хранения выбранных SelectType

    const addSelectType = (e) => {
        e.preventDefault();
        if (selectedTypes.length < 3) {
            setSelectedTypes([
                ...selectedTypes,
                { _id: Date.now(), label: "", img: "" },
            ]);
        } else {
            alert(`Максимальное количество SelectType: 3`);
        }
    };

    const removeSelectType = (_id) => {
        setSelectedTypes(selectedTypes.filter((type) => type._id !== _id));
    };

    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, { name: "", text: "", _id: Date.now() }]);
    };

    const removeInfo = (id) => {
        setInfo(info.filter((i) => i._id !== id));
    };

    const changeInfo = (key, value, id) => {
        setInfo(info.map((i) => (i._id === id ? { ...i, [key]: value } : i)));
    };

    const addRecipe = (e) => {
        e.preventDefault();
        setRecipe([
            ...recipe,
            {
                _id: Date.now(),
                name: "",
                info: [{ _id: Date.now(), name: "", text: "" }],
            },
        ]);
    };

    const removeRecipe = (id) => {
        setRecipe(recipe.filter((r) => r._id !== id));
    };

    const changeReciepe = (key, value, id) => {
        setRecipe(
            recipe.map((r) => (r._id === id ? { ...r, [key]: value } : r))
        );
    };

    const addRecipeInfo = (recipeId, e) => {
        e.preventDefault();
        setRecipe(
            recipe.map((r) =>
                r._id === recipeId
                    ? {
                          ...r,
                          info: [
                              ...r.info,
                              { _id: Date.now(), name: "", text: "" },
                          ],
                      }
                    : r
            )
        );
    };

    const removeRecipeInfo = (recipeId, infoId) => {
        setRecipe(
            recipe.map((r) =>
                r._id === recipeId
                    ? { ...r, info: r.info.filter((i) => i._id !== infoId) }
                    : r
            )
        );
    };

    const changeReciepeInfo = (recipeId, key, value, infoId) => {
        setRecipe(
            recipe.map((r) =>
                r._id === recipeId
                    ? {
                          ...r,
                          info: r.info.map((i) =>
                              i._id === infoId ? { ...i, [key]: value } : i
                          ),
                      }
                    : r
            )
        );
    };

    const onSubmit = (data) => {
        if (files.length < 1) {
            return alert("Добавьте изображение");
        }
        if (inStockKg) {
            if (kgImg)
                return alert(
                    "Добавьте изображение kg пачки, или уберите наличее kg пачки"
                );
        }

        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("short_description", data.shortDescr);
        formData.append(
            "price",
            JSON.stringify({
                standart: {
                    regular: data.standartReg,
                    opt: data.standartOpt,
                },
                kg: {
                    regular: data.kgReg,
                    opt: data.kgOpt,
                },
            })
        );
        formData.append("description", data.description);
        formData.append("country", data.country);
        formData.append("in_stock", inStock);
        formData.append("packing_kg", inStockKg);
        for (let i = 0; i < files.length; i++) {
            formData.append("img", files[i]);
        }
        if (kgImg.length > 0) {
            for (let i = 0; i < kgImg.length; i++) {
                formData.append("img_kg", kgImg[i]);
            }
        }
        formData.append("type", JSON.stringify(selectedTypes));
        formData.append("info", JSON.stringify(info));
        formData.append("recipe", JSON.stringify(recipe));

        creatCoffee(formData)
            .unwrap()
            .then((data) => {
                alert(data);
                setOpen(false);
            });
    };

    return (
        <form className="form-update" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-update__input">
                <input
                    placeholder="Введите название"
                    type="text"
                    {...register("title", { required: true })}
                />
            </div>
            <div className="form-update__input">
                <input
                    placeholder="Введите краткое описание"
                    type="text"
                    {...register("shortDescr", { required: true })}
                />
            </div>
            <div className="form-update__input">
                <input
                    placeholder="Введите полное описание"
                    type="text"
                    {...register("description", { required: true })}
                />
            </div>
            <div className="form-update__input">
                <input
                    placeholder="Введите страну"
                    type="text"
                    {...register("country", { required: true })}
                />
            </div>
            <h4 className="form-update__title"> Цена для пачки 250г:</h4>
            <div className="form-update__input form-update__input-price">
                <input
                    placeholder="Введите полную стоимость"
                    type="text"
                    {...register("standartReg", { required: true })}
                />
                <input
                    placeholder="Введите оптовую стоимость"
                    type="text"
                    {...register("standartOpt", { required: true })}
                />
            </div>
            <h4 className="form-update__title"> Цена для пачки 1кг:</h4>
            <div className="form-update__input form-update__input-price">
                <input
                    placeholder="Введите полную стоимость"
                    type="text"
                    {...register("kgReg", { required: true })}
                />
                <input
                    placeholder="Введите оптовую стоимость"
                    type="text"
                    {...register("kgOpt", { required: true })}
                />
            </div>
            <h4 className="form-update__title">Стикеры</h4>
            <div className="form-update__input">
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    <div>
                        <button
                            className="form-update__btn form-update__btn-add"
                            onClick={addSelectType}
                        >
                            Добавить SelectType
                        </button>
                        {selectedTypes.map((selectedType) => (
                            <div key={selectedType._id}>
                                <SelectType
                                    arr={data} // Ваш массив данных
                                    selected={selectedType}
                                    setSelected={(option) => {
                                        const updatedTypes = selectedTypes.map(
                                            (type) =>
                                                type._id === selectedType._id
                                                    ? {
                                                          ...type,
                                                          label: option.label,
                                                          img: option.img,
                                                      }
                                                    : type
                                        );
                                        setSelectedTypes(updatedTypes);
                                    }}
                                />
                                <button
                                    onClick={() =>
                                        removeSelectType(selectedType._id)
                                    }
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Not Found</div>
                )}
            </div>
            <div className="form-update__checkboxs">
                <div className="form-update__checkbox">
                    <input
                        id="stock"
                        type="checkbox"
                        checked={inStock}
                        onChange={() => setInStock(!inStock)}
                    />
                    <label htmlFor="stock">В наличии</label>
                </div>
                <div className="form-update__checkbox">
                    <input
                        id="checkboxKg"
                        type="checkbox"
                        checked={inStockKg}
                        onChange={() => setInStockKg(!inStockKg)}
                    />
                    <label htmlFor="checkboxKg">Наличие кг пачки</label>
                </div>
            </div>

            <div className="form-update__drop">
                <DropZone
                    files={files}
                    setFiles={setFiles}
                    title={"пачек 250г"}
                />

                {inStockKg && (
                    <DropZone
                        files={kgImg}
                        setFiles={setKgImg}
                        title={"пачек 1кг"}
                    />
                )}
            </div>

            <button
                onClick={addInfo}
                className="form-update__btn form-update__btn-add"
            >
                Добавить Свойство
            </button>
            {info.map((item) => (
                <div className="form-update__info" key={item._id}>
                    <div className="form-update__input form-update__input-info">
                        <input
                            placeholder="Введите стоимость"
                            value={item.name}
                            type="text"
                            onChange={(e) =>
                                changeInfo("name", e.target.value, item._id)
                            }
                        />
                    </div>
                    <div className="form-update__input form-update__input-info">
                        <input
                            placeholder="Введите стоимость"
                            value={item.text}
                            type="text"
                            onChange={(e) =>
                                changeInfo("text", e.target.value, item._id)
                            }
                        />
                    </div>
                    <button
                        onClick={() => removeInfo(item._id)}
                        className="form-update__btn form-update__btn-close"
                    >
                        Удалить
                    </button>
                </div>
            ))}

            <h3 className="form-update__title">Рецепти:</h3>
            {recipe.length > 0 &&
                recipe.map((item) => (
                    <div className="form-update__recipe" key={item._id}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "end",
                                marginBottom: "10px",
                            }}
                        >
                            <button
                                onClick={() => removeRecipe(item._id)}
                                className="form-update__btn form-update__btn-close"
                            >
                                Удалить рецепт
                            </button>
                        </div>
                        <div className="form-update__input form-update__input-info">
                            <input
                                placeholder="Назва заголовку"
                                value={item.name}
                                type="text"
                                onChange={(e) =>
                                    changeReciepe(
                                        "name",
                                        e.target.value,
                                        item._id
                                    )
                                }
                            />
                        </div>

                        {item.info.length > 0 &&
                            item.info.map((info) => (
                                <div
                                    className="form-update__info"
                                    key={info._id}
                                >
                                    <div className="form-update__input form-update__input-info">
                                        <input
                                            placeholder="Введите тайтл"
                                            value={info.name}
                                            type="text"
                                            onChange={(e) =>
                                                changeReciepeInfo(
                                                    item._id,
                                                    "name",
                                                    e.target.value,
                                                    info._id
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-update__input form-update__input-info">
                                        <input
                                            placeholder="Введите текст"
                                            value={info.text}
                                            type="text"
                                            onChange={(e) =>
                                                changeReciepeInfo(
                                                    item._id,
                                                    "text",
                                                    e.target.value,
                                                    info._id
                                                )
                                            }
                                        />
                                    </div>
                                    <button
                                        onClick={() =>
                                            removeRecipeInfo(item._id, info._id)
                                        }
                                        className="form-update__btn form-update__btn-close"
                                    >
                                        Удалить
                                    </button>
                                </div>
                            ))}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <button
                                onClick={(e) => addRecipeInfo(item._id, e)}
                                className="form-update__btn form-update__btn-add"
                            >
                                Додати інформацію
                            </button>
                        </div>
                    </div>
                ))}
            <button
                onClick={addRecipe}
                className="form-update__btn form-update__btn-add"
            >
                Додати рецепт
            </button>

            <div className="form-update__buttons">
                <button className="btn" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
};

export default CreateCoffee;
