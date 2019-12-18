import * as handleAuthSaga from './handleAuth';

const sagas = {
    ...handleAuthSaga
}

export function registerWithMiddleware(middleware: { run: Function }) {
    for (let name in sagas) {
        middleware.run(sagas[name]);
    }
}