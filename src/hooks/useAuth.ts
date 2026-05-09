function useAuth() {
    
    const isLogged = () => {
        const storedValue = localStorage.getItem("authenticated");
        return storedValue === "true";
    }


    const signIn = () => {
        localStorage.setItem("authenticated", "true");
    };
    const signOut = () => {
        localStorage.setItem("authenticated", "false");
    };
    
    return { isLogged, signIn, signOut };
}

export type AuthContext = ReturnType<typeof useAuth>;

export default useAuth;