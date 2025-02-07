import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  joinData: [
    {
      id: 1,
      username: '김민지',
      email: 'test@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/khXs0TuOmkXJgKpC4ybkuB_A1h57NBKsbNz_TkVE1K1Dv5-wceOmrmYjUMWZjEEzUKrgMJERPlcVuK0BU7wjwv1x9R0gC4M6kB7RMurrTomL8sU6FiU-O3uhxh5312NXdOMG8cskBQKneF4wsZmXXg.webp',
      isMembershiped: true,
      couponNumber: 0,
      liked: [
        'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
        'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
        'https://i.namu.wiki/i/sG8HN6YMKjUspEo9X5laRqUgl-gw7j-Wi5m6HjqO4bqBvUiuQFp5XcsCQFp2nzhHaCeMBKku0RDycCMtALE61zddtlaMZFODXm7X5RHo9RZbDcOVc_D21dO41dN5UmgJhsnRQ7ND247OsagEq2ylFg.webp',
        'https://i.namu.wiki/i/d9hdpzAbnqFYoQehdj4sS9oHlr9ud0a-syZovGpJGAQx3_bMtCEM2BBuOfXZNo0RGMu-1L8A9q_QgFzrqDDN1RxWwLLKfIOGcsD5lhL1TeD8ASXv0oi4yRfayEGRobTBW3E9MXAxlq4ppREZ8oxOuA.webp',
        'https://i.namu.wiki/i/P86wTXzTzBlhI8ApoKbtgyRR4--bqnxGNdjmPtMsFYDheW4Jgsaw18BYOwJbXzSMevbepsRxf6YN8GYx-VX5M5FV5sUyPXMgpjo2dUA7BN1_epPV-_AKtbso_5KwciByy8b7Kc1I43UHs-uocdIk2g.webp',
        'https://i.namu.wiki/i/f1wwMiEKjXDltiTvSXgzwgPcTkmjJ9x6cLwWKVBwcBUrOANbFHc_I6XNWJ2XPQQ1Dnl5Uynup7qpN0TZhWcck9xBeuUhZhaQMEYWfJHQ61jUML-3ne4vyDNF9EXzwap3_-4gCIa-H4vbMpDQh6SQJA.webp',
        'https://i.namu.wiki/i/azCYcEYMQghxq-67NqikbdEF35Kw9vc7mpUqfigpIFbMKRTqy5nrgLRzT3cm4I4EuHfsG1ERuqeI8vjCxiOwyrEjDE4wlGE4Ec-FtIfio3nVtDUuynnGyCZ4IlVW4321FvTfmcr08D4FbjdK2rZ2Kg.webp',
        'https://i.namu.wiki/i/gbLKupTPHc8PryBuyZth63NQAJctjppwtXMFFVwh_GNqIkYnXxpI89AF4Gdjbl1MR0a_NVYBDhBaOc4F4jQEtG4HfJdmYo7YMy2yDN93wG1Mgp2YLc0UNFBBpiNRZj1MMakoUn5VjL048kr4y-mGQQ.webp',
        'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/09/02/e316e3a2-d7e0-44a3-b5d6-382b9c530747.jpg',
        'https://i.namu.wiki/i/FsAWx_uCcjFQB3gpU0f9JpZf5v-f7k9lE1AndPMheOzDwRsZtq1Ax4Ztakc-D3QG0YLfHHGpKxZDw6EP-SBEMVCftbNK7L6QG5jtxVa-GQ5YhXt7Lj30gwnIy9stOsHM7q7-pasIHN3K8sj2T0aD8g.webp',
        'https://i.namu.wiki/i/10B3vERwcMLoVZMeXbjc7tNyYR941cpCjjgEIqF1o0luN6DS83NMC_Cksdtu_sMDHh67aNI1tB8ILo5AwxglElkkKY1GLu00TDnQAjB0wOfxPmndvWJAk5qDSrWIAWO3DsTW46hBzzlexpWXBrHmLQ.webp',
      ],
    },
    {
      id: 2,
      username: '팜하니',
      email: 'test2@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/HurDJRqmkNVj4sfYwctoo8aa94BoWK0VseUVXdJ5zawFPft8OdDxexUuux2tuBca6DBZPalOQk5Z8aYaIaX4bDJhpvaXE4ycqC3tYJDwTaHDaZNOEd-Xsxi17khQ6fjkErMvU1yg7jCdxrQd-DT8Jw.webp',
      isMembershiped: false,
      couponNumber: 1,
    },
  ],
  user: {
    id: 1,
    username: '김민지',
    email: 'test@example.com',
    password: '123456',
    profileImg:
      'https://i.namu.wiki/i/khXs0TuOmkXJgKpC4ybkuB_A1h57NBKsbNz_TkVE1K1Dv5-wceOmrmYjUMWZjEEzUKrgMJERPlcVuK0BU7wjwv1x9R0gC4M6kB7RMurrTomL8sU6FiU-O3uhxh5312NXdOMG8cskBQKneF4wsZmXXg.webp',
    isMembershiped: false,
    couponNumber: 2,
    liked: [
      'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
      'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
      'https://i.namu.wiki/i/sG8HN6YMKjUspEo9X5laRqUgl-gw7j-Wi5m6HjqO4bqBvUiuQFp5XcsCQFp2nzhHaCeMBKku0RDycCMtALE61zddtlaMZFODXm7X5RHo9RZbDcOVc_D21dO41dN5UmgJhsnRQ7ND247OsagEq2ylFg.webp',
      'https://i.namu.wiki/i/d9hdpzAbnqFYoQehdj4sS9oHlr9ud0a-syZovGpJGAQx3_bMtCEM2BBuOfXZNo0RGMu-1L8A9q_QgFzrqDDN1RxWwLLKfIOGcsD5lhL1TeD8ASXv0oi4yRfayEGRobTBW3E9MXAxlq4ppREZ8oxOuA.webp',
      'https://i.namu.wiki/i/P86wTXzTzBlhI8ApoKbtgyRR4--bqnxGNdjmPtMsFYDheW4Jgsaw18BYOwJbXzSMevbepsRxf6YN8GYx-VX5M5FV5sUyPXMgpjo2dUA7BN1_epPV-_AKtbso_5KwciByy8b7Kc1I43UHs-uocdIk2g.webp',
      'https://i.namu.wiki/i/f1wwMiEKjXDltiTvSXgzwgPcTkmjJ9x6cLwWKVBwcBUrOANbFHc_I6XNWJ2XPQQ1Dnl5Uynup7qpN0TZhWcck9xBeuUhZhaQMEYWfJHQ61jUML-3ne4vyDNF9EXzwap3_-4gCIa-H4vbMpDQh6SQJA.webp',
      'https://i.namu.wiki/i/azCYcEYMQghxq-67NqikbdEF35Kw9vc7mpUqfigpIFbMKRTqy5nrgLRzT3cm4I4EuHfsG1ERuqeI8vjCxiOwyrEjDE4wlGE4Ec-FtIfio3nVtDUuynnGyCZ4IlVW4321FvTfmcr08D4FbjdK2rZ2Kg.webp',
      'https://i.namu.wiki/i/gbLKupTPHc8PryBuyZth63NQAJctjppwtXMFFVwh_GNqIkYnXxpI89AF4Gdjbl1MR0a_NVYBDhBaOc4F4jQEtG4HfJdmYo7YMy2yDN93wG1Mgp2YLc0UNFBBpiNRZj1MMakoUn5VjL048kr4y-mGQQ.webp',
      'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/09/02/e316e3a2-d7e0-44a3-b5d6-382b9c530747.jpg',
      'https://i.namu.wiki/i/FsAWx_uCcjFQB3gpU0f9JpZf5v-f7k9lE1AndPMheOzDwRsZtq1Ax4Ztakc-D3QG0YLfHHGpKxZDw6EP-SBEMVCftbNK7L6QG5jtxVa-GQ5YhXt7Lj30gwnIy9stOsHM7q7-pasIHN3K8sj2T0aD8g.webp',
      'https://i.namu.wiki/i/10B3vERwcMLoVZMeXbjc7tNyYR941cpCjjgEIqF1o0luN6DS83NMC_Cksdtu_sMDHh67aNI1tB8ILo5AwxglElkkKY1GLu00TDnQAjB0wOfxPmndvWJAk5qDSrWIAWO3DsTW46hBzzlexpWXBrHmLQ.webp',
    ],
  },
  authed: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.joinData.find((item) => item.email === email && item.password === password);
      if (user) {
        state.user = user;
        state.authed = true;
      } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      }
    },
    deleteLiked: (state, action) => {
      const selected = action.payload;
      for (let i = 1; i <= selected.length; i++) {
        state.user.liked.splice(selected[i], 1);
      }
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
