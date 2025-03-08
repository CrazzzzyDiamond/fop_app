import s from './loader.module.css';

const Loader = () => {
    return (
        <div className={s.loaderWrapper}>
            <div className={s.loader} />
        </div>
    )
}

export default Loader;