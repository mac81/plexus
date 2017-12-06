import React, { Component } from "react";
import cn from "classnames";
import "./typography.css";

export const types = {
  display4: "display-4",
  display3: "display-3",
  display2: "display-2",
  display1: "display-1",
  headline: "headline",
  title: "title",
  subhead2: "subhead-2",
  subhead1: "subhead-1",
  body2: "body-2",
  body1: "body-1",
  caption: "caption",
  label: "label",
  menu: "menu",
  button: "button"
};

class Typography extends Component {
  render() {
    const { children, element, type, className } = this.props;

    const componentMap = {
      [types.display4]: "h1",
      [types.display3]: "h1",
      [types.display2]: "h1",
      [types.display1]: "h1",
      [types.headline]: "h1",
      [types.title]: "h2",
      [types.subhead2]: "h3",
      [types.subhead1]: "h3",
      [types.body2]: "div",
      [types.body1]: "p"
    };

    const Component = element || componentMap[type] || "span";

    const typographyClass = cn("typography", className, {
      [type]: type
    });

    return <Component className={typographyClass}>{children}</Component>;
  }
}

Typography.defaultProps = {
  type: types.display4
};

export default Typography;
