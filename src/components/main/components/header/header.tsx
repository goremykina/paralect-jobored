import { InnerBlock, Logo, Menu, ExternalBlock, LogoText, NavBarLink } from './style.ts';
import Icon from '../../../../assets/icons/logo.svg';

export default function Header () {
    return (
        <ExternalBlock>
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
        </ExternalBlock>
    );
}
