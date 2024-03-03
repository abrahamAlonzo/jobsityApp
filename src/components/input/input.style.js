import {StyleSheet} from 'react-native';
import {pixelToRem, COLORS} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  inputContainer: {
    height: pixelToRem(43),
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: pixelToRem(20),
    paddingHorizontal: pixelToRem(12),
    borderColor: COLORS.primaryGray,
    fontSize: pixelToRem(16),
    fontWeight: '400',
  },
  title: {
    color: COLORS.primaryBlack,
    fontSize: pixelToRem(12),
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  requiredText: {
    color: 'red',
  },
});
