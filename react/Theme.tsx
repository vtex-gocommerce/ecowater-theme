import React from 'react'
import { Helmet } from 'vtex.render-runtime'

const Theme = () => (
  <Helmet>
    <link rel="stylesheet" href="https://use.typekit.net/tio5kga.css" />
  </Helmet>
)

export default React.memo(Theme)
