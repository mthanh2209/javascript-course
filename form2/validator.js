const Validator = (formSelector) => {

    const getParent = (element, selector) => {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    const formRules = {}

    /**
     * Quy ước tạo Rule:
     * - Nếu có lỗi thì return 'errorMessage'
     * - Nếu kh có lỗi thì return 'undefined'
     */
    const validatorRules = {
        required: (value) => {
            return value ? undefined : 'Vui lòng nhập trường này'
        },

        email: (value) => {
            var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            return regex.test(value) ? undefined : 'Trường này phải là email'
        },

        min: (min) => {
            return (value) => {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        }
    }

    //lay ra form element trong DOM theo formSelector
    const formElement = document.querySelector(formSelector)

    //chi xu ly khi co element trong DOM
    if (formElement) {
        const inputs = formElement.querySelectorAll('[name][rules]')

        for (const input of inputs) {

            const rules = input.getAttribute('rules').split('|')
            for (var rule of rules) {
                let ruleInfo
                var isRuleHasValue = rule.includes(':')

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0]

                }
                let ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            //lang nghe su kien de validate
            input.onblur = handleValidate
        }

        var handleValidate = (e) => {
            const rules = formRules[e.target.value]

            let errorMessage
            rules.find((rule) => {
                errorMessage = rule(e.target.value)
                return errorMessage
            })

            //hien thi loi ra UI
            if (errorMessage) {
                const formGroup = getParent(e.target, '.form-group')

                if (formGroup) {
                    const formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerHTML = errorMessage
                    }
                }
            }


        }
    }
}