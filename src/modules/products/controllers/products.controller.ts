import { Request, Response } from 'express';
import { ProductDTO } from "../DTO/productDTO";
import { ProductService } from "../services/product.service";


export class productsController {


    private productService = new ProductService();

    constructor() {}

    public createProduct = async (req:Request, res:Response) => {

        try {
            const productData: ProductDTO = req.body;
            const product = await this.productService.createProductService(productData);
            res.status(201).send({
                message:"Producto creado",
                status: 201,
                data: product
            })
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).json({ message: "Error interno del servidor" });
            
        }
        
    }

    public getProducts = async (_:Request, res:Response) => {

        try {
            const products = await this.productService.findAllProductsService();
            res.status(200).send({
                message: "Productos encontrados",
                status:200,
                data:products
            })
        } catch (error) {
            res.status(500).send({
                message: error
            });
        }
        
    }

    public getProduct = async (req:Request, res:Response) => {

        let productID:number = parseInt(req.params.id);


        try {
            const product = await this.productService.findProductByIdService(productID);
            if(!product) {
                res.status(404).send({
                    message: "Producto no encontrado",
                    status:404,
                    data:[]
                })
            }else {
                res.status(200).send({
                    message: "Producto encontrado",
                    status:200,
                    data:product
                })
            }
        } catch (error) {
            res.status(500).send({
                message: error
            });
        }      
        
    }

    public updateProduct = async (req:Request, res:Response) => {

        try {

            const productData: Partial<ProductDTO> = req.body;
            const product = await this.productService.updateProductService(parseInt(req.params.id), productData);
            res.status(201).send({
                message:"Producto actualizado",
                status: 201,
                data: product
            })
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            res.status(500).json({ message: "Error interno del servidor" });
            
        }
        
    }

}
