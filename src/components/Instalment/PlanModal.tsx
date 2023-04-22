import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,

} from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { Plan } from "../../util/genRepayment";
import PlanCard from "./PlanCard";

interface IPlanModal {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<SetStateAction<number>>;
  plan: Plan;
  dataLength: number;
}

const PlanModal = ({
  selectedIndex,
  setSelectedIndex,
  plan,
  dataLength,
}: IPlanModal) => {


  return (
    <Modal
      isOpen={selectedIndex !== -1}
      onClose={() => setSelectedIndex(-1)}
      size="xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent top={'1rem'}>
        <ModalHeader>Plan Details</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <PlanCard plan={plan} setSelectedIndex={setSelectedIndex} dataLength={dataLength}/>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

export default PlanModal;
