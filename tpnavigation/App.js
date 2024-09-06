import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Screen A1
function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={[styles.screen, { backgroundColor: '#FFC0CB' }]}>
      <Text style={styles.text}>Pantalla A1</Text>
      <Button title="Ir a A2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}

// Screen A2
function ScreenA2() {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFC0CB' }]}>
      <Text style={styles.text}>Pantalla A2</Text>
    </View>
  );
}

// Screen B1
function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={[styles.screen, { backgroundColor: '#FFFF00' }]}>
      <Text style={styles.text}>Pantalla B1</Text>
      <Button title="Ir a B2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}

// Screen B2
function ScreenB2() {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFFF00' }]}>
      <Text style={styles.text}>Pantalla B2</Text>
    </View>
  );
}

// Screen C1: Pantalla que pide Nombre y Teléfono
function ScreenC1({ navigation }) {
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');

  return (
    <View style={[styles.screen, { backgroundColor: '#90EE90' }]}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="numeric"
        onChangeText={(text) => setTelefono(text)}
      />
      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('ScreenC2', { nombre, telefono })}
      />
    </View>
  );
}

// Screen C2: Mostrar Nombre y Teléfono
function ScreenC2({ route, navigation }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={[styles.screen, { backgroundColor: '#90EE90' }]}>
      <Text style={styles.text}>Hola {nombre}, tu teléfono es {telefono}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

// Screen D1: Pantalla de Configuración principal
function ScreenD1() {
  return (
    <View style={[styles.screen, { backgroundColor: '#ADD8E6' }]}>
      <Text style={styles.text}>Pantalla de Configuración</Text>
    </View>
  );
}

// Stack A Navigator
const StackA = createNativeStackNavigator();
function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

// Stack B Navigator
const StackB = createNativeStackNavigator();
function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

// Stack C Navigator
const StackC = createNativeStackNavigator();
function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

// Stack D Navigator (Configuración)
const StackD = createNativeStackNavigator();
function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
    </StackD.Navigator>
  );
}

// Bottom Tabs Navigator
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={StackBNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
});
