import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --PhoneInput-color--focus: #03b2cb;
        --PhoneInputInternationalIconPhone-opacity: 0.8;
        --PhoneInputInternationalIconGlobe-opacity: 0.65;
        --PhoneInputCountrySelect-marginRight: 0.35em;
        --PhoneInputCountrySelectArrow-width: 0.3em;
        --PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
        --PhoneInputCountrySelectArrow-borderWidth: 1px;
        --PhoneInputCountrySelectArrow-opacity: 0.45;
        --PhoneInputCountrySelectArrow-color: inherit;
        --PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
        --PhoneInputCountrySelectArrow-transform: rotate(45deg);
        --PhoneInputCountryFlag-aspectRatio: 1.5;
        --PhoneInputCountryFlag-height: 1em;
        --PhoneInputCountryFlag-borderWidth: 1px;
        --PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
        --PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
        --PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
    }

    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        font-family: 'Open Sans', sans-serif;

        outline: none;
    }

    html {
        font-size: 16px;
    }

    body {
        display: flex;
        justify-content: center;

        background: #f7f7fc;
    }

    h1 {
        font-size: 1.625rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.375rem;
    }

    h4 {
        font-size: 1.25rem;
    }

    h5 {
        font-size: 1.125rem;
    }

    h6 {
        font-size: 1rem;
    }

    p,
    a,
    span,
    button,
    select,
    label,
    input,
    input::placeholder, {
        font-size: 1rem;
    }
`;
