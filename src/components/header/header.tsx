import { InnerBlock, Logo } from './style.ts';

export default function Header () {
    return (
        <div>
            <InnerBlock>
                <Logo>
                    <p>Pic</p>
                    <h2>Jobored</h2>
                </Logo>
                <div>
                    <h4>Поиск Вакансий</h4>
                    <h4>Избранное</h4>
                </div>
            </InnerBlock>
        </div>
    );
}
