import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //プロパティ名と変数名が同じ場合は省略できる。
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
