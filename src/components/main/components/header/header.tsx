import { InnerBlock, Logo, Menu, OuterBlock, LogoText, NavBarLink } from './style.ts';
import Icon from '../../../../assets/icons/logo.svg';

export default function Header () {
    return (
        <OuterBlock>
            <InnerBlock>
                <Logo to="/">
                    <Icon />
                    <LogoText>Jobored</LogoText>
                </Logo>
                <Menu>
                    <NavBarLink to="/">Поиск Вакансий</NavBarLink>
                    <NavBarLink to="/favorites">Избранное</NavBarLink>
                </Menu>
            </InnerBlock>
        </OuterBlock>
    );
}
