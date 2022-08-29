import classNames from "classnames";
import './NextButton.css'

export default function NextButton({ goNext, enabled }) {
    return (
        <button className={classNames("SignupForm-nextButton", { disabled: !enabled })} onClick={goNext} >
            <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.7678 20.7678C34.7441 19.7915 34.7441 18.2085 33.7678 17.2322L17.8579 1.32233C16.8816 0.346018 15.2986 0.346018 14.3223 1.32233C13.346 2.29864 13.346 3.88155 14.3223 4.85786L28.4645 19L14.3223 33.1421C13.346 34.1184 13.346 35.7014 14.3223 36.6777C15.2986 37.654 16.8816 37.654 17.8579 36.6777L33.7678 20.7678ZM2.18557e-07 21.5L32 21.5L32 16.5L-2.18557e-07 16.5L2.18557e-07 21.5Z" fill="white"/>
            </svg>
        </button>
    )
}