import React from 'react';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';

interface AlertProps {
  visible: boolean;
  hideAlert: () => void;
  title: string;
  description: string;
  actionButtons: {
    text: string;
    style?: 'default' | 'cancel' | 'destructive';
    onPress: () => void;
  }[];
}

const AlertComponent: React.FC<AlertProps> = ({
  visible,
  hideAlert,
  title,
  description,
  actionButtons,
}) => {
  const renderActionButtons = () => {
    return actionButtons.map((button, index) => (
      <Button
        key={index}
        onPress={button.onPress}
        textColor={button.style === 'destructive' ? 'red' : undefined}>
        {button.text}
      </Button>
    ));
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideAlert}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>{renderActionButtons()}</Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertComponent;
