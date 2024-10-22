import { Router } from 'express';

import { ProductsRoutes } from '../modules/products/routes/products.route';
import { UserRoutes } from '../modules/users/routes/user.route'; 


export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/products', ProductsRoutes.routes );
    router.use('/api/users', UserRoutes.routes );

    return router;
  }
}