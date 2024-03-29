import React, {FC, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

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
  const onPressItem = useCallback(() => {
    getSelectProduct(id);
  }, [getSelectProduct, id]);

  return (
    <Card style={styles.container} onPress={onPressItem}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium" numberOfLines={1}>
          {content}
        </Text>
      </Card.Content>
      <Card.Cover source={{uri: imageUrl}} style={styles.imageStyle} />
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
});

export default CardComponent;
