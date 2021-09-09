import {Colors} from '../constants';
import {Platform} from 'react-native';
export default (
  elevation: number = 1,
  backgroundColor: string = Colors.white,
  shadowColor: string = Colors.black,
): object => {
  if (Platform.OS === 'android') {
    return {backgroundColor, elevation, shadowColor};
  }
  const shadowIos = {
    backgroundColor,
    shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  };
  switch (elevation) {
    case 0:
      shadowIos.shadowOpacity = 0;
      shadowIos.shadowRadius = 0;
      break;
    case 2:
      shadowIos.shadowOpacity = 0.2;
      shadowIos.shadowRadius = 1.41;
      break;
    case 3:
      shadowIos.shadowOpacity = 0.22;
      shadowIos.shadowRadius = 2.22;
      break;
    case 4:
      shadowIos.shadowOffset.height = 2;
      shadowIos.shadowOpacity = 0.23;
      shadowIos.shadowRadius = 2.62;
      break;
    case 5:
      shadowIos.shadowOffset.height = 2;
      shadowIos.shadowOpacity = 0.25;
      shadowIos.shadowRadius = 3.84;
      break;
    case 6:
      shadowIos.shadowOffset.height = 3;
      shadowIos.shadowOpacity = 0.27;
      shadowIos.shadowRadius = 4.65;
      break;
    case 7:
      shadowIos.shadowOffset.height = 3;
      shadowIos.shadowOpacity = 0.29;
      shadowIos.shadowRadius = 4.65;
      break;
    case 8:
      shadowIos.shadowOffset.height = 4;
      shadowIos.shadowOpacity = 0.3;
      shadowIos.shadowRadius = 4.65;
      break;
    case 9:
      shadowIos.shadowOffset.height = 4;
      shadowIos.shadowOpacity = 0.32;
      shadowIos.shadowRadius = 5.46;
      break;
    case 10:
      shadowIos.shadowOffset.height = 5;
      shadowIos.shadowOpacity = 0.34;
      shadowIos.shadowRadius = 6.27;
      break;
    case 11:
      shadowIos.shadowOffset.height = 5;
      shadowIos.shadowOpacity = 0.36;
      shadowIos.shadowRadius = 6.68;
      break;
    case 12:
      shadowIos.shadowOffset.height = 6;
      shadowIos.shadowOpacity = 0.37;
      shadowIos.shadowRadius = 7.49;
      break;
    case 13:
      shadowIos.shadowOffset.height = 6;
      shadowIos.shadowOpacity = 0.39;
      shadowIos.shadowRadius = 8.3;
      break;
    case 14:
      shadowIos.shadowOffset.height = 7;
      shadowIos.shadowOpacity = 0.41;
      shadowIos.shadowRadius = 9.11;
      break;
    case 15:
      shadowIos.shadowOffset.height = 7;
      shadowIos.shadowOpacity = 0.43;
      shadowIos.shadowRadius = 9.51;
      break;
    case 16:
      shadowIos.shadowOffset.height = 8;
      shadowIos.shadowOpacity = 0.44;
      shadowIos.shadowRadius = 10.32;
      break;
    case 17:
      shadowIos.shadowOffset.height = 8;
      shadowIos.shadowOpacity = 0.46;
      shadowIos.shadowRadius = 11.14;
      break;
    case 18:
      shadowIos.shadowOffset.height = 9;
      shadowIos.shadowOpacity = 0.48;
      shadowIos.shadowRadius = 11.95;
      break;
    case 19:
      shadowIos.shadowOffset.height = 9;
      shadowIos.shadowOpacity = 0.5;
      shadowIos.shadowRadius = 12.35;
      break;
    case 20:
      shadowIos.shadowOffset.height = 10;
      shadowIos.shadowOpacity = 0.51;
      shadowIos.shadowRadius = 13.16;
      break;
    case 21:
      shadowIos.shadowOffset.height = 10;
      shadowIos.shadowOpacity = 0.53;
      shadowIos.shadowRadius = 13.97;
      break;
    case 22:
      shadowIos.shadowOffset.height = 11;
      shadowIos.shadowOpacity = 0.55;
      shadowIos.shadowRadius = 14.78;
      break;
    case 23:
      shadowIos.shadowOffset.height = 11;
      shadowIos.shadowOpacity = 0.57;
      shadowIos.shadowRadius = 15.19;
      break;
    case 24:
      shadowIos.shadowOffset.height = 12;
      shadowIos.shadowOpacity = 0.58;
      shadowIos.shadowRadius = 16.0;
      break;
    default:
      shadowIos.shadowOpacity = 0.18;
      shadowIos.shadowRadius = 1.0;
  }
  return shadowIos;
};
