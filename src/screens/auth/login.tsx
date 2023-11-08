import { NavigationProp, useNavigation } from '@react-navigation/native';
import { i18nKeys } from '@src/configs/i18n';
import { RouteStackParamList } from '@src/configs/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RouteStackParamList>>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ADIcon
        name="windowso"
        size={30}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>{t(i18nKeys.auth.login)}</Text>
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
