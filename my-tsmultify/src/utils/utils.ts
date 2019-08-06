/**
 * 表单元素序列化成数组
 * @param config 配置信息
 */
var serialize = (config: serializeOptions) : void => {
    config = Object.assign({
        obj: "",
        isDelete: true,
        complete: function(data?: any) { }
    }, config || {});

    let elements = document.querySelectorAll(config.obj);
    var array = [];

    if(elements[0].tagName == "FORM") {
        for(var i = 0; i < elements.length; i++) {
            let form = <HTMLFormElement><Element>elements[i];

            var formData:any = new FormData(form);

            let arrEntries = formData.entries();
            let entry = arrEntries.next();

            while(!entry.done) {
                array.push({name: entry.value[0], value: entry.value[1]});
                entry = arrEntries.next();
            }
        }
    } else {
        for(var i = 0; i < elements.length; i++) {
            if(elements[i].getAttribute("name") != undefined && elements[i].getAttribute("name") !== "") {
                array.push({ name: elements[i].getAttribute("name"), value: elements[i].getAttribute("value") });
            }
        }
    }

    if(config.isDelete) { }

    config.complete && config.complete({ state: true, member: arraySerialize(array) });
};

/**
 * 数组序列化成json
 * @param array 数组对象
 * @returns json
 */
var arraySerialize = (array: Array<any>): any => {
    var o : any = {};

    for(var j = 0; j < array.length; j++) {
        var names = array[j].name.split('.');
        var name = "";
        var tmpObj = o;

        for(var i = 0; i < names.length; i++) {
            var tmpName = names[i];
            var arrayIdx = 0;
            var startIdx:number = tmpName.indexOf('[');
            var endIdx:number = tmpName.indexOf(']');

            if(i == names.length -1 && startIdx == -1 && endIdx == -1) {
                name = tmpName;
            } else {
                var isArray = false;

                if(startIdx != -1 && endIdx != -1) {
                    isArray = true;
                    arrayIdx = parseInt(tmpName.substr(startIdx + 1, endIdx - startIdx - 1));
                    tmpName = tmpName.substr(0, startIdx);
                }


                if(tmpObj[tmpName] === undefined) {
                    if(isArray) {
                        tmpObj[tmpName] = [];
                        if(!isNaN(arrayIdx)) {
                            tmpObj[tmpName][arrayIdx] = {};
                        } else {
                            name = tmpName;
                        }
                    } else {
                        tmpObj[tmpName] = {};
                    }
                }

                if(isArray) {
                    if(!isNaN(arrayIdx)) {
                        if(tmpObj[tmpName][arrayIdx] === undefined) {
                            tmpObj[tmpName][arrayIdx] = {};
                        }
                        tmpObj = tmpObj[tmpName][arrayIdx];
                    } else {
                        name = tmpName;
                    }
                } else {
                    tmpObj = tmpObj[tmpName];
                }
            }
        }

        if (tmpObj[name] !== undefined) {
            if (!tmpObj[name].push) {
                tmpObj[name] = [tmpObj[name]];
            }
            tmpObj[name].push(array[j].value || '');
        } else {
            var value = array[j].value || '';            
            tmpObj[name] = value;
        }
    }

    return o;
}

export default {
    serialize: serialize,
    arraySerialize: arraySerialize
}