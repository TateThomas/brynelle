
const bufferHours = 12;
var keyPressed;


function setTextboxValidityListeners(elem) {

    elem.addEventListener('focusout', function () {

        if (elem.value == '') {
            elem.className = elem.className.replace(" valid", " invalid");
        }
        else {
            elem.className = elem.className.replace("invalid", "valid");
        }

    });

    elem.onkeydown = function (e) {

        keyPressed = e.key;

    };

    elem.onkeyup = function () {

        if ((elem.value == '') && (keyPressed != 'Backspace')) {
            elem.className = elem.className.replace(" valid", " invalid");
        }
        else if (keyPressed != 'Backspace') {
            elem.className = elem.className.replace("invalid", "valid");
        }

    };

}


function setNameListeners() {

    const nameElemList = document.querySelector(".multiple-answer").querySelectorAll(".short-answer");

    for (let i = 0; i < nameElemList.length; i++) {

        let currentElem = nameElemList[i].getElementsByTagName("input")[0];
        setTextboxValidityListeners(currentElem);

    }

}


function validateEmail(email) {

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}


function setEmailListeners() {

    const emailElem = document.querySelector(".short-answer input[type='email']");

    emailElem.addEventListener('focusout', function () {

        if (emailElem.value == '') {
            emailElem.className = emailElem.className.replace(" valid", " invalid");
            emailElem.parentElement.style.setProperty("--error-message", "'Required'");
        }
        else if (!validateEmail(emailElem.value)) {
            emailElem.className = emailElem.className.replace(" valid", " invalid");
            emailElem.parentElement.style.setProperty("--error-message", "'Invalid email address'");
        }
        else {
            emailElem.className = emailElem.className.replace("invalid", "valid");
        }

    });

    emailElem.onkeydown = function (e) {

        keyPressed = e.key;

    };

    emailElem.onkeyup = function () {

        if ((emailElem.value == '') && (keyPressed != 'Backspace')) {
            emailElem.className = emailElem.className.replace(" valid", " invalid");
        }
        else if (keyPressed != 'Backspace') {
            emailElem.className = emailElem.className.replace("invalid", "valid");
        }
        else if ((emailElem.value != '') && (keyPressed == 'Backspace')) {
            emailElem.className = emailElem.className.replace("invalid", "valid");
        }

    };

}


function validatePhoneNumber(phoneNumber) {

    let re = /^(\+[0-9])?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phoneNumber);

}


function formatPhoneNumber(phoneNumber, currentKey) {

    if ((parseInt(currentKey) >= 0) && (parseInt(currentKey) <= 9)) {

        phoneNumber.maxLength = "17";

        phoneNumber.value = phoneNumber.value.replace(/^([+]\d{1})*[(-\s\.]*(\d{0,3})[)-\s\.]*(\d{0,3})[-\s\.]*(\d{0,4})\d*$/, (g1, g2, g3, g4, g5) => {

            let intNum, areaCode, prefix, localNum;

            if (g2 == undefined) {
                intNum = "";
            }
            else {
                intNum = `${g2} `;
            }

            if (g3 == undefined) {
                areaCode = "";
            }
            else if (g3.length == 3) {
                areaCode = `(${g3}) `;
            }
            else {
                areaCode = g3;
            }

            if (g4 == undefined) {
                prefix = "";
            }
            else if (g4.length == 3) {
                prefix = `${g4}-`;
            }
            else {
                prefix = `${g4}`;
            }

            if (g5 == undefined) {
                localNum = "";
            }
            else {
                localNum = g5;
            }

            return intNum + areaCode + prefix + localNum;

        });

    }
    else if (currentKey == 'Backspace') {

        phoneNumber.value = phoneNumber.value.replace(/^([+]\d{1})*[(-\s\.]*(\d{1,3})[)-\s\.]*(\d{0,3})[-\s\.]*(\d{0,4})$/, (g1, g2, g3, g4, g5) => {

            let intNum, areaCode, prefix, localNum;

            if (g2 == undefined) {
                intNum = "";
            }
            else if (g3 == undefined) {
                intNum = `${g2}`;
            }
            else {
                intNum = `${g2} `;
            }

            if (g3 == undefined) {
                areaCode = "";
            }
            else if ((g3.length == 3) && !((g4 == undefined) || (g4 == ''))) {
                areaCode = `(${g3}) `;
            }
            else {
                areaCode = g3;
            }

            if (g4 == undefined) {
                prefix = "";
            }
            else if ((g4.length == 3) && ((g5 == undefined) || (g5 == ''))) {
                prefix = `${g4}`;
            }
            else if (g4.length == 3) {
                prefix = `${g4}-`;
            }
            else {
                prefix = g4;
            }

            if (g5 == undefined) {
                localNum = "";
            }
            else {
                localNum = g5;
            }

            return intNum + areaCode + prefix + localNum;

        });

    }
    else {

        phoneNumber.value = phoneNumber.value.replace(/^([0-9()+-\s\.]*)*[^0-9()+-\s\.]*([0-9()+-\s\.]*)*$/, (g1, g2, g3) => {

            let first, second;

            if (g2 == undefined) {
                first = "";
            }
            else {
                first = g2;
            }

            if (g3 == undefined) {
                second = "";
            }
            else {
                second = g3;
            }

            return first + second;

        });

    }

}


