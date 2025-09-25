// components/Button/index.tsx
import styled from 'styled-components';
import { cores } from '../../styles';

interface ButtonProps {
    bgColor?: string;          // ← Cor de fundo personalizada
    textColor?: string;        // ← Cor do texto personalizada  
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  /* 🎨 COR DE FUNDO INTELIGENTE */
background: ${props => props.bgColor ||
        (props.variant === 'success' ? cores.verde :     // Verde
        props.variant === 'danger' ? cores.vinho :      // Vinho  
        props.variant === 'secondary' ? cores.rosaBranco :  // Marrom
        props.variant === 'light' ? cores.branco :      // Branco (NOVO)
        props.variant === 'dark' ? cores.preto :        // Preto (NOVO)
        cores.verde)}; // ← primary também é verde

  /* ✨ COR DO TEXTO INTELIGENTE (Agora mais esperta!) */
  color: ${props => {
        // 1° Se tiver cor personalizada, usa ela
        if (props.textColor) return props.textColor;

        // 2° Se não, escolhe cor contrastante baseada no fundo
        switch (props.variant) {
            case 'light': return cores.preto;    // Branco → Preto (contraste)
            case 'dark': return cores.branco;    // Preto → Branco (contraste)
            case 'success': return cores.branco; // Verde → Branco
            case 'danger': return cores.branco;  // Vinho → Branco  
            case 'secondary': return cores.branco; // Marrom → Branco
            default: return cores.branco;        // Padrão → Branco
        }
    }};

  /* 📏 TAMANHO INTELIGENTE */
  padding: ${props => {
        switch (props.size) {
            case 'small': return '8px 16px';
            case 'large': return '16px 32px';
            default: return '12px 24px';
        }
    }};

  /* 🎭 ESTILOS FIXOS */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${props => {
        switch (props.size) {
            case 'small': return '0.875rem';
            case 'large': return '1.125rem';
            default: return '1rem';
        }
    }};
  
  /* BORDA DINÂMICA PARA BOTÕES CLAROS */
  border: ${props => {
        if (props.variant === 'light') return `2px solid ${cores.marrom}`;
        if (props.bgColor === cores.branco) return `2px solid ${cores.marrom}`;
        return 'none';
    }};
  
  /* 🖱️ EFEITO HOVER */
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    /* Efeito extra para botões claros */
    background: ${props => {
        if (props.variant === 'light') return cores.marrom;
        if (props.bgColor === cores.branco) return cores.marrom;
        return props.bgColor || '';
    }};
    
    color: ${props => {
        if (props.variant === 'light') return cores.branco;
        if (props.bgColor === cores.branco) return cores.branco;
        return '';
    }};
  }

  /* 👆 EFEITO CLICK */
  &:active {
    transform: translateY(0);
  }

  /* ♿ ACESSIBILIDADE */
  &:focus {
    outline: 2px solid ${cores.marrom};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    bgColor,
    textColor,
    children,
    onClick
}) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            bgColor={bgColor}
            textColor={textColor}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};