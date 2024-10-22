import { UserController } from '../controllers/user.controller'; 
import { Router } from 'express';


export class UserRoutes {

    static get routes(): Router {

        const router = Router();
    
        const userController = new UserController();
    
        //router.get("/", productController.getProducts)
        //router.get("/:id", productController.getProduct)
        router.post("/create", userController.createUsuario);
        //router.post("/update/:id", ValidateProduct, (req, res) => productController.updateProduct(req, res))
    
        return router;
    
    }
}