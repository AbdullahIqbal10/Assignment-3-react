import React from 'react'
import Logo from './Logo';
function Footer()
{
    return(
        <>
       <footer className="footer">
        <div className="l-footer">
            <h1>
                <Logo/>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt
                molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
                recusandae.</p>
        </div>

        <div className="b-footer">
            <p>
                All rights reserved by ©Redstore 2022 </p>
        </div>
    </footer>
        </>
    );
}
export default Footer;
