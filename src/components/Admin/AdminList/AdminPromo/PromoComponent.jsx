import Modal from "../../../Modal/Modal";
import { ReactComponent as TrashSvg } from "../../../../img/trash.svg";

const PromoComponent = ({
    item,
    deleteModal,
    setDeleteModal,
    handleDelete,
}) => {
    return (
        <div className="admin-product__item">
            <div className="admin-product__left">
                <h2 className="admin-product__title">{item.name}</h2>
                <h2 className="admin-product__title">{item.procent}%</h2>
                <h2 className="admin-product__title">на {item.product}</h2>
            </div>
            <div className="admin-product__btns">
                <button
                    className="admin-product__remove"
                    onClick={() => setDeleteModal(true)}
                >
                    <TrashSvg />
                </button>
            </div>
            <Modal
                active={deleteModal}
                setActive={setDeleteModal}
                style={{ justifyContent: "center", marginTop: "150px" }}
            >
                <div className="admin-product__delete delete-product">
                    <div className="delete-product__top">
                        <h3 className="delete-product__title">Удалить</h3>
                    </div>
                    <p className="delete-product__txt">
                        Вы уверены что хотите удалить Промо: <br /> <br />{" "}
                        <span> {item.name}</span>
                    </p>
                    <div className="delete-product__btns">
                        <button
                            className="delete-product__btn delete-product__btn-canc"
                            onClick={() => setDeleteModal(false)}
                        >
                            Отменить
                        </button>
                        <button
                            className="delete-product__btn delete-product__btn-del"
                            onClick={() => handleDelete(item._id)}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PromoComponent;
