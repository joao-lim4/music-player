import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { NeuView } from 'react-native-neu-element';
import IndexComponent from './carousel/Index.component';
import SecundComponent from './carousel/secund.component';




const {width: screenWidth} = Dimensions.get('window');

export default  props => {

  const carouselRef = useRef(null);


  const renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
           <NeuView
                width={(screenWidth - 60) - 40}
                height={(((Dimensions.get('window').height * 80) / 100) * 70) / 100}
                concave
                color='#eef2f9'
                borderRadius={20}
            >   
                {index == 0 ? <IndexComponent /> : index == 1 ? <SecundComponent /> : false}
            </NeuView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={(((Dimensions.get('window').height * 80) / 100) * 71) / 100}
            itemWidth={(screenWidth - 20) - 40}
            data={[0,1]}
            renderItem={renderItem}
            hasParallaxImages={true}
        />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        width: (screenWidth - 60) - 40,
        height: (((Dimensions.get('window').height * 80) / 100) * 71) / 100, 
        position: 'relative',
    },
    
});