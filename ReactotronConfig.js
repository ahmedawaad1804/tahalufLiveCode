import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure() // Configure with default settings
  .useReactNative() // Add built-in React Native support
  .connect(); // Connect to the Reactotron desktop app

console.tron = reactotron; // Make it accessible globally

if (__DEV__) {
  console.tron.log('Reactotron Configured');
}

export default reactotron;
