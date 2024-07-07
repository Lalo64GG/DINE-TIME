import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Avatar,
  ModalProps,
} from "@nextui-org/react";

interface InputConfig {
  label: string;
  placeholder: string;
  type?: string;
  props?: Record<string, any>;
}

interface FooterButtonConfig {
  label: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "flat" | "ghost";
  onClick: () => void;
}

interface ModalUiProps {
  buttonLabel?: string;
  modalTitle?: string;
  inputsConfig: Record<string, InputConfig>;
  showCheckbox?: boolean;
  checkboxLabel?: string;
  footerButtons?: FooterButtonConfig[];
  linkText?: string;
  linkHref?: string;
  onSubmit?: () => void;
  photoIsRequired: boolean;
}

export const ModalUi = ({
  buttonLabel = "Open Modal",
  modalTitle = "Form",
  inputsConfig = {},
  showCheckbox = true,
  checkboxLabel = "",
  footerButtons = [
    { label: "Close", color: "danger", variant: "flat", onClick: () => {} },
    { label: "Submit", color: "primary", onClick: () => {} },
  ],
  linkText = "",
  linkHref = "#",
  onSubmit,
  photoIsRequired,
}: ModalUiProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderInputs = (inputsConfig: Record<string, InputConfig>) => {
    return Object.entries(inputsConfig).map(([key, input], index) => (
      <Input
        key={key}
        autoFocus={index === 0}
        label={input.label}
        placeholder={input.placeholder}
        type={input.type || "text"}
        variant="bordered"
        {...input.props} // Pasar props adicionales al Input
      />
    ));
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        {buttonLabel}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {
              photoIsRequired && 
              <div className="flex justify-center items-center mt-10">
                <Avatar size="lg" />
              </div>

              }
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                {renderInputs(inputsConfig)}
                {showCheckbox && (
                  <div className="flex py-2 px-1 justify-between">
                    <Link color="primary" href={linkHref} size="sm">
                      {linkText}
                    </Link>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                {footerButtons.map((button, index) => (
                  <Button
                    key={index}
                    color={button.color}
                    variant={button.variant || "solid"}
                    onPress={() => {
                      button.onClick();
                      onClose();
                    }}
                  >
                    {button.label}
                  </Button>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
