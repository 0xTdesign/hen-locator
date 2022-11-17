import React from "react";
import { ConnectKitButton } from "connectkit";
import "./Connect.css";

import styled from "styled-components";

export default function Connect() {
  const StyledButton = styled.button`
    cursor: pointer;
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10rem;

    // transition: 200ms ease;
    // &:hover {
    //   transform: translateY(-6px);
    //   box-shadow: 0 6px 40px -6px #1a88f8;
    // }
    // &:active {
    //   transform: translateY(-3px);
    //   box-shadow: 0 6px 32px -6px #1a88f8;
    // }
  `;

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return <StyledButton onClick={show}>{isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}</StyledButton>;
      }}
    </ConnectKitButton.Custom>
  );
}
