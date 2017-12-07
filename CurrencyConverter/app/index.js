import React from "react";
import Home from "./screens/Home";
import EStyleSheet from "react-native-extended-stylesheet";

// const Constants = {
//     $primaryBlue: '#4f6d78',
// };

EStyleSheet.build({
  $primaryBlue: "#4f6d78",
  $white: "#FFFFFF",
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
});

export default () => <Home />;
