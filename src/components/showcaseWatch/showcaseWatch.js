import React, {useState} from "react";
import './showcaseWatch.scss';

export default function ShowcaseWatch(props) {

    const [isBlack, setIsBlack] = useState(true);

    const handleSwitchColor = (isBlackSelected) => {
        setIsBlack(isBlackSelected);
    };

    return (
        <div className="showcase-watch">
            <div className="showcase-watch__body d-flex">
                <div className="body__group block__group">
                    <div className="body__group__item block__group__item d-flex flex-column">
                        <h4 className="showcase-watch__subtitle text-danger">Apple Watch</h4>
                        <h1 className='showcase-watch__title'>Change starts within.</h1>
                        <p className="showcase-watch__description">
                            Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you be even more active, healthy, and connected.
                        </p>
                    </div>
                    <div className="body__group__item block__group__item -img-switch">
                        <div className={`img-switch-wrapper ${isBlack ? '-black-selected':''}`}>
                            <img src="/images/Black Watch-1.png" alt="" className="img-switch -black w-100"/>
                            <img src="/images/White Watch-2.png" alt="" className="img-switch -white w-100"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="showcase-watch__footer">
                <div className="block__group">
                    <div className="block__group__item">
                        <h3 className="footer__price">From $699</h3>
                        <a href='/#' className="footer__link text-danger">Buy Now ></a>
                    </div>
                    <div className="block__group__item -switch">
                        <button className={`switch__link ${isBlack ? '': '-selected'}`} onClick={() => handleSwitchColor(false)}>
                            <div className="select__color select-white" />
                        </button>
                        <button className={`switch__link ${isBlack ? '-selected': ''}`} onClick={() => handleSwitchColor(true)}>
                            <div className="select__color select-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}