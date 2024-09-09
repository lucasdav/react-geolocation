import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={styles.voltar}>
                {/* abaixo uso do navigate(-1) para retornar para tela anterior */}
                {/* goBack (equivalente ao navigate(-1)) e goForward (equivalente ao navigate(1)) */}
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    );
}