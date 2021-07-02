import { toast } from "react-toastify";

export const toastError = (err) => {
    const message = null;
    if (message !== null && typeof message !== "undefined" && message !== "") {
        toast.error(message);
    }
};
