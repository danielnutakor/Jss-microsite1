/* eslint-disable */
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './new-project-oct-24-16-30-6.css'

const NewProjectOct2416306 = (props) => {
  return (
    <Container className="new-project-oct-24-16-30-6-main">
      <Container className="new-project-oct-24-16-30-6-desktop1">
        <Image
          src={props.fields.rectangle5_2_src}
          alt={props.fields.rectangle5_2_alt}
          className="new-project-oct-24-16-30-6-rectangle5"
        ></Image>
        <Image
          src={props.fields.mymindtZCrFpSNiIQunsplash1_3_src}
          alt={props.fields.mymindtZCrFpSNiIQunsplash1_3_alt}
          className="new-project-oct-24-16-30-6-mymindt-z-cr-fp-s-ni-i-qunsplash1"
        ></Image>
        <Image
          src={props.fields.rectangle1_4_src}
          alt={props.fields.rectangle1_4_alt}
          className="new-project-oct-24-16-30-6-rectangle1"
        ></Image>
        <Text
          tag="span"
          text={props.fields.text_5_text}
          className="new-project-oct-24-16-30-6-text"
        ></Text>
        <Image
          src={props.fields.rectangle2_6_src}
          alt={props.fields.rectangle2_6_alt}
          className="new-project-oct-24-16-30-6-rectangle2"
        ></Image>
        <Text
          tag="span"
          text={props.fields.text_7_text}
          className="new-project-oct-24-16-30-6-text1"
        ></Text>
        <Image
          src={props.fields.rectangle3_8_src}
          alt={props.fields.rectangle3_8_alt}
          className="new-project-oct-24-16-30-6-rectangle3"
        ></Image>
        <Text
          tag="span"
          text={props.fields.text_9_text}
          className="new-project-oct-24-16-30-6-text2"
        ></Text>
        <RichText
          value={props.fields.richText_10_value}
          className="new-project-oct-24-16-30-6-rich-text"
        ></RichText>
        <Image
          src={props.fields.group1_11_src}
          alt={props.fields.group1_11_alt}
          className="new-project-oct-24-16-30-6-group1"
        ></Image>
        <Text
          tag="span"
          text={props.fields.text_12_text}
          className="new-project-oct-24-16-30-6-text3"
        ></Text>
        <Container className="new-project-oct-24-16-30-6-group2">
          <Image
            src={props.fields.rectangle4_14_src}
            alt={props.fields.rectangle4_14_alt}
            className="new-project-oct-24-16-30-6-rectangle4"
          ></Image>
          <Text
            tag="span"
            text={props.fields.text_15_text}
            className="new-project-oct-24-16-30-6-text4"
          ></Text>
        </Container>
      </Container>
    </Container>
  )
}

NewProjectOct2416306.defaultProps = {
  fields: {},
}

NewProjectOct2416306.propTypes = {
  fields: PropTypes.object,
}

export default NewProjectOct2416306
