import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';

interface LayoutProps {
  children: ReactNode;
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  keyboardAvoidingViewProps,
}) => (
  <View style={styles.background}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      {...keyboardAvoidingViewProps}>
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
});

export default Layout;
