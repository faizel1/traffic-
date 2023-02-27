


import React from 'react';
import { Text} from 'react-native';

import DefaultStyles from "../../config/style";


export default function AppText({children, style,...otherProps}) {
  return(<Text style={[DefaultStyles.text, style]}{...otherProps}>{children}</Text>);
}


