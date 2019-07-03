import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { Who } from './whoPages';
import { styles } from '../../styles/whoPageStyles';
import { WhoXSmall, WhoSmall, WhoMed, WhoLarge, WhoXLarge } from './whoPages';
import Breakpoint from 'react-socks';
import { MenuButton } from '../menuButton/menuButton'
import { colorThemes } from '../../styles/colorThemes';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WhoPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <MenuButton color={colorThemes.whoHeaderFooter} title={'who'} />
                <Breakpoint xsmall only>
                    <WhoXSmall />
                </Breakpoint>
                <Breakpoint small only>
                    <WhoSmall />
                </Breakpoint>
                <Breakpoint medium only>
                    <WhoMed />
                </Breakpoint>
                <Breakpoint large only>
                    <WhoLarge />
                </Breakpoint>
                <Breakpoint xlarge only>
                    <WhoXLarge />
                </Breakpoint>
            </Layout>
        );
    }
}
