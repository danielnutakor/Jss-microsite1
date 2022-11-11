/* eslint-disable */
import React from 'react';
import { Container, Image, Paragraph, Header, Button } from 'kajoo-components/sitecore-react';

import PropTypes from 'prop-types';

import './np-2.css';

const np2 = (props) => {
  return (
    <Container className="np-2-container default-theme-container-default">
      <Container className="np-2-container1 default-theme-container-default">
        <Image
          src={props.fields.src_object_1668195910755}
          className="np-2-image default-theme-image-default"
        ></Image>
        <Paragraph
          text={props.fields.text_string_1668195900197}
          className="np-2-paragraph default-theme-paragraph-default"
        ></Paragraph>
      </Container>
      <Container className="np-2-container2 default-theme-container-default">
        <Header
          text={props.fields.text_string_1668195974674}
          className="np-2-header default-theme-header-default"
        ></Header>
        <Button
          text={props.fields.text_string_1668196094051}
          className="np-2-button default-theme-button-default"
        ></Button>
      </Container>
    </Container>
  );
};

np2.defaultProps = {
  fields: {},
  'fields.text_string_1668195900197':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  'fields.src_object_1668195910755': '/graphics/default.png',
  'fields.text_string_1668195974674': 'HEADER',
  'fields.text_string_1668196094051': 'Button',
};

np2.propTypes = {
  fields: PropTypes.object,
  'fields.text_string_1668195900197': PropTypes.string,
  'fields.src_object_1668195910755': PropTypes.object,
  'fields.text_string_1668195974674': PropTypes.string,
  'fields.text_string_1668196094051': PropTypes.string,
};

export default np2;
