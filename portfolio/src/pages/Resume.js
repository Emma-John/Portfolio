import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../styles/Johnson.Resume.pdf'

const Resume = () => {
  return (
    <div className='main-container'>
      <Document file = {resume}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  )
}

function Dis_res() {
  return(
    <Resume />
  )
}

export default Dis_res

