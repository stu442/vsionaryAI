# Changelog

이 문서는 날짜별로 변경 내용을 상세히 기록합니다.

## 2026-01-11
- CHANGELOG 문서 초기 생성 및 한국어 기록 규칙 확립.
- 히어로 섹션의 생성 버튼을 3개로 분리하고 각 버튼이 고정 경로로 이동하도록 변경.
- 이미지 생성 훅에 일일 생성 한도 및 로컬 저장 로직 추가.
- 이미지 생성 API를 환경 변수로 ON/OFF 제어하도록 변경하고 OpenAI 이미지 생성 호출 처리 추가.
- 환경 변수 예시 파일에 이미지 API 토글 항목 추가.
- 저장소 가이드 문서(AGENTS) 생성 및 운영 규칙 정리.
- 빌드/타입스크립트 설정 및 의존성 메타데이터 업데이트.
- Storybook 초기화 및 설정 파일 생성(`.storybook/main.ts`, `.storybook/preview.ts`, `.storybook/vitest.setup.ts`).
- Vite 설정에 Storybook Vitest 애드온 플러그인과 테스트 설정 추가.
- Storybook 전역에 Tailwind CSS와 MemoryRouter 데코레이터 추가.
- 화면 컴포넌트 Storybook 스토리 추가(`src/screens/*/*.stories.tsx`).
- Desktop 하위 섹션 컴포넌트 Storybook 스토리 추가.
- Storybook/Vite/Vitest/Playwright 산출물 gitignore 추가.
- UiHighCognitive/UiMedium/UiLowCognitive 하위 컴포넌트 Storybook 스토리 추가.
- Storybook 기본 샘플 스토리 제거.
- UiHighCognitive 화면의 이미지 에디터 섹션(ImageEditorSection) 기능 연동.
  - QuickRefinements: 프롬프트 세부 조정(조명, 색상 등) 버튼 클릭 시 재생성 로직 및 로딩 상태 추가, 호버 시 텍스트 색상 가독성 개선.
  - ImagePreviewArea: 재생성(Regenerate) 버튼 활성화 및 로딩 UI 적용, 호버 시 텍스트 색상 가독성 개선, 긴 프롬프트 표시 시 레이아웃 깨짐 방지(줄바꿈 허용).
  - ImageEditorSection: useImageGeneration 훅을 통해 자식 컴포넌트(미리보기, 조정 버튼) 기능 연결.
- UiHighCognitive 및 UiMedium 화면의 EditorHeader 타이틀에 말줄임표(truncate) 적용.
- UiMedium 화면의 ImagePreview 프롬프트 텍스트에 말줄임표(truncate) 적용.
- UiHighCognitive 및 UiMedium의 이미지 에디터 동작 로직 개선:
  - QuickRefinements 버튼 클릭 시 즉시 생성하지 않고 보정 프롬프트(Refinement Text)만 누적하도록 변경.
  - "Create/Try Variations" 버튼 클릭 시 원본 프롬프트와 누적된 보정 프롬프트를 합쳐서 이미지 생성하도록 수정.
  - "Regenerate" 버튼 클릭 시 보정 프롬프트를 제외한 원본 프롬프트로만 이미지를 재생성하도록 수정.
- UiMedium 화면에 프롬프트 직접 수정(Edit) 기능 추가.
  - Edit 버튼 클릭 시 인라인 입력창 활성화.
  - 수정 후 저장 시 변경된 프롬프트(+보정값)로 이미지 재생성.
- UiMedium 화면의 "Use this result" 버튼 클릭 시 홈(루트)으로 이동하도록 라우팅 연결.
- UiLowCognitive 화면에서 프롬프트 편집 모드를 추가하고 Edit 버튼으로 수정/저장 및 취소 동작 지원.
- UiLowCognitive 화면의 "Use this result" 버튼 클릭 시 홈으로 이동하도록 라우팅 연결.
- UiLowCognitive 프롬프트 저장 시 변경된 문구로 이미지 재생성 API 호출.
