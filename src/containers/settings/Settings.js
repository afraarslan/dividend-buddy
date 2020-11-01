import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {$A} from '../../redux/helper';
import * as $PA from '../../redux/modules/profile/actions';

export default function SettingsScreen() {
  const {user, theme, activeTheme} = useSelector((state) => state.profile);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch($A($PA.SET_ACTIVE_THEME, isEnabled ? 'dark' : 'light'));
  };
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{flexGrow: 1, backgroundColor: theme[activeTheme].background}}
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
              color: theme.primary,
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
          borderColor: theme.primary,
          borderRadius: 10,
          borderWidth: 5,
        }}>
        <View style={{height: 90, padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: theme[activeTheme].textSecondary,
            }}>
            Your Profile
          </Text>
          <View style={{height: 1, backgroundColor: theme.primary}}></View>
          <Text style={{fontSize: 20, color: theme[activeTheme].textSecondary}}>
            {user.name}
          </Text>
        </View>
        <View style={{height: 90, padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: theme[activeTheme].textSecondary,
            }}>
            Setting Options
          </Text>
          <View style={{height: 1, backgroundColor: theme.primary}}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{color: theme.text, fontSize: 20}}> Theme </Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
