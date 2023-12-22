import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";
function useShowToast() {
  const toast = useToast();
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status || "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );
  return showToast;
}
export { useShowToast };
