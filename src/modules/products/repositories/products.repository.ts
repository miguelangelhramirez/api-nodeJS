import { AppDataSource } from "../../../db/db";
import { Product } from "../entities/Products";
import { ProductDTO } from "../DTO/productDTO";

export class ProductRepository {

    private productRepository = AppDataSource.getRepository( Product );

    constructor() {

    }

    async createProduct(data: ProductDTO): Promise<Product> {

        const product = this.productRepository.create(data);

        return await this.productRepository.save(product);
        
    }

    async findAllProducts(): Promise<Product[]> {

        return await this.productRepository.find();
        
    }

    async findProductById(id:number): Promise<Product | null> {

        return await this.productRepository.findOneBy({id});
        
    }

    async updateProduct(id:number, data:Partial<ProductDTO>): Promise<Product | null> {

        const product = await this.findProductById(id);


        if(!product) return null
        
        Object.assign(product, data);
        
        return await this.productRepository.save(product);
        
    }

}