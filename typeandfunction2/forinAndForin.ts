const arrays:number[] = [3, 4, 5];

for (const key in arrays) {
    console.log('key', key)
}

for (const iterator of arrays) {
    console.log('iterator', iterator)
}