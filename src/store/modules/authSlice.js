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
    {
      id: 3,
      username: '다니엘',
      email: 'test3@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/QrnlM2WRHaA22wFZPRuM-m7Gl61o4cX-Gh_uSdWAP__AHim_5pf5JbCa5JXM0gOqtl_44KMvIqWja8sRJqRDN7EhSNd50lB4Vx_NLKOV0XD3yxd43aJS9lLQMFiQHb6pznA4O6jSbs86XojMC3zGCA.webp',
      isMembershiped: false,
      couponNumber: 1,
    },
    {
      id: 4,
      username: '강해린',
      email: 'test4@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/TsFCwcu3cNWPmexi_VBrly16FN9azhR6bn8qmpB_yes7Zz9jDvwcKvGT4LHUUS40-5p6F1WT9snqAzmZhe58FFJXvJFw3veLELZi1d5f14s_cW-rNMR4jhW_z_oWOtklMG_b04ArRUIi-WbbYrHGVQ.webp',
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
      {
        id: 1,
        img: 'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
      },
      {
        id: 2,
        img: 'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
      },
      {
        id: 3,
        img: 'https://i.namu.wiki/i/sG8HN6YMKjUspEo9X5laRqUgl-gw7j-Wi5m6HjqO4bqBvUiuQFp5XcsCQFp2nzhHaCeMBKku0RDycCMtALE61zddtlaMZFODXm7X5RHo9RZbDcOVc_D21dO41dN5UmgJhsnRQ7ND247OsagEq2ylFg.webp',
      },
      {
        id: 4,
        img: 'https://i.namu.wiki/i/d9hdpzAbnqFYoQehdj4sS9oHlr9ud0a-syZovGpJGAQx3_bMtCEM2BBuOfXZNo0RGMu-1L8A9q_QgFzrqDDN1RxWwLLKfIOGcsD5lhL1TeD8ASXv0oi4yRfayEGRobTBW3E9MXAxlq4ppREZ8oxOuA.webp',
      },
      {
        id: 5,
        img: 'https://i.namu.wiki/i/P86wTXzTzBlhI8ApoKbtgyRR4--bqnxGNdjmPtMsFYDheW4Jgsaw18BYOwJbXzSMevbepsRxf6YN8GYx-VX5M5FV5sUyPXMgpjo2dUA7BN1_epPV-_AKtbso_5KwciByy8b7Kc1I43UHs-uocdIk2g.webp',
      },
      {
        id: 6,
        img: 'https://i.namu.wiki/i/f1wwMiEKjXDltiTvSXgzwgPcTkmjJ9x6cLwWKVBwcBUrOANbFHc_I6XNWJ2XPQQ1Dnl5Uynup7qpN0TZhWcck9xBeuUhZhaQMEYWfJHQ61jUML-3ne4vyDNF9EXzwap3_-4gCIa-H4vbMpDQh6SQJA.webp',
      },
      {
        id: 7,
        img: 'https://i.namu.wiki/i/azCYcEYMQghxq-67NqikbdEF35Kw9vc7mpUqfigpIFbMKRTqy5nrgLRzT3cm4I4EuHfsG1ERuqeI8vjCxiOwyrEjDE4wlGE4Ec-FtIfio3nVtDUuynnGyCZ4IlVW4321FvTfmcr08D4FbjdK2rZ2Kg.webp',
      },
      {
        id: 8,
        img: 'https://i.namu.wiki/i/gbLKupTPHc8PryBuyZth63NQAJctjppwtXMFFVwh_GNqIkYnXxpI89AF4Gdjbl1MR0a_NVYBDhBaOc4F4jQEtG4HfJdmYo7YMy2yDN93wG1Mgp2YLc0UNFBBpiNRZj1MMakoUn5VjL048kr4y-mGQQ.webp',
      },
      {
        id: 9,
        img: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/09/02/e316e3a2-d7e0-44a3-b5d6-382b9c530747.jpg',
      },
      {
        id: 10,
        img: 'https://i.namu.wiki/i/FsAWx_uCcjFQB3gpU0f9JpZf5v-f7k9lE1AndPMheOzDwRsZtq1Ax4Ztakc-D3QG0YLfHHGpKxZDw6EP-SBEMVCftbNK7L6QG5jtxVa-GQ5YhXt7Lj30gwnIy9stOsHM7q7-pasIHN3K8sj2T0aD8g.webp',
      },
      {
        id: 11,
        img: 'https://i.namu.wiki/i/10B3vERwcMLoVZMeXbjc7tNyYR941cpCjjgEIqF1o0luN6DS83NMC_Cksdtu_sMDHh67aNI1tB8ILo5AwxglElkkKY1GLu00TDnQAjB0wOfxPmndvWJAk5qDSrWIAWO3DsTW46hBzzlexpWXBrHmLQ.webp',
      },
    ],
    watched: [
      {
        id: 1,
        img: 'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
      },
      {
        id: 2,
        img: 'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
      },
      {
        id: 3,
        img: 'https://i.namu.wiki/i/sG8HN6YMKjUspEo9X5laRqUgl-gw7j-Wi5m6HjqO4bqBvUiuQFp5XcsCQFp2nzhHaCeMBKku0RDycCMtALE61zddtlaMZFODXm7X5RHo9RZbDcOVc_D21dO41dN5UmgJhsnRQ7ND247OsagEq2ylFg.webp',
      },
      {
        id: 4,
        img: 'https://i.namu.wiki/i/d9hdpzAbnqFYoQehdj4sS9oHlr9ud0a-syZovGpJGAQx3_bMtCEM2BBuOfXZNo0RGMu-1L8A9q_QgFzrqDDN1RxWwLLKfIOGcsD5lhL1TeD8ASXv0oi4yRfayEGRobTBW3E9MXAxlq4ppREZ8oxOuA.webp',
      },
      {
        id: 5,
        img: 'https://i.namu.wiki/i/P86wTXzTzBlhI8ApoKbtgyRR4--bqnxGNdjmPtMsFYDheW4Jgsaw18BYOwJbXzSMevbepsRxf6YN8GYx-VX5M5FV5sUyPXMgpjo2dUA7BN1_epPV-_AKtbso_5KwciByy8b7Kc1I43UHs-uocdIk2g.webp',
      },
      {
        id: 6,
        img: 'https://i.namu.wiki/i/f1wwMiEKjXDltiTvSXgzwgPcTkmjJ9x6cLwWKVBwcBUrOANbFHc_I6XNWJ2XPQQ1Dnl5Uynup7qpN0TZhWcck9xBeuUhZhaQMEYWfJHQ61jUML-3ne4vyDNF9EXzwap3_-4gCIa-H4vbMpDQh6SQJA.webp',
      },
      {
        id: 7,
        img: 'https://i.namu.wiki/i/azCYcEYMQghxq-67NqikbdEF35Kw9vc7mpUqfigpIFbMKRTqy5nrgLRzT3cm4I4EuHfsG1ERuqeI8vjCxiOwyrEjDE4wlGE4Ec-FtIfio3nVtDUuynnGyCZ4IlVW4321FvTfmcr08D4FbjdK2rZ2Kg.webp',
      },
      {
        id: 8,
        img: 'https://i.namu.wiki/i/gbLKupTPHc8PryBuyZth63NQAJctjppwtXMFFVwh_GNqIkYnXxpI89AF4Gdjbl1MR0a_NVYBDhBaOc4F4jQEtG4HfJdmYo7YMy2yDN93wG1Mgp2YLc0UNFBBpiNRZj1MMakoUn5VjL048kr4y-mGQQ.webp',
      },
      {
        id: 9,
        img: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/09/02/e316e3a2-d7e0-44a3-b5d6-382b9c530747.jpg',
      },
      {
        id: 10,
        img: 'https://i.namu.wiki/i/FsAWx_uCcjFQB3gpU0f9JpZf5v-f7k9lE1AndPMheOzDwRsZtq1Ax4Ztakc-D3QG0YLfHHGpKxZDw6EP-SBEMVCftbNK7L6QG5jtxVa-GQ5YhXt7Lj30gwnIy9stOsHM7q7-pasIHN3K8sj2T0aD8g.webp',
      },
      {
        id: 11,
        img: 'https://i.namu.wiki/i/10B3vERwcMLoVZMeXbjc7tNyYR941cpCjjgEIqF1o0luN6DS83NMC_Cksdtu_sMDHh67aNI1tB8ILo5AwxglElkkKY1GLu00TDnQAjB0wOfxPmndvWJAk5qDSrWIAWO3DsTW46hBzzlexpWXBrHmLQ.webp',
      },
    ],
    downed: [
      {
        id: 1,
        img: 'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
      },
      {
        id: 2,
        img: 'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
      },
      {
        id: 3,
        img: 'https://i.namu.wiki/i/sG8HN6YMKjUspEo9X5laRqUgl-gw7j-Wi5m6HjqO4bqBvUiuQFp5XcsCQFp2nzhHaCeMBKku0RDycCMtALE61zddtlaMZFODXm7X5RHo9RZbDcOVc_D21dO41dN5UmgJhsnRQ7ND247OsagEq2ylFg.webp',
      },
      {
        id: 4,
        img: 'https://i.namu.wiki/i/d9hdpzAbnqFYoQehdj4sS9oHlr9ud0a-syZovGpJGAQx3_bMtCEM2BBuOfXZNo0RGMu-1L8A9q_QgFzrqDDN1RxWwLLKfIOGcsD5lhL1TeD8ASXv0oi4yRfayEGRobTBW3E9MXAxlq4ppREZ8oxOuA.webp',
      },
      {
        id: 5,
        img: 'https://i.namu.wiki/i/P86wTXzTzBlhI8ApoKbtgyRR4--bqnxGNdjmPtMsFYDheW4Jgsaw18BYOwJbXzSMevbepsRxf6YN8GYx-VX5M5FV5sUyPXMgpjo2dUA7BN1_epPV-_AKtbso_5KwciByy8b7Kc1I43UHs-uocdIk2g.webp',
      },
    ],
    reviewed: [
      {
        id: 1,
        title: '봄밤',
        rate: 5,
        date: '2025-02-10',
        img: 'https://i.namu.wiki/i/s9KQXGa47ZTjbUaqxTXdjfbRrl5Nfi-bytD98aw6RmAoDnIjT-xsLosJI8Z2KOrpSkvur3YF7BN9_pVbE3ryqkeFdXd3kREQBmOujjxDDrssjUxky4UUB0ztVLouuvLtF-utn_XlNJXwa3QeD25srA.webp',
        content:
          '이거 완전 재밌어요! 강추해요! 리뷰 창에는 한 세줄만 나오는 게 좋을 것 같네요. 세줄 넘어가면 말줄임표가 되게하고 싶네요. 이거 완전 재밌어요! 강추해요! 리뷰 창에는 한 세줄만 나오는 게 좋을 것 같네요. 세줄 넘어가면 말줄임표가 되게하고 싶네요. 이거 완전 재밌어요! 강추해요! 리뷰 창에는 한 세줄만 나오는 게 좋을 것 같네요. 세줄 넘어가면 말줄임표가 되게하고 싶네요. 이거 완전 재밌어요! 강추해요! 리뷰 창에는 한 세줄만 나오는 게 좋을 것 같네요. 세줄 넘어가면 말줄임표가 되게하고 싶네요.',
      },
      {
        id: 2,
        title: '더 글로리',
        rate: 5,
        date: '2025-02-08',
        img: 'https://i.namu.wiki/i/T674Y4ypxHFLP1yrU0nffyRTn5cRWNHYjMDh-poJ6TvWda7lO6GRAbw0YTqnnSFjuHf5r26tdyYQAvasz5XoyepZdmSbAFAZdrWKN5UeJNpT693If6Qi_1zcOaB_CmSQDYnqngNDC83qwj1qiYxXwg.webp',
        content: '몰입감 최고! 주연 배우들의 연기가 정말 인상적이었어요. 추천합니다!',
      },
      {
        id: 3,
        title: '지금 우리 학교는',
        rate: 4,
        date: '2025-02-05',
        img: 'https://i.namu.wiki/i/XbXdrpbOShAaucSi8ytggfPka9nYc0ltx5hi4_xvJiDQ0aTpYirp12jI8_8P3wzViV44KIaFsUTl7HHGtuPbiYEvwi-siGzhUqux1CFrzu1Y2qx0W8rZMTc6-rwv9gapE7ZvmzTRjRUk-iXG3MBK8A.webp',
        content: '좀비물인데도 감동적인 장면들이 많았어요. 캐릭터 서사가 좋네요!',
      },
      {
        id: 4,
        title: '킹덤',
        rate: 5,
        date: '2025-02-02',
        img: 'https://i.namu.wiki/i/Sd7jF1JMKSpE8ymbVBysUmJAS_SWkE2pBTz4TGHQsRtj_go8HHEQGkHO_GTB35nf6U3lZ7Hz_41UlsNxntbiZFDoagQXjgdQVT-6DPYrZ8vLC_bGQHkIlyEscXJ0lYy-sJxyTtbaw_2zk8ZZ9aA0Wg.webp',
        content: '연출, 각본, 연기까지 완벽했던 사극 좀비물! 다음 시즌이 기대됩니다.',
      },
      {
        id: 5,
        title: '스위트홈',
        rate: 4,
        date: '2025-01-30',
        img: 'https://i.namu.wiki/i/v1QpnDJ3PoQb5gIk5zu21hU5PIRiPZuVRvBIPIdPv240y772nDKOQD1NZH4zzznSsXdYEDdrYyLVqg3eJ-QOHXkxyo37NcoJ7qv4INNkEjm1je27dUcnOJIch0uPR9cCG8a_7cZghb30b-6GHTjwJA.webp',
        content: '괴물 디자인이 엄청 디테일하고 무섭네요! 분위기가 강렬했어요.',
      },
      {
        id: 6,
        title: '나의 해방일지',
        rate: 5,
        date: '2025-01-28',
        img: 'https://i.namu.wiki/i/YBfe40CWPEsZ1sjR0G9npm6_W47ZquPukoSjkDe4QByzoxx3DUPR2uzT0Ci51Jweu0CqaiqMlGD6wOZMqOdtuRXHnMLzoVXKk4n2A8MTG2ZPAJw_XEhPlgQaobexTTlSnL80KYB7eEnO1IYnBREWbg.webp',
        content: '힐링되는 대사들이 많아서 위로가 됐어요. 너무 좋은 작품!',
      },
      {
        id: 7,
        title: 'D.P.',
        rate: 5,
        date: '2025-01-25',
        img: 'https://i.namu.wiki/i/OkvYxwnKNWAGN0uhj0QqyWncb_z45B0BajGSxkjY2PiA9GHCWtZBF0tjkwyxJE21JSjAPTz_J0tm0M1OU-PklHdKxy9K-QW_W02c7oMoK1nhY6D9QV2rTLYmxkLHmwxvZ0O4EV4fTdIZ8fXU8IZDFA.webp',
        content: '현실적인 이야기라 몰입감이 엄청났어요. 여운이 깊게 남네요.',
      },
      {
        id: 8,
        title: '사랑의 불시착',
        rate: 5,
        date: '2025-01-20',
        img: 'https://i.namu.wiki/i/EpQ_S310I0ArNVmgEvCjBY7N6wdSexVklkomnf9nZCrZZHyDS3QoLSAqq-8E2qtTccrx9mbe03emrzVTvRfDjmU_uaok0EPfkAsF40yQNTpY1mwqV5ePJTMqLav2AMhfHaSx9E_FqdyJ8Ac2TPfJ_Q.webp',
        content: '달달한 로맨스에 감동까지! 정말 재밌게 봤어요.',
      },
      {
        id: 9,
        title: '이상한 변호사 우영우',
        rate: 5,
        date: '2025-01-15',
        img: 'https://i.namu.wiki/i/ae9bwU2DRhN4DfdTUmMMr8rQ8Cj4TWnDH-84cEL-N2XADFyoHrG5hCJzW7k5by7v5bmlvEFAN_jQPUmISz_NwlY7bxQuKe6Hfi9CGCEVtpkHgO6jCFVYEAWo0oMhhlsE28s5UO6Rny8vcdB5LFn4iA.webp',
        content: '따뜻하고 감동적인 이야기! 캐릭터들도 개성 넘쳐서 좋았어요.',
      },
    ],
  },
  connected: [[1, 2, 3], [4]],
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
      state.user.liked = state.user.liked.filter((item) => !action.payload.includes(item.id));
    },
    deleteWatched: (state, action) => {
      state.user.watched = state.user.watched.filter((item) => !action.payload.includes(item.id));
    },
    deleteDowned: (state, action) => {
      state.user.downed = state.user.downed.filter((item) => !action.payload.includes(item.id));
    },
    changeUser: (state, action) => {
      state.user = state.joinData.find((item) => item.id === action.payload);
    },
    changeUserImg: (state, action) => {
      state.user.profileImg = action.payload;
    },
    changeUserName: (state, action) => {
      const changeName = action.payload;
      state.joinData.find((item) => item.id === state.user.id).username = changeName;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
