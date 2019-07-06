import React from 'react';
import { Card, Col, Row, Tag, Typography, Icon } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
const { Title } = Typography;


export class WorkDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            this.props.responsive.AnimationUp ?
                <div style={this.props.responsive.WorkTab}>
                    <div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1'> <Icon style={this.props.responsive.WorkIcon} type="folder" /></div>
                    <div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='100ms' style={this.props.responsive.WorkTitle}> {this.props.data.title}</div>
                    <Row className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='200ms'>
                        {this.props.data.sourceCodeAvailable ? <Col span={12}>
                            <a href={this.props.data.sourceCode}>
                                <Icon style={this.props.responsive.WorkSocialLink} type="github" />
                            </a>
                        </Col> :
                            <div></div>}
                        {this.props.data.websiteCodeAvailable ? <Col span={12}>
                            <a href={this.props.data.websiteLink}>
                                <Icon style={this.props.responsive.WorkSocialLink} type="layout" />
                            </a>
                        </Col> :
                            <div></div>}
                    </Row>
                    <Row><div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='300ms' style={this.props.responsive.WorkDetails}>{this.props.data.description}</div></Row>
                    <Row className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='400ms'>
                        {this.props.data.stack.map(stack => <Tag style={this.props.responsive.WorkTags}> {stack} </Tag>)}
                    </Row>
                </div>
                :
                <div style={this.props.responsive.WorkTab}>
                    <div className='wow fadeInRight' data-wow-duration='700ms' data-wow-iteration='1'> <Icon style={this.props.responsive.WorkIcon} type="folder" /></div>
                    <div className='wow fadeInRight' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='100ms' style={this.props.responsive.WorkTitle}> {this.props.data.title}</div>
                    <Row className='wow fadeInRight' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='200ms'>
                        {this.props.data.sourceCodeAvailable ? <Col span={12}>
                            <a href={this.props.data.sourceCode}>
                                <Icon style={this.props.responsive.WorkSocialLink} type="github" />
                            </a>
                        </Col> :
                            <div></div>}
                        {this.props.data.websiteCodeAvailable ? <Col span={12}>
                            <a href={this.props.data.websiteLink}>
                                <Icon style={this.props.responsive.WorkSocialLink} type="layout" />
                            </a>
                        </Col> :
                            <div></div>}
                    </Row>
                    <Row><div className='wow fadeInRight' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='300ms' style={this.props.responsive.WorkDetails}>{this.props.data.description}</div></Row>
                    <Row className='wow fadeInRight' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='400ms'>
                        {this.props.data.stack.map(stack => <Tag style={this.props.responsive.WorkTags}> {stack} </Tag>)}
                    </Row>
                </div>
        );
    }
}