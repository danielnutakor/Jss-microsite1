/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './new-project-oct-24-13-18-12.css'

const NewProjectOct24131812 = (props) => {
  return (
    <Container>
      <Container className="new-project-oct-24-13-18-12-wireframe1">
        <Image
          src={props.fields.reformlogoprimary1_2_src}
          alt={props.fields.reformlogoprimary1_2_alt}
          className="new-project-oct-24-13-18-12-reformlogoprimary1"
        ></Image>
        <Text
          tag="span"
          text={props.fields.text_3_text}
          className="new-project-oct-24-13-18-12-text"
        ></Text>
        <Text
          tag="span"
          text={props.fields.text_4_text}
          className="new-project-oct-24-13-18-12-text1"
        ></Text>
        <Text
          tag="span"
          text={props.fields.text_5_text}
          className="new-project-oct-24-13-18-12-text2"
        ></Text>
        <Text
          tag="span"
          text={props.fields.text_6_text}
          className="new-project-oct-24-13-18-12-text3"
        ></Text>
        <Text
          tag="span"
          text={props.fields.text_7_text}
          className="new-project-oct-24-13-18-12-text4"
        ></Text>
        <Text
          tag="span"
          text={props.fields.text_8_text}
          className="new-project-oct-24-13-18-12-text5"
        ></Text>
      </Container>
    </Container>
  )
}

NewProjectOct24131812.defaultProps = {
  fields: {},
}

NewProjectOct24131812.propTypes = {
  fields: PropTypes.object,
}

export default NewProjectOct24131812
