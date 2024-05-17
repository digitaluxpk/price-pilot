import { notifications } from "@mantine/notifications";

export const handleCopy = async (text) => {
    
    try {
      await navigator.clipboard.writeText(text);
      
      notifications.show({
        color: 'green',
        // title: 'Invalid File Type',
        message: 'Link Copied',
        autoClose: true,
        withCloseButton: true,
      }); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
