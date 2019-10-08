const reverse_string = (value) => {
    return value.split("").reverse().join("");
}

const is_palindrome = (value) => {
    const clean = value.replace(/[^A-Z]/ig, "").toLowerCase();
    return clean == reverse_string(clean);
}

const remove_item_array = (index, value) => {
    if (typeof (index) == 'number' && Array.isArray(value)) {
        return value.filter((s, sidx) => index !== sidx)
    } else {
        return null
    }
}

const isEmpty = function (value) {
    return (!value || value == "0" || 0 === value.length || Object.entries(value).length === 0 && value.constructor === Object);
 }

module.exports = {
    reverse_string,
    is_palindrome,
    remove_item_array,
    isEmpty
};