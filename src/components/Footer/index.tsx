import s from './footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <p>&copy; FOP CALC 2025</p>
            </div>
        </footer>
    );
}

export default Footer;