import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RouteStackParamList} from '@src/configs/routes';

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RouteStackParamList>>();
  return (
    <View style={styles.container}>
      <ADIcon
        name="windowso"
        size={30}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
