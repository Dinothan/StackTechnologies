import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteProduct} from '../store/slices/productSlice';
import {useAppDispatch} from '../hooks/hooks';
import AlertComponent from './Alert';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  id: number;
  getSelectProduct: (id: number) => void;
}

const CardComponent: FC<CardProps> = ({
  title,
  content,
  imageUrl,
  id,
  getSelectProduct,
}: CardProps) => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [itemIdToDelete, setItemIdToDelete] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const onPressItem = useCallback(() => {
    getSelectProduct(id);
  }, [getSelectProduct, id]);

  const onPressDelete = useCallback((id: number) => {
    setIsAlertVisible(true);
    setItemIdToDelete(id);
  }, []);

  const handleAlertDismiss = useCallback(() => {
    setIsAlertVisible(false);
    setItemIdToDelete(null);
  }, []);

  const handleDeleteItem = useCallback(() => {
    if (itemIdToDelete !== null) {
      dispatch(deleteProduct(itemIdToDelete));
      handleAlertDismiss();
    }
  }, [dispatch, itemIdToDelete, handleAlertDismiss]);

  return (
    <Card style={styles.container} onPress={onPressItem}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium" numberOfLines={1}>
          {content}
        </Text>
      </Card.Content>
      <Card.Cover source={{uri: imageUrl}} style={styles.imageStyle} />
      <View style={styles.actionContainer}>
        <View style={styles.actionButton}>
          <Text style={styles.editText}>Edit</Text>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={20}
            color={'blue'}
          />
        </View>
        <TouchableOpacity onPress={() => onPressDelete(id)}>
          <View style={styles.actionButton}>
            <Text style={styles.deleteText}>Delete</Text>
            <MaterialCommunityIcons
              name="delete-outline"
              color={'red'}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
      <AlertComponent
        visible={isAlertVisible}
        hideAlert={handleAlertDismiss}
        title="Delete Item"
        description="Are you sure you want to delete this Item?"
        actionButtons={[
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: handleAlertDismiss,
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: handleDeleteItem,
          },
        ]}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'white',
    width: '100%',
  },
  imageStyle: {paddingTop: 5},
  actionContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  actionButton: {
    justifyContent: 'center',
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    color: 'blue',
    marginRight: 5,
  },
  deleteText: {
    color: 'red',
    marginRight: 5,
  },
});

export default CardComponent;
