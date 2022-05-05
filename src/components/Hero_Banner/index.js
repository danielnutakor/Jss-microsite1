/* eslint-disable */
import React from 'react';
import { Container, Header, Paragraph, Link } from 'kajoo-components/sitecore-react';

import PropTypes from 'prop-types';

import './hero-banner.css';

const HeroBanner = (props) => {
  return (
    <Container className="hero-banner-container hero-banner-aba-style-guide-container-default">
      <Container
        bgImage={props.fields.bgImage_object_1651763805376}
        className="hero-banner-container1 hero-banner-aba-style-guide-container-default"
      >
        <Header
          text={props.fields.text_string_1651764179264}
          className="hero-banner-header hero-banner-aba-style-guide-header-default"
        ></Header>
        <Paragraph
          text={props.fields.text_string_1651764182562}
          className="hero-banner-paragraph hero-banner-aba-style-guide-paragraph-default"
        ></Paragraph>
        <Container className="hero-banner-container2 hero-banner-aba-style-guide-container-default">
          <Link
            href={props.fields.href_object_1651764197756}
            className="hero-banner-link hero-banner-aba-style-guide-link-round-link"
          ></Link>
          <Link
            href={props.fields.href_object_1651764199890}
            className="hero-banner-link1 hero-banner-aba-style-guide-link-round-link"
          ></Link>
        </Container>
      </Container>
      <Container
        bgImage={props.fields.bgImage_object_1651763848317}
        className="hero-banner-container3 hero-banner-aba-style-guide-container-default"
      >
        <Header
          text={props.fields.text_string_1651764413825}
          className="hero-banner-header1 hero-banner-aba-style-guide-header-default"
        ></Header>
        <Paragraph
          text={props.fields.text_string_1651764415955}
          className="hero-banner-paragraph1 hero-banner-aba-style-guide-paragraph-default"
        ></Paragraph>
        <Link
          href={props.fields.href_object_1651764423572}
          className="hero-banner-link2 hero-banner-aba-style-guide-link-round-link"
        ></Link>
      </Container>
    </Container>
  );
};

HeroBanner.defaultProps = {
  fields: {},
  'fields.bgImage_object_1651763805376': '',
  'fields.bgImage_object_1651763848317': '',
  'fields.text_string_1651764179264': 'HEADER',
  'fields.text_string_1651764182562':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  'fields.href_object_1651764197756': '#',
  'fields.href_object_1651764199890': '#',
  'fields.text_string_1651764413825': 'HEADER',
  'fields.text_string_1651764415955':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  'fields.href_object_1651764423572': '#',
};

HeroBanner.propTypes = {
  fields: PropTypes.object,
  'fields.bgImage_object_1651763805376': PropTypes.object,
  'fields.bgImage_object_1651763848317': PropTypes.object,
  'fields.text_string_1651764179264': PropTypes.string,
  'fields.text_string_1651764182562': PropTypes.string,
  'fields.href_object_1651764197756': PropTypes.object,
  'fields.href_object_1651764199890': PropTypes.object,
  'fields.text_string_1651764413825': PropTypes.string,
  'fields.text_string_1651764415955': PropTypes.string,
  'fields.href_object_1651764423572': PropTypes.object,
};

export default HeroBanner;
