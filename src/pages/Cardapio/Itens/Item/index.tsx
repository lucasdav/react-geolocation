import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';


export default function Item(props: Prato) {
    const { id, title, description, category, size, serving, price, photo } = props;
    const navigate = useNavigate();

    // const { mode } = useMode();

    // useLayoutEffect(() => {
    //     if (title === 'Macarrão mediterrâneo') console.log('componentWillMount');
    // }, [title]);

    // useEffect(() => {
    //     if (title === 'Macarrão mediterrâneo') console.log('componentDidMount');
    // }, [title]);

    // useEffect(() => {
    //     if (title === 'Macarrão mediterrâneo') console.log('componentDidUpdate', mode);
    // }, [title, mode]);

    // useEffect(() => {
    //     return () => {
    //         if (title === 'Macarrão mediterrâneo') console.log('componentWillUnmount');
    //     };
    // }, [title]);

    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    );
}