import React, {useMemo} from 'react';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';

interface AlertProps {
  visible: boolean;
  hideAlert: () => void;
  title: string;
  description: string;
}

const AlertComponent: React.FC<AlertProps> = ({
  visible,
  hideAlert,
  title,
  description,
}) => {
  const AlertDialog = useMemo(() => {
    return (
      <Dialog visible={visible} onDismiss={hideAlert}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideAlert}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    );
  }, [visible, hideAlert, title, description]);

  return <Portal>{AlertDialog}</Portal>;
};

export default AlertComponent;
