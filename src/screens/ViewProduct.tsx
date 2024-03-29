import React, {FC} from 'react';
import Background from '../components/Layout';
import {useAppSelector} from '../hooks/hooks';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import RowItem from '../components/RowItem';

const ViewProductScreen: FC = () => {
  const selectedItem = useAppSelector(state => state.products.selectedItem);

  return (
    <ScrollView>
      <Background>
        <Image
          source={{uri: selectedItem?.skuimageurl}}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.contentContainer}>
          <Text style={styles.productName}>{selectedItem?.skuname_enGB}</Text>
          <Text style={styles.productDescription}>
            {selectedItem?.skushortdescription_enGB}
          </Text>

          {selectedItem && (
            <View style={styles.infoContainer}>
              <RowItem label="Price" value={selectedItem.skuprice} />
              <RowItem
                label="Retail Price"
                value={selectedItem.skuretailprice}
              />
              <RowItem label="Code" value={selectedItem.skualtcode} />
              <RowItem
                label="Available Items"
                value={selectedItem.skuavailableitems}
              />
              <RowItem label="Weight" value={selectedItem.skuweight} />
            </View>
          )}
        </View>
      </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  productName: {
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  productDescription: {
    paddingBottom: 10,
  },
  infoContainer: {
    paddingBottom: 10,
  },
});

export default ViewProductScreen;
