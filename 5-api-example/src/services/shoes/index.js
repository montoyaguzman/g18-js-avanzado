class ShoesServices {

    constructor() {
        this.shoes = [];
        this.generateData();
    }

    generateData() {
        this.shoes = [
            { id: 1, brand: 'noke', price: 200, size: 29 },
            { id: 2, brand: 'edidas', price: 500, size: 22 },
            { id: 3, brand: 'floxi', price: 900, size: 25 },
            { id: 4, brand: 'pima', price: 1900, size: 24 },
            { id: 5, brand: 'gassi', price: 1100, size: 23 },
        ];
    }

    create(newShoe) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.shoes.push(newShoe);
                // 6.1.6 En caso de exito usar resolve();
                resolve();
            }, 1000);
        });
    }

    findAll(price, size) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                if (price) {
                    console.log(size)
                    const filteredData = this.shoes.filter(shoe => shoe.price >= price);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.shoes);
            }, 1000);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shoe = this.shoes.find(shoe => shoe.id === parseInt(id));
                // if (shoe !== '' && shoe !== 0 && shoe !== null && shoe !== undefined) {
                if (shoe) {
                    resolve(shoe);
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        console.log('service', id)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
                if (indexFounded !== -1) {
                    let shoesCopy = [ ...this.shoes ];
                    const newBody = this.shoes[indexFounded];
                    shoesCopy[indexFounded] = { ...newBody, ...body };
                    this.shoes = [ ...shoesCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
                if (indexFounded !== -1) {
                    let shoesCopy = [ ...this.shoes ];
                    shoesCopy[indexFounded] = { id, ...body };
                    this.shoes = [ ...shoesCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
                if (indexFounded !== -1) {
                    const shoesCopy = [ ...this.shoes ];
                    shoesCopy.splice(indexFounded, 1);
                    this.shoes = [ ...shoesCopy ];
                    resolve();
                }
            }, 1000);
        });
    }
}

module.exports = ShoesServices;
