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
import {FlatList} from 'react-native-gesture-handler';

function formatDividend(number) {
  if (!number) {
    return '--';
  }
  return number.toFixed(2);
}

const StockItem = (props) => {
  const {ticker, name} = props.stock;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1e',
      }}
      onPress={props.onPress}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3fc295'}}>
          {ticker}
        </Text>
        <Text style={{fontSize: 16, color: 'white'}}>{name}</Text>
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, color: 'white'}}>{props.count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const allStocks = useSelector((state) => state.stocks.allStocks);
  const filteredStocks = useSelector((state) => state.stocks.filteredStocks);
  const addedStocks = useSelector((state) => state.stocks.addedStocks);
  const dividends = useSelector((state) => state.stocks.dividends);
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
            {formatDividend(dividends.annually)}
          </Text>
        </View>
        <View style={{height: 90, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Monthly</Text>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              {formatDividend(dividends.monthly)}
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}> Daily </Text>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              {formatDividend(dividends.daily)}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <FlatList
          keyExtractor={(item) => item.stock.ticker}
          data={addedStocks}
          renderItem={({item}) => (
            <StockItem
              stock={item.stock}
              count={item.count}
              onPress={() => {
                setModalVisibility(false);
                dispatch($A($SA.SET_SELECTED_STOCK, item.stock));
              }}
            />
          )}></FlatList>
      </View>
      {isModalVisible && (
        <StockSearchModal
          stocks={filteredStocks}
          onStockSearch={(text) => {
            dispatch($A($SA.FILTER_STOCKS, text));
          }}
          onStockPress={(stock) => {
            dispatch($A($SA.SET_SELECTED_STOCK, stock));
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
          stock={selectedStock}
          onClose={() => {
            dispatch($A($SA.RESET_STOCKS));
            dispatch($A($SA.RESET_SELECTED_STOCK));
          }}
        />
      )}
    </SafeAreaView>
  );
}
