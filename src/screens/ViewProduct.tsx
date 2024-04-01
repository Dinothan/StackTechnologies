import React, {FC, useCallback, useEffect, useState} from 'react';
import Background from '../components/Layout';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RowItem from '../components/RowItem';
import Button from '../components/Button';
import {
  updateProduct,
  updateSelectedProduct,
} from '../store/slices/productSlice';
import {launchImageLibrary} from 'react-native-image-picker';

const ViewProductScreen: FC = ({route, navigation}: any) => {
  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector(state => state.products.selectedItem);
  const [newImage, setNewImage] = useState<string | undefined>(undefined);
  const {isEdit} = route.params;

  const onPressUpdate = () => {
    if (selectedItem) {
      dispatch(updateProduct(selectedItem));
      navigation.navigate('Home');
    }
  };

  const selectImage = useCallback(() => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        const selectedImage = response.assets[0].uri;
        setNewImage(selectedImage);
        dispatch(
          updateSelectedProduct({
            fieldName: 'skuimageurl',
            value: selectedImage,
          }),
        );
      }
    });
  }, []);

  useEffect(() => {
    // Set the initial image URL if available
    if (selectedItem && selectedItem.skuimageurl) {
      setNewImage(selectedItem.skuimageurl);
    }
  }, [selectedItem]);

  return (
    <ScrollView>
      <Background>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.imageContainer}
          onPress={isEdit ? selectImage : undefined}
          testID="imageContainer">
          <Image
            source={{uri: newImage}}
            style={styles.image}
            resizeMode="stretch"
            testID="productImage"
          />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          <Text style={styles.productName}>{selectedItem?.skuname_enGB}</Text>
          <Text style={styles.productDescription}>
            {selectedItem?.skushortdescription_enGB}
          </Text>

          {selectedItem && (
            <View style={styles.infoContainer}>
              <RowItem
                label="Price"
                value={selectedItem.skuprice}
                isEditable={isEdit}
                fieldName="skuprice"
              />
              <RowItem
                label="Retail Price"
                value={selectedItem.skuretailprice}
                isEditable={isEdit}
                fieldName="skuretailprice"
              />
              <RowItem
                label="Code"
                value={selectedItem.skualtcode}
                isEditable={isEdit}
                fieldName="skualtcode"
              />
              <RowItem
                label="Available Items"
                value={selectedItem.skuavailableitems}
                isEditable={isEdit}
                fieldName="skuavailableitems"
              />
              <RowItem
                label="Weight"
                value={selectedItem.skuweight}
                isEditable={isEdit}
                fieldName="skuweight"
              />
            </View>
          )}
        </View>
        {isEdit && (
          <View style={styles.saveBtn}>
            <Button
              mode="contained"
              onPress={onPressUpdate}
              testID="saveButton">
              Save
            </Button>
          </View>
        )}
      </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {flexDirection: 'row'},
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
  saveBtn: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default ViewProductScreen;
