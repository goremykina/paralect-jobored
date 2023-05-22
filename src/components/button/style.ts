import styled from "styled-components";
import { blue, white } from "../../styles/colors.ts";

type Props = {
    size: Size
}

export type Size = 'small' | 'unlimited';

const getWidth = (props: Props) => {
    switch (props.size) {
        case 'small':
            return '5.25rem';
        default:
            return '100%';
    }
};

const getHeight = ({ size }: Props) => {
    switch (size) {
        case 'small':
            return '2rem';
        default:
            return '2.5rem';
    }
};

export const StyledButton = styled.button`
  height: ${getHeight};
  background: ${blue};
  border-radius: 0.5rem;
  width: ${getWidth};
  color: ${white};
  border: none;
`;
