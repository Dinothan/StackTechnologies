import React, {FC, useCallback, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Layout from '../components/Layout';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {getProducts} from '../store/thunk/productThunk';
import Spinner from '../components/Spinner';
import CardComponent from '../components/Card';
import {Product} from '../types/product';
import {getSelectedProduct} from '../store/slices/productSlice';

const HomeScreen: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const {products, isLoading} = useAppSelector(state => state.products);

  const getSelectProduct = useCallback(
    (id: number) => {
      const selectedProduct = products.find(res => res.skuid === id);
      dispatch(getSelectedProduct(selectedProduct));
      navigation.navigate('ViewProduct', {isEdit: false});
    },
    [dispatch, navigation, products],
  );

  return (
    <ScrollView>
      {isLoading ? (
        <Spinner />
      ) : (
        <Layout>
          {products?.length > 0 &&
            products.map((res: Product) => (
              <CardComponent
                key={res.skuid}
                id={res.skuid}
                title={res.skuname_enGB}
                content={res.skushortdescription_enGB}
                imageUrl={res.skuimageurl}
                getSelectProduct={getSelectProduct}
                navigation={navigation}
              />
            ))}
        </Layout>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {paddingBottom: 20},
  textStyle: {textAlign: 'center', fontSize: 16, fontWeight: 'bold'},
});

export default HomeScreen;
