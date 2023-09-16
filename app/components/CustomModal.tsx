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

// Api
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser } from "@/api/routes/users";
import toast from "react-hot-toast";

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
  const queryClient = useQueryClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const newUserMutation = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usersData"]);
      toast.success("New user has been added");
      setData(initialValue);
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = () => {
    newUserMutation.mutate(data);
  };

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
