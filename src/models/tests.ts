import { model, Schema } from 'mongoose'

import { ITest } from '../types'

const TestSchema = new Schema<ITest>(
  {
    id: { type: String },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
)

export const TestModel = model<ITest>('Tests', TestSchema)
