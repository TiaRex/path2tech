import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default About