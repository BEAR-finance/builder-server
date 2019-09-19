import { AssetAttributes, assetSchema } from '../Asset'

export type AssetPackAttributes = {
  id: string
  title: string
  thumbnail?: string
  user_id: string
  is_deleted: boolean
  assets: AssetAttributes[]
  created_at: Date
  updated_at: Date
}

export const assetPackSchema = Object.freeze({
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    title: { type: 'string', minLength: 3, maxLength: 20 },
    thumbnail: { type: 'string', nullable: true },
    user_id: { type: 'string', nullable: true },
    assets: { items: assetSchema, additionalProperties: false },
    created_at: { type: 'string', nullable: true },
    updated_at: { type: 'string', nullable: true }
  },
  additionalProperties: false,
  removeAdditional: true,
  required: ['id', 'title', 'assets']
})
