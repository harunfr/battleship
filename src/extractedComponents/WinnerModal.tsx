import React from 'react';
import styled from 'styled-components';

interface WinnerModalProps {
  winner: string | null;
}

function WinnerModal({ winner }: WinnerModalProps): JSX.Element {
  return (
    <Modal>
      The winner is
      {winner}
      !!!!!!
    </Modal>
  );
}

const Modal = styled.div`
  width: '500px';
  height: '500px';
  background-color: '#8a8827b3';
`;

export default WinnerModal;
