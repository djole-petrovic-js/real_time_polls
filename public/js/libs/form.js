var Form = (function () {
    function Form(formData) {
        if (!formData || !Types.isObject(formData)) {
            throw new Error('Form data missing or not an object...');
        }
        for (var _i = 0, _a = Object.keys(formData); _i < _a.length; _i++) {
            var key = _a[_i];
            formData[key] = formData[key].trim();
        }
        this.formData = formData;
        this.currentWorkingField = null;
        this.currentWorkingFieldValue = null;
        this.fields = {};
        this.errors = [];
        this.dataToClean = {};
    }
    Form.prototype.field = function (fieldName) {
        this.fields[fieldName] = [];
        this.currentWorkingField = fieldName;
        this.currentWorkingFieldValue = this.formData[fieldName];
        return this;
    };
    Form.prototype.validate = function (criteria, criteriaToMatch, errorMessage) {
        if (Types.isFunction(this[criteria])) {
            this[criteria](criteriaToMatch, errorMessage);
            return this;
        }
        else {
            throw new Error('Method you tried to call doesnt exist...');
        }
    };
    Form.prototype.required = function (errorMessage) {
        if (!this.currentWorkingFieldValue || this.currentWorkingFieldValue === '') {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.minlength = function (criteriaToMatch, errorMessage) {
        if (!(this.currentWorkingFieldValue.length >= criteriaToMatch)) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.maxlength = function (criteriaToMatch, errorMessage) {
        if (!(this.currentWorkingFieldValue.length <= criteriaToMatch)) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.equalsAnotherField = function (fieldToMatch, errorMessage) {
        if (this.currentWorkingFieldValue === '' ||
            this.currentWorkingFieldValue !== this.formData[fieldToMatch]) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.equals = function (criteriaToMatch, errorMessage) {
        if (this.currentWorkingFieldValue !== criteriaToMatch) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.email = function (errorMessage) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(this.currentWorkingFieldValue)) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.regex = function (regexToMatch, errorMessage) {
        if (!regexToMatch.test(this.currentWorkingFieldValue)) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.inList = function (list, errorMessage) {
        if (!list.includes(this.currentWorkingFieldValue)) {
            this.pushErrors(errorMessage);
        }
        else {
            this.dataToClean[this.currentWorkingField] = this.currentWorkingFieldValue;
        }
        return this;
    };
    Form.prototype.pushErrors = function (errorMessage) {
        this.fields[this.currentWorkingField].push(errorMessage);
        this.errors.push(errorMessage);
    };
    Form.prototype.getCleanData = function () {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        for (var _i = 0, _a = Object.entries(this.dataToClean); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            this.dataToClean[key] = this
                .dataToClean[key]
                .replace(/[&<>"']/g, function (m) { return map[m]; });
        }
        return this.dataToClean;
    };
    Form.prototype.getOnlyFirstErrorForEachField = function () {
        var errors = [];
        for (var _i = 0, _a = Object.keys(this.fields); _i < _a.length; _i++) {
            var err = _a[_i];
            if (this.fields[err][0]) {
                errors.push(this.fields[err][0]);
            }
        }
        return errors;
    };
    Form.prototype.getErrorsForEachField = function () {
        return this.fields;
    };
    Form.prototype.isValid = function () {
        return this.errors.length === 0;
    };
    return Form;
}());
