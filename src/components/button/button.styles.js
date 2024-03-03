export const presets = (color, disabled) => {
  return {
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: disabled ? '#F8F2FF' : color ? color : '#9747FF',
      borderRadius: 50,
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 8,
    },
    textColor: '#FFF',
  };
};
