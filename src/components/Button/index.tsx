// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  label?: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  height?: string;
  mt?: string;
  onClick?: (e?: React.MouseEvent) => void;
  children?: React.ReactNode;
  // NAVIGATION
  to?: string;           // se definido, o Button irá renderizar como <Link>
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

type StyledProps = {
  $bgColor?: string;
  $textColor?: string;
  $size?: ButtonProps['size'];
  $mt?: string;
  $height?: string;
  $variant?: ButtonProps['variant'];
};

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${p => p.$bgColor ?? '#fff'};
  color: ${p => p.$textColor ?? '#000'};

  padding: ${p => {
    switch (p.$size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};

  border: ${p => (p.$bgColor === '#fff' || p.$bgColor === '#ffffff' ? '2px solid #000' : 'none')};
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Roboto+Condensed', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${p => {
    switch (p.$size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};

  margin-top: ${p => p.$mt ?? '0'};
  height: ${p => p.$height ?? 'auto'};
  transition: transform 0.1s ease-in-out, box-shadow 150ms ease;
  text-decoration: none;
  &:active { transform: translateY(2px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;

/**
 * Button:
 * - Se prop `to` estiver definida, o componente renderiza como <Link> (com mesmo estilo)
 * - Se não, renderiza como <button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  bgColor,
  textColor,
  children,
  onClick,
  label,
  mt,
  height,
  to,
  target,
  rel,
  type = 'button',
  ariaLabel
}) => {
  const Component: any = to ? Link : 'button';

  const commonProps: any = {
    $variant: variant,
    $size: size,
    $bgColor: bgColor,
    $textColor: textColor,
    $mt: mt,
    $height: height,
    onClick,
    'aria-label': ariaLabel ?? label ?? undefined,
  };

  return (
    // @ts-ignore: as Link when `to` exists
    <StyledButton
      as={Component}
      {...commonProps}
      {...(to ? { to, target, rel } : { type })}
    >
      {children ?? label}
    </StyledButton>
  );
};

export default Button;
