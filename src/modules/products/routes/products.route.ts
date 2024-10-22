import { productsController } from "../controllers/products.controller";
import { Router } from 'express';
import { ValidateProduct } from "../middlewares/validateProduct";


export class ProductsRoutes {


  static get routes(): Router {

    const router = Router();

    const productController = new productsController();

    router.get("/", productController.getProducts)
    router.get("/:id", productController.getProduct)
    router.post("/create", ValidateProduct, (req, res) => productController.createProduct(req, res))
    router.post("/update/:id", ValidateProduct, (req, res) => productController.updateProduct(req, res))

    return router;

  }


}