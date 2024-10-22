"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateProduct = void 0;
const getErrors = (productDTO) => {
    let errorList = [];
    if (!productDTO.nombre) {
        errorList.push("El nombre del producto es requerido");
    }
    if (!Number.isInteger(productDTO.precio) || productDTO.precio < 0) {
        errorList.push("El precio debe ser un número entero positivo");
    }
    return errorList;
};
const ValidateProduct = (req, res, next) => {
    const productData = req.body;
    const errorsList = getErrors(productData);
    if (errorsList.length > 0) {
        res.status(400).json({ errors: errorsList });
    }
    else {
        next();
    }
};
exports.ValidateProduct = ValidateProduct;
