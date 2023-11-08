import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN_KEY } from '@src/configs/constant.config';

export const getToken = async () =>
  await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

export const setToken = async (token: string) =>
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);

export const removeToken = async () =>
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
