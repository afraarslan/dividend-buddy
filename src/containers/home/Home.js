import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import StockSearchModal from '../../components/StockSearchModal';
import {useDispatch, useSelector} from 'react-redux';
import {loadAllStocks} from '../../redux/modules/stocks/thunkActions';
import {$A} from '../../redux/helper';
import * as $SA from '../../redux/modules/stocks/actions';
import StockEditModal from '../../components/StockEditModal';

export default function HomeScreen() {
  const allStocks = useSelector((state) => state.stocks.allStocks);
  const filteredStocks = useSelector((state) => state.stocks.filteredStocks);
  const selectedStock = useSelector((state) => state.stocks.selectedStock);
  const [isModalVisible, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllStocks());
  }, []);

  return (
    <SafeAreaView
      style={{flexGrow: 1, backgroundColor: '#3fc295'}}
      edges={['top']}>
      <View>
        <View style={{height: 50, flexDirection: 'row'}}>
          <View
            style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5
              name="chart-pie"
              size={24}
              color={'white'}></FontAwesome5>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              {' '}
              Dividend Income{' '}
            </Text>
          </View>
          <View
            style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <EvilIcons name="plus" size={32} color={'white'}></EvilIcons>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{height: 90, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'white'}}> Annually </Text>
          <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
            {' '}
            --{' '}
          </Text>
        </View>
        <View style={{height: 90, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Monthly</Text>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              {' '}
              --{' '}
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}> Daily </Text>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              {' '}
              --{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'black'}}></View>
      {isModalVisible && (
        <StockSearchModal
          stocks={filteredStocks}
          onStockSearch={(text) => {
            dispatch($A($SA.FILTER_STOCKS, text));
          }}
          onStockPress={(stock) => {
            setModalVisibility(false);
          }}
          onClose={() => {
            dispatch($A($SA.RESET_STOCKS));
            setModalVisibility(false);
          }}
        />
      )}
      {selectedStock && (
        <StockEditModal
          stock={{ticker: 'AA', name: 'aa'}}
          onClose={() => {
            setModalVisibility(false);
          }}
        />
      )}
    </SafeAreaView>
  );
}
