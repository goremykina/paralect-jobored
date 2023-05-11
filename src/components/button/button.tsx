import { Size, StyledButton } from "./style.ts";

type Props = {
    children: JSX.Element | string,
    size?: Size
}

export default function Button({ children, size = 'unlimited', ...restProps } : Props) {
    return (
        <StyledButton size={size} {...restProps}>
            {children}
        </StyledButton>
    );
}
