import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

const contentStyle = {
    display : 'flex',
    flexWrap : 'wrap',
    padding : "3rem 3rem",
    justifyContent : "center"
}
const HCLayout = ({children}) => {
  return (
    <Layout>
        <Header>Header</Header>
        <Menu theme='dark' mode='horizontal'>
            <Menu.Item>
                <Link to='/'>Acceuil</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/rooms'>Chambres</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/add'>Ajouter une Chambre</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='/about'>a props</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to='/Contact'>Contact</Link>
            </Menu.Item>
        </Menu>

        <Content style={contentStyle} children={children}></Content>
        <Footer style={{textAlign : "center"}}>
            Créé par Joel 2022
        </Footer>
    </Layout>
  )
}

export default HCLayout