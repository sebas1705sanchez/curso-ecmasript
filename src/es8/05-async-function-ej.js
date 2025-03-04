const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId > 0) {
            setTimeout(() => {
                resolve({
                    id: userId,
                    username: 'Sebastian',
                    email: 'Sebastian@gmail.com'
                });
            }, 2000);
        } else {
            setTimeout(() => {
                reject(new Error('User id not found'));
            },1500);
        }
    });
};

const showUser = async (userId) => {
    try {
        console.log('Obtener datos del Usuario');
        const user = await getUserData(userId);
        console.log("Datos del usuario: ", user);
    } catch (error) {
        console.error("Error al obtener datos: ", error.message);
    }
};

console.log('Inicio del proceso');
showUser(1);
console.log('Proceso en ejecucion');