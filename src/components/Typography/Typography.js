import React, { Component } from "react";
import cn from "classnames";
import "./typography.css";

export const types = {
  display4: "display-4",
  display3: "display-3",
  display2: "display-2",
  display1: "display-1",
  body2: "body-2"
};

class Typography extends Component {
  render() {
    const { children, element, type, className } = this.props;

    const Component = element || "h2";

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
