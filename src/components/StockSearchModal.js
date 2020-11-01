import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

const StockItem = (props) => {
  const {theme, activeTheme} = useSelector((state) => state.profile);

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          padding: 5,
          borderBottomColor: theme[activeTheme].background,
          borderBottomWidth: 0.5,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: theme.text}}>
          {props.ticker}
        </Text>
        <Text style={{fontSize: 16, color: theme[activeTheme].textSecondary}}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function StockSearchModal(props) {
  const {theme, activeTheme} = useSelector((state) => state.profile);

  return (
    <Modal
      isVisible={true}
      style={{margin: 0, backgroundColor: theme[activeTheme].background}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', padding: 5, height: 70}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextInput
              onChangeText={props.onStockSearch}
              style={{
                padding: 8,
                backgroundColor: theme[activeTheme].secondary,
                color: theme[activeTheme].textSecondary,
                fontSize: 16,
                borderRadius: 12,
              }}></TextInput>
          </View>
          <View
            style={{width: 65, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.onClose}>
              <Text style={{fontSize: 16, color: theme.text}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: theme[activeTheme].secondary}}>
          <FlatList
            keyExtractor={(item) => item.ticker}
            data={props.stocks}
            renderItem={({item}) => (
              <StockItem
                ticker={item.ticker}
                name={item.name}
                onPress={() => props.onStockPress(item)}
              />
            )}></FlatList>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
