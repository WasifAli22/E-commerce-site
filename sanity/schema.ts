import { type SchemaTypeDefinition } from 'sanity'
import { promotion } from "./promotion"
import { banner } from "./banner"
import { promo } from './promo'
import { unique } from './unique'
import { product } from './product'
import { category } from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, promotion, promo, unique, product, category],
}
