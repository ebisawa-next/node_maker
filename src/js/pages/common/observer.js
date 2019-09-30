export default class {
    constructor() {
        this.observers = {}
    }

    on(name, cb) {
        if (!(name in this.observers)) {
            this.observers[name] = []
        }

        this.observers[name].push(cb)
    }

    emit(name, ...args) {
        if (name in this.observers) {
            this.observers[name].forEach(cb => cb(...args))
        }
    }
}