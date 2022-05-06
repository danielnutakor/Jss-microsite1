/* eslint-disable */
import React from 'react';
import { Container, Image, Header, Paragraph, Button } from 'kajoo-components/sitecore-react';

import PropTypes from 'prop-types';

import './greatstate.css';

const Greatstate = (props) => {
  return (
    <Container className="greatstate-container greatstate-aba-style-guide-container-default">
      <Image
        src={props.fields.src_object_1}
        className="greatstate-image greatstate-aba-style-guide-image-default"
      ></Image>
      <Container className="greatstate-container1">
        <Header
          text={props.fields.text_string_2}
          className="greatstate-header greatstate-aba-style-guide-header-default"
        ></Header>
        <Paragraph
          text={props.fields.text_string_4}
          className="greatstate-paragraph greatstate-aba-style-guide-paragraph-default"
        ></Paragraph>
        <Button
          text={props.fields.text_string_0}
          className="greatstate-button greatstate-aba-style-guide-button-default"
        ></Button>
      </Container>
    </Container>
  );
};

Greatstate.defaultProps = {
  'fields.text_string_0': 'Button',
  fields: {},
  'fields.src_object_1': '/graphics/default.png',
  'fields.text_string_2': 'HEADER',
  'fields.text_string_4':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
};

Greatstate.propTypes = {
  'fields.text_string_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.text_string_2': PropTypes.string,
  'fields.text_string_4': PropTypes.string,
};

export default Greatstate;
