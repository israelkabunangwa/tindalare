const { useState, useEffect } = React;

const App = () => {
    const [fromCountry, setFromCountry] = useState('USD')
    const [toCountry, setToCountry] = useState('BIF')
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')
    const [formData, setFormData] = useState({})
    const [countries, setCountries] = useState([])
    const [currencyCache, setCurrencyCache] = useState([])

    let exchangeRate;


    const handleFormChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

    }

    useEffect((e) => {
        // apiCall({
        //     baseUrl: "https://live.demo.oche.donexa.org/tindalare",
        //     endPoint: "api/open/countries/",
        //     method: "GET",
        // }).then((data)=>{
        //     console.log("SERVER DATA", data)
        //     setCountries(data)
        // })
        
        fetch("https://tindalare.com/api/open/countries/").then((res) => res.json()).then((data) => {
            console.log("SERVER DATA", data)
            setCountries(data)
        })
        /*fetch(`https://live.demo.oche.donexa.org/tindalare/api/open/country-x-currencies/?country=${value}`).then((res) => res.json()).then((data) => {
                                                    console.log("SERVER DATA FOR", value, data)
                                                    setCurrencyCache({ ...currencyCache, [value]: data })
                                                })*/
    
    }, [])

    const convertCurrency = async () => {
        if (selectedFromCountryData && selectedToCountryData) {

            const rateFrom = selectedFromCountryData.rate;
            const rateTo = selectedToCountryData.rate;
            const currencyCodeFrom = selectedFromCountryData.currencyCode
            const currencyCodeTo = selectedToCountryData.currencyCode
            const convertedAmount = (amount * rateFrom) / rateTo

            alert(amount, currencyCodeFrom + 'is equal to :' + convertedAmount, currencyCodeTo)
        }
    }
    /*const handleConvert = () => {
        document.querySelector('.convertedAm').style.display = 'block'
        document.querySelector('.activeAmount').style.display = 'none'

        if (fromCountry === 'USD' && toCountry === 'BIF') { exchangeRate = 2859.79 }
        else if (fromCountry === 'USD' && toCountry === 'FC') { exchangeRate = 2770.00 }
        else if (fromCountry === 'EURO' && toCountry === 'BIF') { exchangeRate = 3110.95 }
        else if (fromCountry === 'EURO' && toCountry === 'FC') { exchangeRate = 3013.19 }

        else if (fromCountry === 'BIF' && toCountry === 'USD') { exchangeRate = 0.00035 }
        else if (fromCountry === 'BIF' && toCountry === 'EUR') { exchangeRate = 0.00032 }
        else if (fromCountry === 'FC' && toCountry === 'USD') { exchangeRate = 0.00036 }
        else if (fromCountry === 'FC' && toCountry === 'EUR') { exchangeRate = 0.00033 }

        const convertedAmount = amount * exchangeRate
        setConvertedAmount(convertedAmount)



    }*/




    /*const fromCountryChange = (e) => {
        setFromCountry(e.target.value)
        document.querySelector('.convertedAm').style.display = 'none'
        document.querySelector('.activeAmount').style.display = 'block'


    }
    const toCountryChange = (e) => {
        setToCountry(e.target.value)
        document.querySelector('.convertedAm').style.display = 'none'
        document.querySelector('.activeAmount').style.display = 'block'
    }
    const amountChange = (e) => {
        setAmount(e.target.value)
    }*/
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const phoneChange = (e) => {
        setPhone(e.target.value)
    }
    /*const convertedAmountChange=(e)=>{
        setConvertedAmount(e.target.value) 
    }*/
    const descriptionChange = (e) => {
        setDescription(e.target.value)
    }
    var counter = 0;
    const nextButton = () => {
        let operationContainerItems = document.querySelector('.operationContainerItems')
        let dotsContainer = document.querySelector('.dotsContainer')
        if (counter < 2) {

            counter++
            document.querySelector('.prev').style.display = 'block'
            document.querySelector('.operationContainer .operationContainerItems .item.active').classList.remove('active')
            document.querySelector('.allDots  .dotsContainer .dot.active').classList.remove('active')
            operationContainerItems.children[counter].classList.add('active')
            dotsContainer.children[counter].classList.add('active')
            if (counter == 2) {
                document.querySelector('.next').style.display = 'none'
            }
        }
        document.querySelector('.nameValue').innerHTML = name
        document.querySelector('.emailValue').innerHTML = email
        document.querySelector('.amountSendValue').innerHTML = amount + fromCountry
        document.querySelector('.amountReceiveValue').innerHTML = convertedAmount + toCountry
        document.querySelector('.phoneValue').innerHTML = phone
        document.querySelector('.descriptionValue').innerHTML = description
    }
    const prevButton = () => {
        let operationContainerItems = document.querySelector('.operationContainerItems')
        let dotsContainer = document.querySelector('.dotsContainer')

        if (counter > 0) {
            counter--
            document.querySelector('.operationContainer .operationContainerItems .item.active').classList.remove('active')
            document.querySelector('.allDots  .dotsContainer .dot.active').classList.remove('active')
            operationContainerItems.children[counter].classList.add('active')
            dotsContainer.children[counter].classList.add('active')
            if (counter == 0) {
                document.querySelector('.prev').style.display = 'none'
                document.querySelector('.next').style.display = 'block'
            }
            else if (counter == 1) {
                document.querySelector('.next').style.display = 'block'
            }
        }
    }
    const toggleCurrency = () => {
        setFromCountry(toCountry)
        setToCountry(fromCountry)
        setAmount(convertedAmount)
        setConvertedAmount(amount)

    }

    return (
        <div className="form" >
            <div className="operationContainer">
                <div className="operationContainerItems">
                    <div className="item active convert">
                        <div className="convertDescription">
                            <h1>Sécurité, Rapidité et Coût Avantageux - Vos Informations Confidentielles Garanties!</h1>
                            <p>Découvrez la facilité et la rapidité d'envoyer de l'argent en toute sécurité et à moindre coût, avec l'assurance de la confidentialité totale de vos informations personnelles et financières. Notre système de confiance garantit une tranquillité d'esprit à chaque transfert.</p>
                        </div>
                        <form className="convertForm" onChange={handleFormChange}>
                            <div className="select">
                                <div className="countrySelect">
                                    <div className="from">
                                        <label>From</label>
                                        <select name='from' onChange={(e) => {
                                            const { value } = e.target;
                                            if (value.length && currencyCache[value] === undefined) {
                                                fetch(`https://tindalare.com/api/open/country-x-currencies/?country=${value}`).then((res) => res.json()).then((data) => {
                                                    
                                                    alert(currencyCache[value])
                                                    setCurrencyCache({ ...currencyCache, [value]: data })
                                                })
                                            }
                                        }}>
                                            <option value="">I live in</option>
                                            {countries.filter((item) => item.id != formData.to).map((oneCountry) => {
                                                return <option value={oneCountry.id}>{oneCountry.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="exchange">
                                        <span onClick={toggleCurrency}><i className="fa fa-exchange" aria-hidden="true"></i></span>
                                    </div>

                                    <div className="to">
                                        <label>To</label>
                                        <select name='to' value={toCountry} onChange={handleFormChange}>
                                            <option value="">I send to</option>
                                            {countries.filter((item) => item.id != formData.from).map((oneCountry) => {
                                                return <option value={oneCountry.id}>{oneCountry.name}</option>
                                            })}

                                        </select>
                                    </div>


                                </div>
                            </div>
                            <div className="calculator">
                                <div className="amount">
                                    <label>entrer montant en :
                                    
                                    </label>
                                    <input name='amount' type="number" onChange={handleFormChange} placeholder="entrer montant" />
                                </div>
                                <div className="converterBtn">
                                    <button onClick={convertCurrency}>CONVERTIR</button>
                                </div>
                            </div>
                            <div>
                                <div className="activeAmount"><span className="countryRate">00.0</span>{fromCountry} <span classeName="egale">=</span> <span className="countryRate">00.0</span>{toCountry}</div>
                                <div className="convertedAm"><span className="convertAmount">{amount}</span><span className="convertedAmountRate">{fromCountry}</span> <span classeName="egale">=</span> <span class="convertAmount" onChange={setConvertedAmount}>{convertedAmount}</span><span className="convertedAmountRate">{toCountry}</span></div>
                            </div>
                        </form>
                    </div>

                    <div className="item isra">
                        <h1>Saisissez les coordornnées du bénéficiaire</h1>
                        <div className="receiverInfo">
                            <div className="receiverInfoImg"><img src="IMG/portrait-young-cheerful-black-lady-600nw-2068036658.webp" /></div>
                            <div className="receiverInfoForm">
                                <form>
                                    <input type="text" placeholder="nom du recepteur" onChange={nameChange} />
                                    <input type="email" placeholder="email du recepteur" onChange={emailChange} />
                                    <input type="number" placeholder="numero du recepteur" onChange={phoneChange} />
                                    <textarea placeholder="Description" type="text" onChange={descriptionChange}></textarea>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="item">
                        <h1>Confirmation de l'envoi</h1>
                        <div className="display">

                            <div><span className="displayKey">Name :</span><span className="nameValue displayKeyValue"></span></div>
                            <div><span className="displayKey">Email :</span><span className="emailValue displayKeyValue"></span></div>
                            <div><span className="displayKey">Amount Sent :</span><span className="amountSendValue displayKeyValue"></span></div>
                            <div><span className="displayKey">Amount Received :</span><span className="amountReceiveValue displayKeyValue"></span></div>
                            <div> <span className="displayKey">Phone Nummber :</span><span className="phoneValue displayKeyValue"></span></div>
                            <div> <span className="displayKey">Description :</span><span className="descriptionValue displayKeyValue"></span></div>
                            <div className="confirmation"><button>Confirmer l'envoi</button></div>
                        </div>
                    </div>
                </div>
                <div class="prevNextButton">
                    {/* <span><button onClick={prevButton} className="prev">prev</button></span> */}
                    <span><button onClick={(e)=>{
                        e.preventDefault()
                        console.log(currencyCache)
                    }} className="">prev</button></span>
                    <span><button onClick={nextButton} className="next">next</button></span>
                </div>
                <div className="allDots">
                    <div className="dotsContainer">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector('.operation'))
ReactDOM.render(null, document.querySelector('.skeleton'));
document.querySelector('.operation').classList.remove('hidden')
document.querySelector('.skeleton').classList.add('hidden')


/*===========================CONNEXION====================================*/

async function apiCall({
    body = null,
    method = "POST",
    baseUrl = '',
    endPoint = "",
    headers = {},
    exposeHeaders = false,
}) {
    return await fetch(
        `${baseUrl}/${endPoint}`, {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            ...headers
        },
    }).then(async (_) => {
        if (_.status === 204) {
            return {};
        }

        if (_.ok) {
            const res = await _.json();
            return exposeHeaders ? {
                headers: _.headers,
                ...res,
            } : res;
        } else {
            let err = '';
            try {
                err = await _.json();
            } catch (e) {
                err = `${_.status} ${_.statusText}`
            }
            return { error: handleErrorMessage(err) }
        }

    }).catch((error) => {
        return { "error": error }
    });
}


function handleErrorMessage(err) {
    if (typeof err === 'object' && err.detail) {
        return err.detail;
    } else if (typeof err === 'string' && err.includes('<html>')) {
        return 'Internal server error';
    } else if (typeof err === 'object') {
        return Object.values(err).join(', ');
    } else {
        return err
    }
}



