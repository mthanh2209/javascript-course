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

    let selectorRules = {}

    const validate = (inputElement, rule) => {
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

        return !errorMessage //!!: boolean
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
}
//Dinh nghia Rules
//Nguyen tac cua rules:
//1. Khi co loi tra ra message loi
//2. Khi hop le => kh tra ra cai gi ca (undefined)
Validator.isRequired = (selector) => {
    return {
        selector,
        test: (value) => {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = (selector) => {
    return {
        selector,
        test: (value) => {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}

Validator.minLength = (selector, min) => {
    return {
        selector,
        test: (value) => {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue) => {
    return {
        selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : 'Mật khẩu nhập lại không chính xác'
        }
    }
}