import React from 'react'
import { Box } from 'antd-styled'
import { Row, Col } from '@qonsoll/react-design'
import { Button } from 'antd'

const Header = () => {
  return (
    <Box width="100%" height="60px" bg="#4f4f4f" px={16}>
      <Row display="flex" alignItems="center" height="100%">
        <Col cw="auto">
          <Box>
            <Button type="text">Logo</Button>
          </Box>
        </Col>
        <Col>qwe</Col>
        <Col>qwe</Col>
      </Row>
    </Box>
  )
}

export default Header
