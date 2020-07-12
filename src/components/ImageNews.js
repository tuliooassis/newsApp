import React, { useState } from 'react';
import { Dimensions, View, Image, Text, ActivityIndicator } from 'react-native';

import styled from 'styled-components';

const Copyright = styled(Text)`
  font-size: 12px
  text-align: right
  color: #b3b3b3
  padding: 2px
`;

const PhotoView = styled(View)`
  width: ${Dimensions.get('window').width}px
  height: ${Dimensions.get('window').width}px
  justify-content: center
`;

const Photo = styled(Image)`
  width: ${Dimensions.get('window').width}px
  height: ${Dimensions.get('window').width}px
`;

const Loading = styled(ActivityIndicator)`
  width: ${Dimensions.get('window').width}px
  height: ${Dimensions.get('window').width}px
  position: absolute
  justify-content: center
`;

const ImageNews = ({ multimedia }) => {
  const [loading, setLoading] = useState(true);

  return (
    <PhotoView>
      { loading && <Loading /> }
      <Photo source={{ uri: multimedia.url }}
        accessible={multimedia.caption !== "" ? true : false}
        accessibilityLabel={multimedia.caption}
        onLoadStart={e => setLoading(true)}
        onLoadEnd={e => setLoading(false)}
      />
    </ PhotoView>

  )
}


export default ImageNews;