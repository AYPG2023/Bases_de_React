import { Colors } from '@/constants/Colors';
import { Button, StyleSheet } from 'react-native';
// Aca crearemos todos los estilos globales que se usaran en la aplicacion.
// Estos estilos se pueden usar en cualquier parte de la aplicacion.
// Para usar estos estilos en cualquier parte de la aplicacion, se debe importar de la siguiente manera:

export const globalStyles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Colors.background,
    },
  
    calculatorContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 20,
    },
  
    mainResult: {
      color: Colors.textPrimary,
      fontSize: 70,
      textAlign: 'right',
      fontWeight: '400',
      // fontFamily: 'SpaceMono',
    },
  
    subResult: {
      color: Colors.textSecondary,
      fontSize: 40,
      textAlign: 'right',
      fontWeight: '300',
    },
  
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10,
    },
  
    button: {
      height: 80,
      width: 80,
      backgroundColor: Colors.darkGray,
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
    },
  
    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: Colors.textPrimary,
      fontWeight: '300',
      fontFamily: 'SpaceMono',
    },
  });