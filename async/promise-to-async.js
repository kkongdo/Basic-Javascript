class UserStorage {
    async loginUser(id, password) {
        // 비동기 작업을 setTimeout과 함께 처리합니다.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    async getRoles(user) {
        // 비동기 작업을 setTimeout과 함께 처리합니다.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();

async function authenticate() {
    try {
        const id = prompt('Enter your id');
        const password = prompt('Enter your password');
        const user = await userStorage.loginUser(id, password);
        const role = await userStorage.getRoles(user);
        alert(`Hello, ${role.name}, you have a ${role.role} role`);
    } catch (error) {
        console.log(error);
    }
}

authenticate();
