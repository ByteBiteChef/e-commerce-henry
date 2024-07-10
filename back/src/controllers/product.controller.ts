import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getProductsByIdService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const productId = Number(id);
    const product = await getProductsByIdService(productId)
    res.json(product)
  }
)