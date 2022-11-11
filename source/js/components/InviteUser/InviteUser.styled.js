import styled from 'styled-components';

const InviteUserStyled = styled.div`
    & .form {
        display: flex;
        flex-direction: column;
        gap: 24px;

        & .PhoneInput {
            display: flex;
            align-items: center;

            .PhoneInputInput {
                flex: 1;

                min-width: 0;

                padding: 12px 12px 12px 58.39px;

                font-size: 1rem;
                color: #4e4b66;

                background: transparent;
                border: 1px solid #d9dbf1;
                border-radius: 16px;
            }

            .PhoneInputCountryIcon {
                width: calc(
                    var(--PhoneInputCountryFlag-height) *
                        var(--PhoneInputCountryFlag-aspectRatio)
                );
                height: var(--PhoneInputCountryFlag-height);
            }

            .PhoneInputCountryIcon--square {
                width: var(--PhoneInputCountryFlag-height);
            }

            .PhoneInputCountryIcon--border {
                background-color: var(
                    --PhoneInputCountryFlag-backgroundColor--loading
                );
                box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
                        var(--PhoneInputCountryFlag-borderColor),
                    inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
                        var(--PhoneInputCountryFlag-borderColor);
            }

            .PhoneInputCountryIconImg {
                display: block;

                width: 100%;
                height: 100%;
            }

            .PhoneInputInternationalIconPhone {
                opacity: var(--PhoneInputInternationalIconPhone-opacity);
            }

            .PhoneInputInternationalIconGlobe {
                opacity: var(--PhoneInputInternationalIconGlobe-opacity);
            }

            .PhoneInputCountry {
                position: relative;
                align-self: stretch;
                display: flex;
                align-items: center;
                margin-right: var(--PhoneInputCountrySelect-marginRight);
            }

            .PhoneInputCountrySelect {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1;
                border: 0;
                opacity: 0;
                cursor: pointer;
            }

            .PhoneInputCountrySelect[disabled],
            .PhoneInputCountrySelect[readonly] {
                cursor: default;
            }

            .PhoneInputCountrySelectArrow {
                display: block;
                content: '';
                width: var(--PhoneInputCountrySelectArrow-width);
                height: var(--PhoneInputCountrySelectArrow-width);
                margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
                border-style: solid;
                border-color: var(--PhoneInputCountrySelectArrow-color);
                border-top-width: 0;
                border-bottom-width: var(
                    --PhoneInputCountrySelectArrow-borderWidth
                );
                border-left-width: 0;
                border-right-width: var(
                    --PhoneInputCountrySelectArrow-borderWidth
                );
                transform: var(--PhoneInputCountrySelectArrow-transform);
                opacity: var(--PhoneInputCountrySelectArrow-opacity);
            }

            .PhoneInputCountrySelect:focus
                + .PhoneInputCountryIcon
                + .PhoneInputCountrySelectArrow {
                opacity: 1;
                color: var(--PhoneInputCountrySelectArrow-color--focus);
            }

            .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
                box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
                        var(--PhoneInputCountryFlag-borderColor--focus),
                    inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
                        var(--PhoneInputCountryFlag-borderColor--focus);
            }

            .PhoneInputCountrySelect:focus
                + .PhoneInputCountryIcon
                .PhoneInputInternationalIconGlobe {
                opacity: 1;
                color: var(--PhoneInputCountrySelectArrow-color--focus);
            }
        }

        & .phone-number-input-container {
            position: relative;

            width: 100%;

            & .label {
                position: absolute;
                top: -12px;
                left: 12px;

                padding: 0 6px;

                font-weight: 400;

                color: #4e4b66;

                background: #ffffff;
            }

            & .PhoneInputCountry {
                position: absolute;
                top: 15.75px;
                left: 12px;
            }

            & .error-message {
                padding: 6px 12px;
                margin-top: 12px;

                font-weight: 600;
                color: #ffffff;

                background: #fe968d;
                border-radius: 16px;
            }

            & .hide {
                display: hide;
            }
        }

        & .input-container {
            position: relative;

            width: 100%;

            & .label {
                position: absolute;
                top: -12px;
                left: 12px;

                padding: 0 6px;

                font-weight: 400;

                color: #4e4b66;

                background: #ffffff;
            }

            & .form-input {
                width: 100%;
                height: 100%;

                padding: 12px;

                font-size: 1rem;
                color: #4e4b66;

                background: transparent;
                border: 1px solid #d9dbf1;
                border-radius: 16px;
            }

            & .error-message {
                padding: 6px 12px;
                margin-top: 12px;

                font-weight: 600;
                color: #ffffff;

                background: #fe968d;
                border-radius: 16px;
            }

            & .hide {
                display: hide;
            }

            & .suggestion {
                width: 100%;
                padding: 8px;

                cursor: pointer;

                z-index: 222;
            }
        }

        & .checkbox-container {
            display: flex;
            align-items: center;

            & a {
                margin-left: 12px;

                color: #4e4b66;

                text-decoration: none;
            }
        }

        button {
            padding: 8px;
            background: #60c1c6;
            border: 0;
            border-radius: 14px;
            font-weight: 600;
            color: #ffffff;

            &:hover {
                cursor: pointer;
            }
        }

        & .position {
            & div {
                & label {
                    margin-left: 12px;
                }
            }
        }
    }
`;

export default InviteUserStyled;
