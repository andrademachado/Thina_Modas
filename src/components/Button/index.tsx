import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label?: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  height?: string; 
  mt?: string;
  onClick?: () => void;
  children?: React.ReactNode; // opcional caso queira usar children
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
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};

  margin-top: ${p => p.$mt ?? '0'};
  height: ${p => p.$height ?? 'auto'};
  transition: transform 0.1s ease-in-out, box-shadow 150ms ease;
  &:active { transform: translateY(2px); }
`;
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  bgColor,
  textColor,
  children,
  onClick,
  label,
  mt,
  height
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $bgColor={bgColor}
      $textColor={textColor}
      $mt={mt}
      $height={height}
      onClick={onClick}
      aria-label={label ?? undefined}
    >
      {children ?? label}
    </StyledButton>
  );
};
  
