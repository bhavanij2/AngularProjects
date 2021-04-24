export class AuthService {

    isLogin = false

    isAuthenticated() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLogin)
            }, 800)
        })
    }


    login() {
        this.isLogin = true
    }

    logout() {
        this.isLogin = false
    }
}