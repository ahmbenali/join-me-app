import {z} from 'zod'

const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Invalid email. Please use only alphanumeric characters.',
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .max(15, {
      message: 'Password must be at most 15 characters',
    }),
})

type LoginSchema = z.infer<typeof loginSchema>

export {loginSchema, type LoginSchema}
