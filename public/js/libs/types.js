var Types = (function () {
    function Types() {
    }
    Types.isNumber = function (object) {
        return Types.getType(object) === Types.allTypes.number;
    };
    Types.isString = function (object) {
        return Types.getType(object) === Types.allTypes.string;
    };
    Types.isBoolean = function (object) {
        return object === true ||
            object === false ||
            Types.getType(object) === Types.allTypes.boolean;
    };
    Types.isFunction = function (object) {
        return Types.getType(object) === Types.allTypes["function"];
    };
    Types.isObject = function (object) {
        return Types.getType(object) === Types.allTypes.object;
    };
    Types.isArray = function (object) {
        return Types.getType(Array.isArray) === Types.allTypes["function"]
            ? Array.isArray(object)
            : Types.getType(object) === Types.allTypes.array;
    };
    Types.isGenerator = function (object) {
        var type = Types.getType(object);
        return type === Types.allTypes.generator ||
            type === Types.allTypes.generatorFunction;
    };
    Types.isPromise = function (object) {
        return Types.getType(object) === Types.allTypes.promise &&
            Types.getType(object.then) === Types.allTypes["function"];
    };
    Types.isPromiseArray = function (object) {
        return Types.isArray(object) && object.every(function (x) { return Types.isPromise(x); });
    };
    Types.isStringArray = function (object) {
        return Types.isArray(object) && object.every(function (x) { return Types.isString(x); });
    };
    Types.isObjectEmpty = function (object) {
        return Object.keys(object).length === 0;
    };
    Types.getType = function (o) {
        return Object.prototype.toString.call(o);
    };
    Object.defineProperty(Types, "allTypes", {
        get: function () {
            return {
                number: '[object Number]',
                string: '[object String]',
                "function": '[object Function]',
                object: '[object Object]',
                boolean: '[object Boolean]',
                promise: '[object Promise]',
                array: '[object Array]',
                generator: '[object Generator]',
                generatorFunction: '[object GeneratorFunction]'
            };
        },
        enumerable: true,
        configurable: true
    });
    return Types;
}());
