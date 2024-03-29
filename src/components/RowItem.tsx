import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RowItem: FC<{label: string; value: string | number}> = ({
  label,
  value,
}) => (
  <View style={styles.rowContainer}>
    <View style={styles.leftColumn}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
    <View style={styles.rightColumn}>
      <View style={styles.priceContainer}>
        <Text>{value}</Text>
      </View>
    </View>
  </View>
);

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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RowItem;
