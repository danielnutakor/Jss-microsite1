/* eslint-disable */
import React from 'react';
import { Container, Paragraph, Image, Header } from 'kajoo-components/sitecore-react';

import PropTypes from 'prop-types';

import './repeating-cards.css';

const RepeatingCards = (props) => {
  return (
    <Container className="repeating-cards-container">
      <Container className="repeating-cards-container1">
        <Paragraph
          text={props.fields.text_string_7}
          className="repeating-cards-paragraph repeating-cards-aba-style guide-paragraph-default"
        ></Paragraph>
        <Image
          src={props.fields.src_object_2}
          className="repeating-cards-image repeating-cards-aba-style guide-image-default"
        ></Image>
      </Container>
      <Container className="repeating-cards-container2">
        <Image
          src={props.fields.src_object_1}
          className="repeating-cards-image1 repeating-cards-aba-style guide-image-default"
        ></Image>
        <Container className="repeating-cards-container3">
          <Header
            text={props.fields.text_string_4}
            className="repeating-cards-header repeating-cards-aba-style guide-header-default"
          ></Header>
          <Paragraph
            text={props.fields.text_string_6}
            className="repeating-cards-paragraph1 repeating-cards-aba-style guide-paragraph-default"
          ></Paragraph>
        </Container>
      </Container>
      <Container className="repeating-cards-container4">
        <Container className="repeating-cards-container5">
          <Header
            text={props.fields.text_string_3}
            className="repeating-cards-header1 repeating-cards-aba-style guide-header-default"
          ></Header>
          <Paragraph
            text={props.fields.text_string_5}
            className="repeating-cards-paragraph2 repeating-cards-aba-style guide-paragraph-default"
          ></Paragraph>
        </Container>
        <Image
          src={props.fields.src_object_0}
          className="repeating-cards-image2 repeating-cards-aba-style guide-image-default"
        ></Image>
      </Container>
    </Container>
  );
};

RepeatingCards.defaultProps = {
  'fields.src_object_0': '/graphics/default.png',
  fields: {},
  'fields.src_object_1': '/graphics/default.png',
  'fields.src_object_2': '/graphics/default.png',
  'fields.text_string_3': 'HEADER',
  'fields.text_string_4': 'HEADER',
  'fields.text_string_5':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  'fields.text_string_6':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  'fields.text_string_7':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
};

RepeatingCards.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_3': PropTypes.string,
  'fields.text_string_4': PropTypes.string,
  'fields.text_string_5': PropTypes.string,
  'fields.text_string_6': PropTypes.string,
  'fields.text_string_7': PropTypes.string,
};

export default RepeatingCards;
