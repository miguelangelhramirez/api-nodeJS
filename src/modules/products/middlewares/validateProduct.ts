import { Request, Response, NextFunction } from "express";
import { ProductDTO } from "../DTO/productDTO";

const getErrors = (productDTO: ProductDTO) => {

    let errorList: string[] = []


    if(!productDTO.nombre) {
        errorList.push("El nombre del producto es requerido");
    }

    if (!Number.isInteger(productDTO.precio) || productDTO.precio < 0) {
        errorList.push("El precio debe ser un número entero positivo");
    }

    return errorList;

}

export const ValidateProduct = (req: Request, res: Response, next: NextFunction):void => {

    const productData: ProductDTO = req.body;

    const errorsList = getErrors(productData);

    if(errorsList.length > 0) {
        res.status(400).json({ errors: errorsList });
    }else {
        next();
    }
    
}