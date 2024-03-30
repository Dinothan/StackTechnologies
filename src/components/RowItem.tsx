import {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from './TextInput';
import {useAppDispatch} from '../hooks/hooks';
import {updateSelectedProduct} from '../store/slices/productSlice';
import {Product} from '../types/product';

const RowItem: FC<{
  label: string;
  value: string | number;
  isEditable?: boolean;
  fieldName: keyof Product;
}> = ({label, value, isEditable, fieldName}) => {
  const dispatch = useAppDispatch();

  const [editedValue, setEditedValue] = useState<string | number>(value);

  const handleChange = (text: string | number) => {
    setEditedValue(text);

    dispatch(updateSelectedProduct({fieldName, value: text}));
  };
  return (
    <View style={styles.rowContainer}>
      <View style={styles.leftColumn}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      </View>

      <View style={isEditable ? styles.rightInputColumn : styles.rightColumn}>
        {isEditable ? (
          <TextInput
            value={editedValue.toString()}
            onChangeText={handleChange}
            style={styles.priceInputContainer}
          />
        ) : (
          <View style={styles.priceContainer}>
            <Text>{value}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  leftColumn: {
    width: '50%',
    backgroundColor: '#D1D5DB',
  },
  labelContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  rightColumn: {
    width: '50%',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  rightInputColumn: {
    width: '50%',
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginTop: -12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    height: 25,
    paddingTop: 0,
  },
});

export default RowItem;
