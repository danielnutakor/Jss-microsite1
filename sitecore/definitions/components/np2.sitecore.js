import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "np2",
    displayName: "np2",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "text_string_1668195900197",
      type: CommonFieldTypes.RichText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
    }, {
      name: "src_object_1668195910755",
      type: CommonFieldTypes.Image,
      standardValue: "/graphics/default.png"
    }, {
      name: "text_string_1668195974674",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1668196094051",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Button"
    }]
  });
}
