import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,

} from "@chakra-ui/react";
import React from "react";
import { Plan } from "../../util/genRepayment";
import PlanCard from "./PlanCard";
import { SelectIndexReducerAction, resetIndex } from '../../reducer/instalmentReducer';

interface IPlanModal {
  selectedIndex: number;
  dispatch:React.Dispatch<SelectIndexReducerAction>;
  plan: Plan;
  dataLength: number;
}

const PlanModal = ({
  selectedIndex,
  dispatch,
  plan,
  dataLength,
}: IPlanModal) => {


  return (
    <Modal
      isOpen={selectedIndex !== -1}
      onClose={() => dispatch(resetIndex())}
      size="xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent top={'1rem'}>
        <ModalHeader>Plan Details</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <PlanCard plan={plan} dispatch={dispatch} dataLength={dataLength}/>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

export default PlanModal;
