'use client'

import {LoginSchema, loginSchema} from '@/lib/schemas/login-schema'
import {Button} from '@heroui/button'
import {Card, CardBody, CardHeader, Input} from '@heroui/react'
import {zodResolver} from '@hookform/resolvers/zod'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {GiPadlock} from 'react-icons/gi'

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginSchema) => {
    console.log(data)
  }

  return (
    <Card className="w-2/5 mx-auto flex-center ">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome back to JoinMe!</p>
        </div>
      </CardHeader>
      <CardBody>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              type='email'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid}
            >
              Login
            </Button>
            {/* <SocialLogin /> */}
            <div className="flex justify-center hover:underline text-sm">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default LoginForm
