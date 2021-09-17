import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface BtProps {
  state?: any;
  descriptors?: any;
  navigation?: any;
}
const ButtonTab = ({ state, descriptors, navigation }: BtProps) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map(
        (route: { key: string | number; name: any }, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, marginHorizontal: 20, shadowColor: '#222' }}>
              {/* <Text style={{ color: isFocused ? '#04B05D' : '#222' }}>
                {label}
              </Text> */}
              <Icon
                name={label}
                size={30}
                style={{ color: isFocused ? '#04B05D' : '#222' }}
              />
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export default ButtonTab;
