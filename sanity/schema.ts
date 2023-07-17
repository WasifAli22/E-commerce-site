import { type SchemaTypeDefinition } from 'sanity'
import { promotion } from "./schemas/promotion"
import { banner } from "./schemas/banner"
import { promo } from './schemas/promo'
import { unique } from './schemas/unique'
import { product } from './schemas/product'
import { category } from './schemas/category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, promotion, promo, unique, product, category],
}
