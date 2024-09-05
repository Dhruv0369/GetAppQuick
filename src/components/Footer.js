const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{ position: 'fixed', bottom: '0', width: '100%', fontSize: '0.9rem' }}>
            <div className="text-center" style={{ backgroundColor: 'rgb(229 230 234)', height: '40px', lineHeight: '40px' }}>
                <a href="#" className="text-dark mx-2" style={{ fontSize: '0.9rem' }}>About Us</a>
                <a href="#" className="text-dark mx-2" style={{ fontSize: '0.9rem' }}>Privacy Policy</a>
                <a href="#" className="text-dark mx-2" style={{ fontSize: '0.9rem' }}>Terms of Service</a>
                <a href="#" className="text-dark mx-2" style={{ fontSize: '0.9rem' }}>Contact Us</a>
                <a href="#" className="text-dark mx-2 " style={{ fontSize: '0.9rem' }}>Disclaimer</a>
                © 2024 Get App Quick. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;