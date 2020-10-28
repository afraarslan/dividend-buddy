import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function StockEditModal(props) {
  const {stock} = props;

  return (
    <Modal isVisible={true} style={{margin: 0, backgroundColor: 'black'}}>
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
            <Text style={{fontSize: 18, color: '#318d71'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <View
            style={{
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: '#318d71'}}>
              {stock && stock.ticker}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 32, color: 'white'}}>
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
                backgroundColor: '#1c1c1e',
                color: 'white',
                fontSize: 24,
                borderRadius: 12,
              }}
              keyboardType={'decimal-pad'}></TextInput>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button title="Save Changes" onPress={props.onClose}></Button>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
