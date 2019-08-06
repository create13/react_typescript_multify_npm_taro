import moment from "moment";

var formatDate = (fmt: string): string => {
    return moment().format(fmt);
}

var addYears = (str: string, value: number, fmt: string): string => {
    return moment(str).add('years', value).format(fmt);
}

var addMonths = (str: string, value: number, fmt: string): string => {
    return moment(str).add('months', value).format(fmt);
}

var addDays = (str: string, value: number, fmt: string): string => {
    return moment(str).add('days', value).format(fmt);
}

var formatDateString = (str: string, fmt: string): string => {
    return moment(str).format(fmt);
}

function formatString(str: string, args: any): string {
    if (!str || args == undefined) {
        return str;
    }
 
    if (typeof args === "object") {
        for (var key in args) {
            if (args.hasOwnProperty(key)) {
                str = str.replace(new RegExp("\{" + key + "\}", "g"), args[key]);
            }
        }
    } else {
        var argss = arguments;
        var reg = new RegExp("\{([0-" + (argss.length - 1) + "])\}", "g");
        return str.replace(reg, function(match, index) {
            return argss[index - (-1)];
        });
    }

    return str;
}

var unique = (arr: Array<string | number>): any => {
    arr.sort();
    var res = [arr[0]];
    
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== res[res.length - 1]) {
            res.push(arr[i]);
        }
    }

    return res;
}

var guid = (): string => {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

var unix = (): string => {
    return moment().format('X')
}

export default {
    formatDate: formatDate,
    formatDateString: formatDateString,
    formatString: formatString,
    addMonths: addMonths,
    addDays: addDays,
    addYears: addYears,
    unique: unique,
    guid: guid,
    unix: unix
}