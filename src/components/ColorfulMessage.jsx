import React from "react";

// const ColorfulMessage = (props) => {
//   const { color, children } = props; //分割代入
//   const contentStyle = {
//     color, //プロパティ名と変数名が同じ場合は省略できる。
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{children}</p>;
// };

// export default ColorfulMessage;

//Reactではこっちの方法でエクスポートすることが多い
//import側では分割代入になるので書き間違いによるミスの防止になる
export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //プロパティ名と変数名が同じ場合は省略できる。
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
