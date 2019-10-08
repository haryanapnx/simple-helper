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

const convertRupiah = angka => {
    let value = angka.toString().split(".")[0];
    let rupiah = "";
    let angkarev = value
        .toString()
        .split("")
        .reverse()
        .join("");
    for (let i = 0; i < angkarev.length; i++)
        if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
        "Rp " +
        rupiah
            .split("", rupiah.length - 1)
            .reverse()
            .join("")
    );
};

const titleCase = str => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
};

module.exports = {
    reverse_string,
    is_palindrome,
    remove_item_array,
    isEmpty,
    convertRupiah, 
    titleCase
};