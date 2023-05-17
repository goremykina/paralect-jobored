import { InnerBlock, Logo, Menu, ExternalBlock, LogoText, InnerContent } from './style.ts';
import Icon from '../../assets/icons/logo.svg';

export default function Header () {
    return (
        <ExternalBlock>
            <InnerBlock>
                <Logo href="/">
                    <Icon />
                    <LogoText>Jobored</LogoText>
                </Logo>
                <Menu>
                    <InnerContent>Поиск Вакансий</InnerContent>
                    <InnerContent>Избранное</InnerContent>
                </Menu>
            </InnerBlock>
        </ExternalBlock>
    );
}
