import { ProductRepository } from "../repositories/products.repository";
import { ProductDTO } from "../DTO/productDTO";

export class ProductService {

    private productRepository = new ProductRepository();

    constructor() {}

    async createProductService(data: ProductDTO) {
        return await this.productRepository.createProduct(data);
    }

    async findAllProductsService() {
        return await this.productRepository.findAllProducts();
    }

    async findProductByIdService(id:number) {
        return await this.productRepository.findProductById(id);
    }

    async updateProductService(id:number, productDTO:Partial<ProductDTO>) {
        return await this.productRepository.updateProduct(id, productDTO);
    }
}