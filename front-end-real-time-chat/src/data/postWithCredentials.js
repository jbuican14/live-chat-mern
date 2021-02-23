import firebase from 'firebase/app';

export const postWithCredentials = async (url, bodyData) => {
  const user = firebase.auth().currentUser;

  if (!user) {
    console.error(
      'Error: trying to make an authed requests. User is not logged in.'
    );
    return [];
  }

  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(bodyData),
    headers: {
      AuthToken: await user.getIdToken(),
      'Content-Type': 'application/json',
    },
  });

  return res;
};
