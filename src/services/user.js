import { Auth } from "aws-amplify";

export async function getCurrentUserJwtPayload() {

    try {
        const { signInUserSession } = await Auth.currentAuthenticatedUser();

        return signInUserSession;
    } catch (err) {
        return err;
    }
}

export async function getCurrentUserRole() {

    try {
        const { idToken } = await getCurrentUserJwtPayload();
        if (idToken.payload.hasOwnProperty("cognito:groups")){
            const role = idToken.payload["cognito:groups"][0];
            return role;
        }

        return "Role not assigned."
    } catch (err) {
        console.log(err);
        return err;
    }
}

