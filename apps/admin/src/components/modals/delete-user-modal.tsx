import { VStack, useColorModeValue, Box } from "@chakra-ui/react";
import { Paragraph, Button } from "@sportycoon/ui";
import { useTranslations } from "next-intl";
import { TRANSLATES_NAMESPACES } from "@sportycoon/locales";
import { Modal } from "@admin/components/common";

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteUserModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteUserModalProps): JSX.Element {
  const translate = useTranslations(TRANSLATES_NAMESPACES.MODALS);

  const cancelButtonVariant = useColorModeValue("primary", "secondary");
  const confirmButtonVariant = useColorModeValue("danger-light", "danger-dark");

  return (
    <Modal
      footer={
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Button onClick={onClose} size="xl" variant={cancelButtonVariant}>
            <Paragraph className="text-[14px]" variant="montserratBold">
              {translate("DELETE_USER_ACCOUNT.CANCEL")}
            </Paragraph>
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            size="xl"
            variant={confirmButtonVariant}
          >
            <Paragraph className="text-[14px]" variant="montserratBold">
              {translate("DELETE_USER_ACCOUNT.CONFIRM")}
            </Paragraph>
          </Button>
        </Box>
      }
      isOpen={isOpen}
      onClose={onClose}
      title={translate("DELETE_USER_ACCOUNT.TITLE")}
    >
      <VStack spacing={4}>
        <Paragraph variant="montserrat">
          {translate("DELETE_USER_ACCOUNT.DESCRIPTION")}
        </Paragraph>
      </VStack>
    </Modal>
  );
}
