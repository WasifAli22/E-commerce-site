import { type SchemaTypeDefinition } from 'sanity'
import {promotion} from "./promotion"
import {banner} from "./banner"
import { promo } from './promo'
import { unique } from './unique'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,promotion,promo,unique],
}
