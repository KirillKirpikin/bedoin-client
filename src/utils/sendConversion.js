import Cookies from "js-cookie";

export const sendConversion = (orderId, tariffId, tariffParam) => {
    const saUid = Cookies.get("SAuid");
    if (!saUid) return; // Если нет идентификатора - не отправляем

    const url = `https://sellaction.net/reg.php?id=${saUid}-${tariffId}_${tariffParam}&order_id=${orderId}`;

    const img = new Image();
    img.src = url;
};
