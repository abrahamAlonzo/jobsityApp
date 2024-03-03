import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  inputContainer: {
    height: 43,
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderColor: COLORS.primaryGray,
    fontSize: 16,
    fontWeight: '400',
  },
  title: {
    color: COLORS.primaryBlack,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  requiredText: {
    color: 'red',
  },
});
