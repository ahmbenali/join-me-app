'use client'

import {PropsWithChildren} from "react"
import {HeroUIProvider} from '@heroui/react'

function Providers({children}: Readonly<PropsWithChildren>) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}


export default Providers
