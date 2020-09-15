const getAuthUser = () => {
    // const localAuthState = localStorage.getItem('authState')
    // return localAuthState ? JSON.parse(localAuthState === 'undefined' ? '{}' : localAuthState) : null
    return {
        type: 'admin'
    }
}

export default {
    getAuthUser
}