import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 각 섹션의 상태를 관리
  sections: {
    hero: {
      isComplete: false,
      isInView: false,
      progress: 0,
      isPlaying: false,
    },
    card: {
      isComplete: false,
      isInView: false,
      progress: 0,
      isPlaying: false,
    },
    scroll: {
      isComplete: false,
      isInView: false,
      progress: 0,
      isPlaying: false,
    },
    // 추가 예정인 섹션들도 미리 정의
    review: {
      isComplete: false,
      isInView: false,
      progress: 0,
      isPlaying: false,
    },
    // 추가 섹션들을 위한 공간...
  },
  activeSection: null,
  globalProgress: 0,
  // 뷰포트 정보
  viewport: {
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    scrollY: 0,
  },
};

const gsapSlice = createSlice({
  name: 'gsap',
  initialState,
  reducers: {
    // 섹션 완료 상태 설정
    setSectionComplete: (state, action) => {
      const { section, isComplete } = action.payload;
      state.sections[section].isComplete = isComplete;
    },
    // 섹션 진행도 업데이트
    setSectionProgress: (state, action) => {
      const { section, progress } = action.payload;
      state.sections[section].progress = progress;
    },
    // 섹션 활성화 상태 설정
    setSectionInView: (state, action) => {
      const { section, inView } = action.payload;
      state.sections[section].isInView = inView;
    },
    // 섹션 재생 상태 설정
    setSectionPlaying: (state, action) => {
      const { section, isPlaying } = action.payload;
      state.sections[section].isPlaying = isPlaying;
    },
    // 활성 섹션 설정
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    // 전역 진행도 업데이트
    setGlobalProgress: (state, action) => {
      state.globalProgress = action.payload;
    },
    // 뷰포트 정보 업데이트
    updateViewport: (state, action) => {
      state.viewport = { ...state.viewport, ...action.payload };
    },
    // 특정 섹션 초기화
    resetSection: (state, action) => {
      const section = action.payload;
      state.sections[section] = { ...initialState.sections[section] };
    },
    // 모든 섹션 초기화
    resetAllSections: (state) => {
      state.sections = { ...initialState.sections };
      state.activeSection = null;
      state.globalProgress = 0;
    },
  },
});

// Actions
export const {
  setSectionComplete,
  setSectionProgress,
  setSectionInView,
  setSectionPlaying,
  setActiveSection,
  setGlobalProgress,
  updateViewport,
  resetSection,
  resetAllSections,
} = gsapSlice.actions;

// Selectors
export const selectSection = (section) => (state) => state.gsapR.sections[section];

export const selectSectionProgress = (section) => (state) => state.gsapR.sections[section].progress;

export const selectSectionInView = (section) => (state) => state.gsapR.sections[section].isInView;

export const selectSectionPlaying = (section) => (state) => state.gsapR.sections[section].isPlaying;

export const selectSectionComplete = (section) => (state) => state.gsapR.sections[section].isComplete;

export const selectActiveSection = (state) => state.gsapR.activeSection;

export const selectViewport = (state) => state.gsapR.viewport;

export const selectGlobalProgress = (state) => state.gsapR.globalProgress;

export default gsapSlice.reducer;
