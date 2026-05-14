function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 500);
    });
}

async function main() {
    let data = await getData();
    console.log(data);
}

console.log("hello")
main();