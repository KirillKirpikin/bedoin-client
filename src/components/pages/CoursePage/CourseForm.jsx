import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { singUp } from "../../../store/order/orderSlice";
import Select from "../../CustomSelect/Select";

const CourseForm = () => {
    const dispatch = useDispatch();
    const [isError, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);

    const option = [
        "Вступний бариста",
        "Баріста базовий",
        "Професійний бариста",
        "Базовий + латте-арт",
    ];

    const [selected, setSelected] = useState(null);
    const {
        register,

        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        if (!selected) {
            setError("Оберіть курс");
            return;
        }
        const payload = {
            name: data.name,
            phone: data.phone,
            course: selected,
            information: data.information,
        };

        dispatch(singUp(payload))
            .unwrap()
            .then((data) => {
                setError(null);
                setIsSuccess(data.message);
                setSelected(null);
                reset();
            });
    };
    const handleBlur = () => {
        if (isError) {
            setError(null);
            reset();
        }
    };

    useEffect(() => {
        if (isError) {
            setError(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setIsSuccess(null);
            }, 3000);
        }
    }, [isSuccess]);

    return (
        <section className="course-form">
            <div className="course-form__container">
                <div className="course-form__content">
                    <div className="course-form__left">
                        <h2>Хочеш приєднатись?</h2>
                        <p>Залишай свої дані, ми тобі перетелефонуємо</p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="course-form__form"
                    >
                        <div className="course-form__input">
                            <p>Ваше ім’я</p>
                            <input
                                placeholder="Ваше ім’я"
                                onFocus={handleBlur}
                                type="text"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="course-form__input">
                            <p>Номер телефону</p>
                            <input
                                placeholder="Номер телефону"
                                type="text"
                                {...register("phone", { required: true })}
                            />
                        </div>
                        <div
                            onFocus={handleBlur}
                            className="course-form__select"
                        >
                            <p>Бажаний курс</p>
                            <Select
                                arr={option}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>

                        <div className="course-form__input">
                            <p>Додаткова інформація</p>
                            <textarea
                                placeholder="Додаткова інформація"
                                type="text"
                                {...register("information", {
                                    required: true,
                                })}
                            ></textarea>
                        </div>
                        <div className="course-form__unswer">
                            {isError ? <p>{isError}</p> : null}
                            {isSuccess ? (
                                <p className="course-form__unswer-success">
                                    {isSuccess}
                                </p>
                            ) : null}
                        </div>
                        <div className="course-form__btn">
                            <button className="btn" type="submit">
                                Відправити заявку
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CourseForm;