function setPhoneNumberListeners() {

    const phoneElem = document.querySelector(".short-answer input[placeholder='Your phone number']");

    phoneElem.maxLength = "14";

    phoneElem.addEventListener('focusout', function () {

        formatPhoneNumber(phoneElem, "0");

        if (phoneElem.value == '') {

            phoneElem.className = "valid";
            phoneElem.style.color = "gray";

        }
        else if (validatePhoneNumber(phoneElem.value)) {

            phoneElem.className = "valid";
            phoneElem.style.color = "var(--light-black)";

        }
        else {

            phoneElem.className = "invalid";
            phoneElem.style.color = "var(--light-black)";

        }

    });

    phoneElem.onkeydown = function (e) {

        keyPressed = e.key;

    };

    phoneElem.onkeyup = function () {

        formatPhoneNumber(phoneElem, keyPressed);

        if ((phoneElem.value == '') && (keyPressed != 'Backspace')) {
            phoneElem.className = "invalid";
        }
        else if (phoneElem.value == '') {
            phoneElem.className = "valid";
        }

    };

}


function setInputSelectListeners() {


    const inputList = document.querySelectorAll(".short-answer");

    for (let i = 0; i < inputList.length; i++) {

        const currentElem = inputList[i].getElementsByTagName("input")[0];

        currentElem.addEventListener('focus', function (e) {
            currentElem.parentElement.className = "short-answer selected";
        });

        currentElem.addEventListener('focusout', function (e) {
            currentElem.parentElement.className = "short-answer not-selected";
        });

    }

}


function setSelectOtherListener() {

    const selectElem = document.querySelector(".dropdown").getElementsByTagName("select")[0];
    const textElem = document.querySelector(".short-answer > input.hidden");

    selectElem.onchange = function () {

        if (selectElem.value == "Other") {
            selectElem.style.color = "var(--light-black)";
            textElem.className = textElem.className.replace("hidden", "show");
            textElem.className = textElem.className.replace("invalid", "valid");
            textElem.required = true;
            selectElem.className = "valid";
        }
        else if (selectElem.value != "") {
            selectElem.style.color = "var(--light-black)";
            textElem.className = textElem.className.replace("show", "hidden");
            textElem.className = textElem.className.replace("invalid", "valid");
            textElem.value = '';
            textElem.required = false;
            selectElem.className = "valid";
        }
        else {
            selectElem.style.color = "gray";
            textElem.value = '';
            textElem.required = false;
            selectElem.className = "invalid";
        }

    };

    setTextboxValidityListeners(textElem);

}


function setTimeBuffer(dateObj, timeBuffer) {

    dateObj.setTime(dateObj.getTime() + (timeBuffer * 60 * 60 * 1000));

}


