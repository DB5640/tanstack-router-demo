const AUTH_STORAGE_KEY = "demo-authenticated";

function canUseStorage() {
    return typeof window !== "undefined";
}

export function isAuthenticated() {
    if (!canUseStorage()) {
        return false;
    }

    return window.localStorage.getItem(AUTH_STORAGE_KEY) === "true";
}

export function signIn() {
    if (!canUseStorage()) {
        return;
    }

    window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
}

export function signOut() {
    if (!canUseStorage()) {
        return;
    }

    window.localStorage.removeItem(AUTH_STORAGE_KEY);
}