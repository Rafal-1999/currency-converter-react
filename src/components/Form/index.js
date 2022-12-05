import { useState } from "react";
import Position from "../Position";
import Select from "../Select";
import "./style.css";
import clear from "../../images/icons/clear.png";
import stats from "../../images/icons/stats.png";
import exchange from "../../images/icons/exchange.png";

const Form = ({ title }) => {
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("EUR");

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="currency-exchange__form"
            onSubmit={onFormSubmit}
        >
            <div className="currency-exchange__user-interface">
                <Position place="topLeft">
                    <button type="reset" className="currency-exchange__button">
                        <img
                            src={clear}
                            className="currency-exchange__icon"
                            title="Wyczyść wszystko"
                            alt="Wyczyść"
                        />
                    </button>
                </Position>
                <Position place="top">
                    <p className="currency-exchange__caption">Wymień</p>
                </Position>
                <Position place="topRight">
                    <a href="https://mybank.pl/kursy-walut" className="currency-exchange__link">
                        <img
                            src={stats}
                            className="currency-exchange__icon"
                            title="Aktualne kursy"
                            alt="Kursy walut"
                        />
                    </a>
                </Position>
                <Position place="left1">
                    <Select
                        currencyValue={currencyFrom}
                        onChangeCurrency={({ target }) => setCurrencyFrom(target.value)}
                    />
                </Position>
                <Position place="right1">
                    <input
                        type="number"
                        className="currency-exchange__value"
                        min="0"
                        autoFocus
                    />
                </Position>
                <Position place="left2">
                    <button type="button" className="currency-exchange__button">
                        <img
                            src={exchange}
                            className="currency-exchange__icon"
                            title="Zamień wartości"
                            alt="Zamiana"
                        />
                    </button>
                </Position>
                <Position place="center">
                    <p className="currency-exchange__current-rate"></p>
                </Position>
                <Position place="bottomLeft">
                    <Select
                        currencyValue={currencyTo}
                        onChangeCurrency={({ target }) => setCurrencyTo(target.value)}
                    />
                </Position>
                <Position place="bottomRight">
                    <p className="currency-exchange__value" />
                </Position>
            </div>
            <button className="currency-exchange__submit">
                {title}
            </button>
        </form>
    )
};

export default Form;