function setDateSpecificListener() {

    const singleChoice = document.querySelector(".single-choice");
    const labelList = singleChoice.getElementsByTagName("label");
    let inputElem, dateArray;
    let dateElem = document.querySelector(".choose-date");
    let dateInput = dateElem.getElementsByTagName("input")[0];
    let timeElem = document.querySelector(".choose-time");
    let timeInput = timeElem.getElementsByTagName("input")[0];

    let currentDate = new Date();
    setTimeBuffer(currentDate, bufferHours);
    dateArray = currentDate.toLocaleDateString().split("/");
    dateInput.min = `${dateArray[2]}-${dateArray[0].padStart(2, "0")}-${dateArray[1].padStart(2, "0")}`;

    for (let i = 0; i < labelList.length; i++) {

        let currentElem = labelList[i];

        currentElem.addEventListener('click', function (e) {

            currentElem.parentElement.className = currentElem.parentElement.className.replace("invalid", "valid");

            inputElem = currentElem.getElementsByTagName("input")[0];
            inputElem.checked = true;

            if ((inputElem.value == "I have a specific date in mind") && (dateElem.classList[1] == "hidden")) {

                dateElem.className = "choose-date show not-selected";

                if (dateElem.getElementsByTagName("input")[0].value != '') {
                    timeElem.className = "choose-time show not-selected";
                }

            }
            else if (inputElem.value != "I have a specific date in mind") {

                dateElem.className = "choose-date hidden not-selected";
                timeElem.className = "choose-time hidden not-selected";

                dateInput.value = '';
                dateInput.style.color = "gray";
                dateInput.required = false;

                timeInput.value = '';
                timeInput.style.color = "gray";

            }

        });

    }

    dateInput.addEventListener('change', function (e) {

        let myDate = new Date();

        setTimeBuffer(myDate, bufferHours);
        dateArray = myDate.toLocaleDateString().split("/");
        dateInput.min = `${dateArray[2]}-${dateArray[0].padStart(2, "0")}-${dateArray[1].padStart(2, "0")}`;

        if (dateInput.value == dateInput.min) {

            dateInput.required = true;

            if (myDate.getDate() == parseInt(dateInput.value.substr(8, 2))) {
                timeInput.min = myDate.toTimeString().substr(0, 5);
            }
            else {
                timeInput.min = "";
            }

            dateInput.style.color = "var(--light-black)";
            timeInput.style.color = "var(--light-black)";

            timeElem.className = "choose-time show not-selected";

        }
        else if (dateInput.value != '') {

            dateInput.required = true;

            timeInput.min = "";

            dateInput.style.color = "var(--light-black)";
            if (timeInput.value != '') {
                timeInput.style.color = "var(--light-black)";
            }
            else {
                timeInput.style.color = "gray";
            }

            timeElem.className = "choose-time show not-selected";

        }
        else {

            dateInput.required = false;

            timeInput.min = "";
            timeInput.value = "";

            dateInput.style.color = "gray";
            timeInput.style.color = "gray";

            timeElem.className = "choose-time hidden not-selected";

        }

    });

    timeInput.addEventListener('change', function (e) {

        if (timeInput.value != '') {

            let myDate = new Date();
            setTimeBuffer(myDate, bufferHours);

            dateArray = myDate.toLocaleDateString().split("/");
            dateInput.min = `${dateArray[2]}-${dateArray[0].padStart(2, "0")}-${dateArray[1].padStart(2, "0")}`;

            if (myDate.getDate() == parseInt(dateInput.value.substr(8, 2))) {
                timeInput.min = myDate.toTimeString().substr(0, 5);
            }
            else {
                timeInput.min = "";
            }

            timeInput.style.color = "var(--light-black)";

        }
        else {

            timeInput.min = "";
            timeInput.style.color = "gray";

        }

    });

    dateElem.addEventListener('focusin', function (e) {
        dateElem.className = dateElem.className.replace("not-selected", "selected");
    });

    dateElem.addEventListener('focusout', function (e) {
        dateElem.className = dateElem.className.replace(" selected", " not-selected");
        dateInput.required = true;
    });

    timeElem.addEventListener('focusin', function (e) {
        timeElem.className = timeElem.className.replace("not-selected", "selected");
    });

    timeElem.addEventListener('focusout', function (e) {
        timeElem.className = timeElem.className.replace("selected", "not-selected");
    });

}


