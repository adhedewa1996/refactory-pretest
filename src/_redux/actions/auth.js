import AsyncStorage from '@react-native-community/async-storage';
export const ACCESS_TOKEN = 'access_token';

export const onSignIn = (data) => AsyncStorage.setItem(ACCESS_TOKEN, data);
export const onSignOut = () => AsyncStorage.removeItem(ACCESS_TOKEN);
export const onToken = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(ACCESS_TOKEN)
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    })
}
export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(ACCESS_TOKEN)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};