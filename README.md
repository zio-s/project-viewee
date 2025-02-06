```
src/
├── components/                    # 공통 컴포넌트
│   ├── common/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── Form/
│   │   ├── Card/
│   │   └── Navigation/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── index.jsx
│   │   │   ├── UserMenu.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── Footer/
│   │   └── Sidebar/
│   └── features/                  # 기능별 공통 컴포넌트
│       ├── player/
│       │   ├── VideoPlayer.jsx
│       │   └── Controls.jsx
│       ├── review/
│       └── recommendation/
│
├── pages/
│   ├── Landing/                   # 랜딩 페이지
│   │   ├── index.jsx
│   │   └── components/
│   │       ├── Hero/
│   │       ├── Features/
│   │       └── Pricing/
│   │
│   ├── Auth/                      # 인증 관련 페이지
│   │   ├── Login/
│   │   │   ├── index.jsx
│   │   │   └── components/
│   │   │       ├── LoginForm/
│   │   │       └── SocialLogin/
│   │   └── SignUp/
│   │       ├── index.jsx
│   │       └── components/
│   │           ├── SignUpForm/
│   │           └── TermsAgreement/
│   │
│   ├── Home/                      # 메인 페이지
│   │   ├── index.jsx
│   │   └── components/
│   │       ├── MainBanner/
│   │       ├── TrendingSection/
│   │       ├── ContinueWatching/
│   │       └── CategoryRows/
│   │
│   ├── Detail/                    # 상세 페이지
│   │   ├── index.jsx
│   │   └── components/
│   │       ├── ContentInfo/
│   │       ├── ReviewSection/
│   │       ├── RelatedContent/
│   │       └── EpisodeList/
│   │
│   ├── Category/                  # 카테고리 페이지
│   │   ├── index.jsx
│   │   └── components/
│   │       ├── CategoryFilter/
│   │       ├── ContentGrid/
│   │       └── SortingOptions/
│   │
│   ├── Search/                    # 검색 페이지
│   │   ├── index.jsx
│   │   └── components/
│   │       ├── SearchBar/
│   │       ├── FilterSection/
│   │       └── ResultGrid/
│   │
│   └── MyPage/                    # 마이 페이지
│       ├── index.jsx
│       └── components/
│           ├── Profile/
│           ├── WatchHistory/
│           └── WishList/
│
├── store/                         # Redux 관련
│   ├── index.js                   # 스토어 설정
│   └── slices/
│       ├── authSlice.js          # 인증 관련 상태
│       ├── contentSlice.js       # 콘텐츠 관련 상태
│       ├── playerSlice.js        # 플레이어 관련 상태
│       ├── reviewSlice.js        # 리뷰 관련 상태
│       └── uiSlice.js            # UI 관련 상태
│
├── api/                           # API 통신
│   ├── axios.js                   # axios 인스턴스 설정
│   ├── auth.js
│   ├── content.js
│   ├── review.js
│   └── user.js

├── utils/                         # 유틸리티 함수들
│   ├── format.js
│   ├── validation.js
│   ├── storage.js
│   └── constants.js

├── hooks/                         # 커스텀 훅
│   ├── useAuth.js
│   ├── usePlayer.js
│   └── useInfiniteScroll.js

├── styles/                        # 스타일 관련
│   ├── theme.js
│   ├── globalStyles.js
│   └── variables.js

├── assets/                        # 정적 자원
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── routes/                        # 라우팅 설정
    ├── index.jsx
    ├── PrivateRoute.jsx
    └── PublicRoute.jsx
```

````
깃 연습입니다
```;
````
