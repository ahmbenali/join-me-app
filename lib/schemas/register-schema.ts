import {z} from "zod";

const registerSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z
    .string()
    .email({
      message: 'Invalid email. Please enter a valid email using only alphanumeric characters.',
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .max(15, {
      message: 'Password must be at most 15 characters',
    }),
  // confirmPassword: z.string({
  //   required_error: 'Please confirm your password',
  // }),
})

type RegisterSchema = z.infer<typeof registerSchema>

export {registerSchema, type RegisterSchema};
