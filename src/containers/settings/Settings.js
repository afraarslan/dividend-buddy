import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView
      style={{flexGrow: 1, backgroundColor: 'black'}}
      edges={['top']}>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#3fc295',
              fontWeight: 'bold',
            }}>
            {' '}
            Settings{' '}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <View style={{height: 90, padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Your Profile
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'green',
        }}>
        <View style={{height: 90, padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Setting Options
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
