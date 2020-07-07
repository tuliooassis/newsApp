import React from 'react';
import { Dimensions, Image, Text } from 'react-native';

import styled from 'styled-components';

const Copyright = styled(Text)`
  font-size: 12px
  text-align: right
  color: #b3b3b3
  padding: 2px
`;

const Photo = styled(Image)`
  width: ${Dimensions.get('window').width}px
  height: ${Dimensions.get('window').width}px
`;

const ImageNews = ({ multimedia }) => {
  return (
    <>
      <Photo source={{ uri: multimedia.url }} />
      <Copyright>{ multimedia.copyright.toUpperCase() }</Copyright>
    </>
  )
}

export default ImageNews;