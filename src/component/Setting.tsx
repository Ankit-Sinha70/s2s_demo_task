import React from 'react'
import { Layout } from '@fluentui/react-northstar'
import { Flex, Header, Segment } from '@fluentui/react-northstar';
import { MenuIcon } from '@fluentui/react-icons-northstar';
import MainSection from './MainSection';
const Setting = () => {
  return (
    <>
    
    <Layout debug start={<h3>Configure Navigation</h3>} main={<MainSection/>} >
            
    </Layout>
    </>
  )
}

export default Setting;