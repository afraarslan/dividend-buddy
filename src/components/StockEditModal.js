import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {$A} from '../redux/helper';
import * as $SA from '../redux/modules/stocks/actions';

export default function StockEditModal(props) {
  const {stock} = props;
  const selectedStockInfo = useSelector(
    (state) => state.stocks.selectedStockInfo,
  );
  const {theme, activeTheme} = useSelector((state) => state.profile);
  // const addedStocks = useSelector((state) => state.stocks.addedStocks);
  const [stockCount, setStockCount] = useState(
    selectedStockInfo ? selectedStockInfo.count : 0,
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isVisible={true}
      style={{margin: 0, backgroundColor: theme[activeTheme].background}}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 65,
            padding: 5,
          }}>
          <TouchableOpacity
            onPress={props.onClose}
            style={{
              width: 80,
              height: 40,
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: theme.text}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: theme[activeTheme].background}}>
          <View
            style={{
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: theme.text}}>
              {stock && stock.ticker}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 32, color: theme[activeTheme].textSecondary}}>
              {stock && stock.name}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <TextInput
              onChangeText={props.onStockSearch}
              style={{
                padding: 8,
                width: 200,
                backgroundColor: theme[activeTheme].secondary,
                color: theme[activeTheme].textSecondary,
                fontSize: 24,
                borderRadius: 12,
              }}
              keyboardType={'decimal-pad'}
              value={String(stockCount)}
              onChangeText={(text) => setStockCount(text)}></TextInput>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="Save Changes"
              onPress={() => {
                dispatch(
                  $A($SA.ADD_OR_EDIT_STOCK_TO_SELECTED, {
                    stock: props.stock,
                    count: Number(stockCount),
                  }),
                );
                props.onClose();
              }}></Button>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
