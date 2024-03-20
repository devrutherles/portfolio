import React from 'react'
import Iframe from 'react-iframe'

const Show = ({ data }) => {
  return (
    <Iframe
      title="Conteúdo Incorporado"
      src={data}
      width="100%"
      height="100%"
      styles={{
        borderRadius: '16px',
        backgroundColor: '#fff',
      }}
    ></Iframe>
  )
}

export default Show
