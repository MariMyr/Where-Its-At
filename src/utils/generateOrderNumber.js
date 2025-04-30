import { v4 as uuidv4 } from "uuid";

function generateOrderNumber() {
    const orderNumber = uuidv4().replace(/-/g, '').toUpperCase();
    const shortId = orderNumber.slice(0, 5);
    return `#${shortId}`;
}

export default generateOrderNumber;