function setTextAreaGrowListener() {

    const longAnswer = document.querySelector(".long-answer");
    const textArea = document.getElementsByTagName("textarea")[0];

    textArea.addEventListener('input', function () {

        textArea.style.height = "30px";
        textArea.style.height = (textArea.scrollHeight - 10) + "px";

    });

    longAnswer.addEventListener('focusin', function (e) {
        longAnswer.className = "long-answer selected";
    });

    longAnswer.addEventListener('focusout', function (e) {
        longAnswer.className = "long-answer not-selected";
    });

    textArea.onchange = function () {

        if (textArea.value != '') {
            textArea.style.color = "var(--light-black)";
        }
        else {
            textArea.style.color = "gray";
        }

    }

}


function checkTextboxValidity(textInput) {

    return (textInput.className.includes("hidden") ||
        (textInput.className.includes("valid") && ((textInput.value != '') ||
            (textInput.placeholder == "Your phone number") ||
            (textInput.placeholder == "Your location")
        )
        )
    );

}


function checkFormValidity() {

    let validForm = true;
    const nameElemList = document.querySelectorAll("div.short-answer");

    for (let i = 0; i < nameElemList.length; i++) {
        if (!checkTextboxValidity(nameElemList[i].getElementsByTagName("input")[0])) {
            nameElemList[i].getElementsByTagName("input")[0].className = nameElemList[i].getElementsByTagName("input")[0].className.replace(" valid", " invalid");
            if (validForm) {
                validForm = false;
                nameElemList[i].parentElement.scrollIntoView();
            }
        }
    }

    const dropdownElem = document.getElementsByTagName("select")[0];

    if (dropdownElem.value == '') {
        dropdownElem.className = "invalid";
        if (validForm) {
            console.log(dropdownElem);
            validForm = false;
            dropdownElem.parentElement.parentElement.scrollIntoView();
        }
    }
    else {
        dropdownElem.className = "valid";
    }

    const singleChoiceElem = document.querySelectorAll(".single-choice label");

    if (!singleChoiceElem[0].getElementsByTagName("input")[0].checked && !singleChoiceElem[1].getElementsByTagName("input")[0].checked) {
        singleChoiceElem[0].parentElement.className = singleChoiceElem[0].parentElement.className.replace(" valid", " invalid");
        if (validForm) {
            validForm = false;
            singleChoiceElem[0].parentElement.parentElement.scrollIntoView();
        }
    }

    const chooseDateElem = document.querySelector(".choose-date.show input");

    if ((chooseDateElem != null) && !chooseDateElem.required) {
        chooseDateElem.required = true;
        if (validForm && (chooseDateElem.value == '')) {
            validForm = false;
            chooseDateElem.parentElement.parentElement.scrollIntoView();
        }
    }

    return validForm;

}


function setSubmitValidation() {

    const submitButton = document.querySelector(".submit-button button");
    const formElem = document.querySelector("form");

    formElem.addEventListener('submit', function (e) {

        if (!checkFormValidity()) {
            e.preventDefault();
        }
        else {
            document.getElementById("form").className = "complete";
            window.scrollTo(0, 0);
        }

    });
    submitButton.addEventListener('click', function (e) {

        checkFormValidity();

    });

}


let archWidth = document.querySelector(".title span").clientWidth;
const circleType = new CircleType(document.querySelector(".curved"));
circleType.radius(archWidth / 2).dir(-1);


window.onload = function () {

    setNameListeners();
    setEmailListeners();
    setPhoneNumberListeners();
    setInputSelectListeners();
    setSelectOtherListener();
    setDateSpecificListener();
    setTextAreaGrowListener();
    setSubmitValidation();

};
