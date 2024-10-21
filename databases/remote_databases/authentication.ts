import { User } from "@/entities/user";
import { db } from "@/firebase-config";

import { doc, setDoc } from "firebase/firestore";


async function createUser(user: User): Promise<User> {
  await setDoc(doc(db, "users", user.id), {
    ...user,
  });
  return user;
}

async function signInWithGoogle() {
  //   GoogleSignin.configure({
  //   webClientId:
  //     "560036982005-o0hbsr2q6t3ka09edld3s631fgu6vb64.apps.googleusercontent.com",
  // });
  // // Check if your device supports Google Play
  // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // // Get the users ID token
  // const { data } = await GoogleSignin.signIn();

  // // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(data?.idToken!);

  // // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
}

export { createUser, signInWithGoogle };
