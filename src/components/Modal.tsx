import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDraggable,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function App({ isOpen, onOpenChange }: ModalProps) {
  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({
    targetRef,
    canOverflow: true,
    isDisabled: !isOpen,
  });

  return (
    <>
      <Modal
        ref={targetRef}
        className="bg-bgsecondary rounded-md"
        classNames={{
          backdrop: "blur-sm",
          closeButton: "mt-2 text-3xl",
          wrapper: "rounded-sm",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader
                {...moveProps}
                className="flex flex-col gap-1 border-b border-gray-600"
              >
                <Input
                  className="max-w-[79%]"
                  classNames={{
                    inputWrapper: "bg-transparent",
                  }}
                  placeholder="Search..."
                />
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
