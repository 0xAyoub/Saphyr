import '@/styles/globals.css'
import * as React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
  },
})



export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>  
  )
}
