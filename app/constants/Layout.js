import { Dimensions } from 'react-native';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default {
  height: height,
  width:  Math.round(Dimensions.get('window').width),
  // window: {
  //   width,
  //   height,
  // },
  isSmallDevice: width < 375,
};
