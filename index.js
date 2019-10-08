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

const is_prime = (value) => {
    for(let i = 2; i < value; i++)
        if(value % i == 0) return false;
    return value > 1;
}

module.exports = {
    reverse_string,
    is_palindrome,
    remove_item_array,
    is_prime
};