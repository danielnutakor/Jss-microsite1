import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Hero_Banner",
    displayName: "Hero Banner",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1651763805376",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1651763848317",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "text_string_1651764179264",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1651764182562",
      type: CommonFieldTypes.RichText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
    }, {
      name: "href_object_1651764197756",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }, {
      name: "href_object_1651764199890",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }, {
      name: "text_string_1651764413825",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1651764415955",
      type: CommonFieldTypes.RichText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
    }, {
      name: "href_object_1651764423572",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }]
  });
}
