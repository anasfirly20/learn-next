import { ChangeEvent, useEffect, useState } from "react";

// Next UI
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

// swr
import { useUser } from "@/swr/useUser";

type TProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const initialValue = {
  name: "",
  email: "",
  address: "",
};

export default function CustomModal({ isOpen, onOpenChange }: TProps) {
  const [data, setData] = useState(initialValue);
  const { mutate } = useUser();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    mutate({
      name: data.name,
      email: data.email,
      address: data.address,
    });
  };

  useEffect(() => {
    console.log("DAA>>", data);
  }, [data]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new user
              </ModalHeader>
              <ModalBody>
                <Input
                  variant="underlined"
                  type="text"
                  label="Name"
                  name="name"
                  value={data?.name}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  variant="underlined"
                  type="email"
                  label="Email"
                  name="email"
                  value={data?.email}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  variant="underlined"
                  type="text"
                  label="Address"
                  name="address"
                  value={data?.address}
                  onChange={(e) => handleChange(e)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    console.log("DATA >>", data);
                    handleSubmit();
                    onClose();
                  }}
                >
                  Add user
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
//