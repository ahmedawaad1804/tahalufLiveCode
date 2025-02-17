import React from 'react';
import * as COMPJSON from '../../appBuilder.json';
import {Stack} from '../StackNavigation';

import {Button, FlatList, Text, TextInput, View} from 'react-native';

type ComponentType = 'View' | 'Text' | 'TextInput' | 'Button' | 'FlatList';

const stackGenerator = () => {
  const dynamicStack = [];
  COMPJSON.pages.forEach(item => {
    dynamicStack.push(
      <Stack.Screen
        name={item?.name}
        component={({navigation}) => screenGenerator(item.content, navigation)}
      />,
    );
  });
  return dynamicStack;
};

const screenGenerator = (item, navigation) => {
  const Comp = getComponentType(item?.type);

  const componentProps = getComponentProps(item, navigation);

  const hasChildren = item?.children?.length > 0;

  if (hasChildren) {
    return (
      <Comp {...componentProps}>
        {item?.children?.map(childComp => {
          return screenGenerator(childComp, navigation);
        })}
      </Comp>
    );
  }

  return <Comp {...componentProps} />;
};

function screenGeneratorSimplified(itemComponent, item) {
  const Comp = getComponentType(itemComponent?.type);

  const componentProps = getComponentProps(itemComponent, {});

  return <Comp {...componentProps}>{item.name}</Comp>;
}

const getComponentProps = (comp: any, navigation) => {
  switch (comp?.type) {
    case 'View':
      return comp?.props;
    case 'Button': {
      const buttonProps = handleButtonActions(comp?.props, navigation);
      return {...comp?.props, ...buttonProps};
    }
    case 'Text': {
      const buttonProps = handleButtonActions(comp?.props, navigation);
      return {...comp?.props, ...buttonProps};
    }
    case 'TextInput':
      return comp?.props;
    case 'FlatList':
      const flatListProps = handleFlatLisProps(comp?.props);
      return {...comp?.props, ...flatListProps};

    default:
      return comp?.props;
  }
};

const getComponentType = (type: ComponentType) => {
  switch (type) {
    case 'View':
      return View;
    case 'Button':
      return Button;
    case 'Text':
      return Text;
    case 'TextInput':
      return TextInput;
    case 'FlatList':
      return FlatList;
    default:
      break;
  }
};

const handleFlatLisProps = flatListProps => {
  return {
    ...flatListProps,
    renderItem: ({item, index}) => {
      return screenGeneratorSimplified(flatListProps?.renderItem, item, index);
    },
  };
};
const handleButtonActions = (buttonActions: any, navigation) => {
  switch (true) {
    case buttonActions.hasOwnProperty('onPress'):
      return {
        onPress: () => {
          console.log(buttonActions?.onPress);
        },
      };

    case buttonActions.hasOwnProperty('navigateTo'):
      return {
        onPress: () => {
          navigation.navigate(buttonActions?.navigateTo);
        },
      };

    default:
      return {
        onPress: () => {
          console.log('navigation');
        },
      };
  }
};
export {stackGenerator};
