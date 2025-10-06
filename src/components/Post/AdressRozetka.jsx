import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCity, addWarehouse } from "../../store/cart/cartSlice";

const AdressRozetka = ({ control }) => {
    const dispatch = useDispatch();
    const { city, warehouse } = useSelector((state) => state.cart);

    const REACT_APP_ROZETKA_TOKEN = process.env.REACT_APP_ROZETKA_TOKEN;

    const searchTimeout = useRef(null);
    const warehouseTimeout = useRef(null);

    const [cities, setCities] = useState([]);
    const [isCityFocused, setCityFocused] = useState(false);

    const [warehouses, setWarehouses] = useState([]);
    const [isWarehousesFocused, setWarehousesFocused] = useState(false);

    // ====== Поиск города ======
    const handleCity = (e) => {
        const inputValue = e.target.value;
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        searchTimeout.current = setTimeout(async () => {
            if (inputValue.length > 0) {
                try {
                    const res = await axios.get(
                        `https://api-seller.rozetka.com.ua/localities/search?name=${encodeURIComponent(
                            inputValue
                        )}`,
                        {
                            headers: {
                                Authorization: `Bearer ${REACT_APP_ROZETKA_TOKEN}`,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    if (res.data.success) {
                        setCities(res.data.content.localities);
                    } else {
                        setCities([]);
                    }
                } catch (error) {
                    console.error("Rozetka city request error:", error);
                }
            }
        }, 500);
    };

    // ====== Поиск складов ======
    const handleWarehouses = (e) => {
        const inputValue = e.target.value;
        if (warehouseTimeout.current) clearTimeout(warehouseTimeout.current);

        warehouseTimeout.current = setTimeout(async () => {
            if (city?.id) {
                try {
                    const res = await axios.get(
                        `https://api-seller.rozetka.com.ua/delivery-service-pickups/search?locality_id=${
                            city.id
                        }&delivery_service_id=1&status=1&expand=titleTranslate&pageSize=0&street=${encodeURIComponent(
                            inputValue
                        )}`,
                        {
                            headers: {
                                Authorization: `Bearer ${REACT_APP_ROZETKA_TOKEN}`,
                                "Content-Type": "application/json",
                                "Content-Language": "uk",
                            },
                        }
                    );
                    if (res.data.success) {
                        setWarehouses(res.data.content.deliveryServicePickups);
                    } else {
                        setWarehouses([]);
                    }
                } catch (error) {
                    console.error("Rozetka warehouse request error:", error);
                }
            }
        }, 700);
    };
    // ====== Фокусы ======

    // ====== Чистим таймауты ======
    useEffect(() => {
        return () => {
            if (searchTimeout.current) clearTimeout(searchTimeout.current);
            if (warehouseTimeout.current)
                clearTimeout(warehouseTimeout.current);
        };
    }, []);

    return (
        <>
            <div className="form-order__select select-form">
                <Controller
                    control={control}
                    name="city"
                    rules={{ required: true }}
                    defaultValue={city ? city.title : ""}
                    render={({ field, fieldState }) => (
                        <>
                            <input
                                className={`select-form__input ${
                                    fieldState.error &&
                                    "select-form__input-error"
                                }`}
                                placeholder="Оберіть місто (Rozetka)"
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e.target.value); // важно: value, не весь event
                                    handleCity(e);
                                }}
                                onFocus={() => setCityFocused(true)}
                                onBlur={() =>
                                    setTimeout(() => setCityFocused(false), 150)
                                }
                                type="text"
                                value={field.value}
                                autoComplete="off"
                            />

                            {isCityFocused && cities.length > 0 && (
                                <div className="select-form__content">
                                    {cities.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                field.onChange(item.title); // в инпут строка
                                                dispatch(addCity(item)); // в Redux весь объект
                                                setCityFocused(false); // закрыть меню
                                            }}
                                            className="select-form__item"
                                        >
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>

            {city?.id && (
                <div className="form-order__select select-form">
                    <Controller
                        control={control}
                        name="warehouses"
                        rules={{ required: true }}
                        defaultValue={warehouse ? warehouse.titleTranslate : ""}
                        render={({ field, fieldState }) => (
                            <>
                                <input
                                    className={`select-form__input ${
                                        fieldState.error &&
                                        "select-form__input-error"
                                    }`}
                                    placeholder="Оберіть відділення (Rozetka)"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e.target.value); // фикс: value, а не event
                                        handleWarehouses(e);
                                    }}
                                    onFocus={() => setWarehousesFocused(true)}
                                    onBlur={() =>
                                        setTimeout(
                                            () => setWarehousesFocused(false),
                                            150
                                        )
                                    }
                                    type="text"
                                    value={field.value}
                                    autoComplete="off"
                                />

                                {isWarehousesFocused &&
                                    warehouses.length > 0 && (
                                        <div className="select-form__content">
                                            {warehouses.map((item) => (
                                                <div
                                                    key={item.id}
                                                    onClick={() => {
                                                        field.onChange(
                                                            item.titleTranslate
                                                        ); // строка в инпут
                                                        dispatch(
                                                            addWarehouse(item)
                                                        ); // объект в Redux
                                                        setWarehousesFocused(
                                                            false
                                                        ); // закрыть список
                                                    }}
                                                    className="select-form__item"
                                                >
                                                    {item.titleTranslate}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </>
                        )}
                    />
                </div>
            )}
        </>
    );
};

export default AdressRozetka;
