import { NavigationProp, useNavigation } from '@react-navigation/native';
import { i18nKeys } from '@src/configs/i18n';
import { RouteStackParamList } from '@src/configs/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RouteStackParamList>>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ADIcon
        name="home"
        size={30}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Text>{t(i18nKeys.home.title)}</Text>
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

export default HomeScreen;
