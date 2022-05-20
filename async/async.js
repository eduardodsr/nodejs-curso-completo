function sum(x) {
    return new Promise( (resolve, reject) => {

        if (Number(x) == NaN || Number(x) == undefined || typeof x != 'number') {
            reject(`O valor de x: ${x} , não é do tipo Number!`);
        }
        setTimeout( ()=> {
            resolve(x + 5000);

        }, 3000);
    }) 
}

async function main() {

    try {
        const result = await sum('230'); 
        console.log(`Resultado com Aync/Await: ${result} `)
    } catch (error) {
        console.log(`Temos problemas: ${error}`);

        console.log(`Usuário do sistema: ${process.env.HOME}`); // user
    }
}

main();