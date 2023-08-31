//Doi tuong Validator
const Validator = (options) => {
    let getParent = (element, selector) => {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    var validate = (inputElement, rule) => {
        let errorMessage
        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

        //lay ra cac rule cua selector
        const rules = selectorRules[rule.selector]

        //lap qua tung rule & kiem tra
        //neu co loi dung viec kiem tra
        for (let i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerHTML = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        }
        else {
            errorElement.innerHTML = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
    }

    //lay element cua form can validate
    const formElement = document.querySelector(options.form)

    if (formElement) {
        //khi submit form
        formElement.onsubmit = (e) => {
            e.preventDefault()

            let isFormValid = true

            //thuc hien lap qua tung rule va validate
            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector)
                const isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                if (typeof options.onsubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name]')

                    const formValues = Array.from(enableInputs).reduce((values, input) => {
                        //gan input value cho object value va return ra value
                        values[input.name] = input.value
                        return values
                    }, {})
                    options.onsubmit(formValues)
                }
            }
        }

        //xu ly lap qua moi rule va xu ly (lang nghe, blur, input)
        options.rules.forEach((rule) => {

            //luu lai cac rule cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }


            const inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                //xu ly blur khoi input
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }

                //xu ly moi khi ng dung nhap vào input het mau do
                inputElement.oninput = () => {
                    const errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerHTML = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            }
        });
    }
    options.onsubmit = (data) => {
        const dataOutput = document.getElementById('display-data')
        dataOutput.innerHTML = `
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Password:</strong> ${data.password}</p>
        <p><strong>Confirm password:</strong> ${data.password_confirm}</p>`
    }
}

Validator.isUsername = (selector) => {
    return {
        selector,
        test: (value) => {
            return value.trim() ? undefined : 'Please enter the correct format for Username. (No leading or trailing spaces)'
        }
    }
}

Validator.isEmail = (selector) => {
    return {
        selector,
        test: (value) => {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            return regex.test(value) ? undefined : 'Email address empty or wrong format. <br>example: username@somewhere.sth'
        }
    }
}

Validator.minLength = (selector, min) => {
    return {
        selector,
        test: (value) => {
            return value.length >= min ? undefined : `Please enter the correct format for password. <br>(${min} characters, at least one non-letter)`
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue) => {
    return {
        selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : 'Make sure password and confirm passwords match'
        }
    }
}


