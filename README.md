```
src/
│
├── assets/                  # 이미지, 폰트 등 정적 리소스
│   ├── images/
│   └── fonts/
│
├── components/             # 재사용 가능한 공통 컴포넌트
│   ├── common/            # 공통으로 사용되는 컴포넌트
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Modal/
│   │
│   ├── layout/            # 레이아웃 관련 컴포넌트
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Section/
│   │   └── Navigation/
│   │
│   └── features/          # 특정 기능과 관련된 컴포넌트
│       ├── auth/          # 인증 관련 컴포넌트
│       ├── movie/         # 영화 관련 컴포넌트
│       ├── drama/         # 드라마 관련 컴포넌트
│       ├── variety/       # 예능 관련 컴포넌트
│       ├── anime/         # 애니메이션 관련 컴포넌트
│       ├── kids/          # 키즈 콘텐츠 관련 컴포넌트
│       └── mypage/        # 마이페이지 재사용 컴포넌트
│           ├── ProfileBadge/
│           ├── ContentProgress/
│           └── WatchHistory/
│
├── pages/                 # 페이지 컴포넌트
│   ├── Landing/          # 랜딩 페이지
│   │
│   ├── Auth/            # 로그인/회원가입 페이지
│   │   ├── Login/
│   │   └── Register/
│   │
│   ├── Movie/           # 영화 페이지
│   │   ├── List/
│   │   └── Detail/
│   │
│   ├── Drama/           # 드라마 페이지
│   │   ├── List/
│   │   └── Detail/
│   │
│   ├── Variety/         # 예능 페이지
│   │   ├── List/
│   │   └── Detail/
│   │
│   ├── Anime/           # 애니메이션 페이지
│   │   ├── List/
│   │   └── Detail/
│   │
│   ├── Kids/            # 키즈 페이지
│   │   ├── List/
│   │   └── Detail/
│   │
│   ├── MyPage/          # 마이페이지
│   │   ├── index.jsx    # 마이페이지 메인 컴포넌트
│   │   ├── styles.css   # 마이페이지 스타일
│   │   │
│   │   ├── components/  # 마이페이지 전용 컴포넌트
│   │   │   ├── Profile/
│   │   │   │   ├── ProfileInfo/
│   │   │   │   ├── ProfileEdit/
│   │   │   │   └── Notification/
│   │   │   │
│   │   │   ├── ContentList/
│   │   │   │   ├── RecentContent/
│   │   │   │   ├── WatchingContent/
│   │   │   │   ├── LikedContent/
│   │   │   │   └── ContentCard/
│   │   │   │
│   │   │   ├── Subscription/
│   │   │   │   ├── CurrentPlan/
│   │   │   │   ├── PaymentHistory/
│   │   │   │   └── BillingInfo/
│   │   │   │
│   │   │   └── Settings/
│   │   │       ├── AccountSettings/
│   │   │       ├── SecuritySettings/
│   │   │       └── PreferenceSettings/
│   │   │
│   │   ├── hooks/      # 마이페이지 전용 훅
│   │   │   ├── useProfileUpdate.js
│   │   │   ├── useContentList.js
│   │   │   └── useSubscription.js
│   │   │
│   │   └── constants/  # 마이페이지 관련 상수
│   │       ├── profileOptions.js
│   │       └── contentTypes.js
│   │
│   └── Subscription/   # 구독권 페이지
│
├── services/          # API 통신 관련 로직
│   ├── api/          # API 엔드포인트 설정
│   │   ├── auth.js
│   │   ├── movie.js
│   │   ├── drama.js
│   │   ├── variety.js
│   │   ├── anime.js
│   │   └── kids.js
│   └── axios/        # Axios 인스턴스 및 인터셉터
│
├── hooks/            # 공통 커스텀 훅
│   ├── useAuth.js
│   ├── useMedia.js
│   └── useDetail.js
│
├── store/           # 상태 관리 (Redux/Recoil 등)
│   ├── auth/
│   └── media/
│
├── styles/          # 스타일 관련 파일
│   ├── global.css
│   └── theme.js
│
├── utils/          # 유틸리티 함수
│   ├── formatters.js
│   └── validators.js
│
├── constants/      # 상수 정의
│   ├── routes.js
│   └── api.js
│
└── App.jsx        # 루트 컴포넌트
```

```

```
