import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalContent } from "@nextui-org/react";

type ConfirmAlertProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
};

export const ConfirmAlertModal = ({ visible, onClose, onConfirm, name }: ConfirmAlertProps) => {
  return (
    <Modal isOpen={visible} onClose={onClose} className="z-50" placement="top-center" backdrop="blur">
     <ModalContent>
     <ModalHeader>
        <h3>Confirmar Eliminación</h3>
      </ModalHeader>
      <ModalBody>
        <p>¿Estás seguro de que quieres eliminar a {name}?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="danger" variant="flat"  onClick={onConfirm}>
          Confirmar
        </Button>
      </ModalFooter>
     </ModalContent>
    </Modal>
  );
};
