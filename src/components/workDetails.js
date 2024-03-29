import React from 'react';
import { Row, Tag } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
import { GithubIcon, DevpostIcon, WebsiteIcon, CustomIcons } from '../assets/customIcons';

export class WorkDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }


    render() {
        return (
            <div style={this.props.responsive.WorkTab}>
                <div {...this.props.responsive.Animation}> <CustomIcons type={this.props.data.logo} IconStyles={this.props.responsive.WorkIcon} /></div>
                <div {...this.props.responsive.Animation} data-wow-delay='100ms' style={this.props.responsive.WorkTitle}> {this.props.data.title}</div>
                <Row {...this.props.responsive.Animation} data-wow-delay='200ms' style={styles.WorkIconContainer}>
                    {this.props.data.sourceCodeAvailable ?
                        <div>
                            <a href={this.props.data.sourceCode}>
                                <GithubIcon IconStyles={this.props.responsive.WorkSocialLink} />
                            </a>
                        </div>
                        :
                        <div></div>}
                    {this.props.data.websiteLinkAvailable ?
                        <div>
                            <a href={this.props.data.websiteLink}>
                                <WebsiteIcon IconStyles={this.props.responsive.WorkSocialLink} />
                            </a>
                        </div>
                        :
                        <div></div>}
                    {this.props.data.devpostCodeAvailable ?
                        <div>
                            <a href={this.props.data.websiteLink}>
                                <DevpostIcon IconStyles={this.props.responsive.WorkSocialLink} />
                            </a>
                        </div>
                        :
                        <div></div>}
                </Row>
                <Row><div {...this.props.responsive.Animation} data-wow-delay='300ms' style={this.props.responsive.WorkDetails}>{this.props.data.description}</div></Row>
                <Row {...this.props.responsive.Animation} data-wow-delay='400ms'>
                    {this.props.data.stack.map(stack => <Tag style={styles.WorkTags}> {stack} </Tag>)}
                </Row>
            </div>
        );
    }
}