function sum(...rest) {
    let result = 0;

    console.log(rest)
    for (let i = 0; i < rest.length; i++) {
        result = result + rest[i];
    }

    return result;
}

sum(1, 2, 3, 4, 5, 6);