import React from 'react';
import TrackPlayer from 'react-native-track-player';

const capabilities = [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
]

export default {
    stopWithApp: true,
    capabilities: capabilities,
    compactCapabilities:capabilities,
};