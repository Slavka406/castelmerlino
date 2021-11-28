import React from 'react'
import { Header } from '../../components'
import { Box } from 'antd-styled'

const PageWraper = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box px={32} mt={16}>
        PageWraper
        {children}
      </Box>
    </Box>
  )
}

export default PageWraper
