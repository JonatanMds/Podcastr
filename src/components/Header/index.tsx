import format from 'date-fns/format'; //formatação
import ptBR from 'date-fns/locale/pt-BR'; //linguagem ptbr

import styles from '../Header/styles.module.scss';
export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR,
    });//formatação de data
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt=""/>

            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </header>
    );
}