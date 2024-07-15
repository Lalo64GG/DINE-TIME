import React, { useState } from "react";
import { InputConfig, FooterButtonConfig } from "../types/configTypes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Avatar,
} from "@nextui-org/react";
import { useInputValidation } from "../Tools/Hooks/useInputValidation"; // Asegúrate de importar el hook

type ModalUiProps = {
  buttonLabel?: string;
  modalTitle?: string;
  inputsConfig: Record<string, InputConfig>;
  footerButtons?: FooterButtonConfig[];
  onSubmit?: (formData: Record<string, any>) => void;
  photoIsRequired: boolean;
};

export const ModalUi = ({
  buttonLabel = "Open Modal",
  modalTitle = "Form",
  inputsConfig = {},
  footerButtons = [
    { label: "Close", color: "danger", variant: "flat", onClick: () => {} },
    { label: "Submit", color: "primary", onClick: () => {} },
  ],
  onSubmit,
  photoIsRequired,
}: ModalUiProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Initialize validation hooks for each input
  const validationStates = Object.keys(inputsConfig).reduce((acc, key) => {
    acc[key] = useInputValidation("");
    return acc;
  }, {} as Record<string, ReturnType<typeof useInputValidation>>);

  const handleChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    validationStates[key].setValue(value);
  };

  const renderInputs = (inputsConfig: Record<string, InputConfig>) => {
    return Object.entries(inputsConfig).map(([key, input], index) => {
      const validationState = validationStates[key];

      return (
        <Input
          key={key}
          name={key}
          autoFocus={index === 0}
          label={input.label}
          placeholder={input.placeholder}
          type={input.type || "text"}
          value={validationState.value}
          onChange={(e) => handleChange(key, e.target.value)}
          isInvalid={validationState.isInvalid}
          isRequired={true}
        />
      );
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    Object.values(validationStates).forEach((validationState) => {
      validationState.validate();
      if (validationState.isInvalid) {
        isValid = false;
      }
    });

    if (isValid && onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-[#8E0000] text-white">
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
              {photoIsRequired && (
                <div className="flex justify-center items-center mt-10">
                  <Avatar size="lg" />
                </div>
              )}
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>{renderInputs(inputsConfig)}</ModalBody>
              <ModalFooter>
                {footerButtons.map((button, index) => (
                  <Button
                    key={index}
                    color={button.color}
                    variant={button.variant || "solid"}
                    onPress={() => {
                      if (button.label === "Submit") {
                        handleSubmit();
                      } else {
                        button.onClick();
                        onClose();
                      }
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
