# Absolute Style Usage Report

프로젝트(`src`) 내 `absolute` 포지셔닝이 사용된 파일 및 코드 위치 목록입니다.

## 1. UiMedium (중급 모드)

### `screens/UiMedium/sections/SessionListSection/components/SessionHeader.tsx`
- **Line 21**: 검색 아이콘 위치 조정
  ```tsx
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
  ```

### `screens/UiMedium/sections/ImageEditorSection/components/QuickRefinements.tsx`
- **Line 40**: 사이드바 영역 고정 위치
  ```tsx
  <aside className="absolute top-[73px] left-[803px] w-72">
  ```

### `screens/UiMedium/sections/ImageEditorSection/components/ImagePreview.tsx`
- **Line 49**: 이미지 위 그라데이션 오버레이
  ```tsx
  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />
  ```
- **Line 51**: 우측 상단 요소 배치
  ```tsx
  <div className="absolute top-4 right-4">
  ```
- **Line 71**: 하단 설명 영역 배경 오버레이
  ```tsx
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]">
  ```

## 2. UiHighCognitive (고급 모드)

### `screens/UiHighCognitive/sections/SessionListSection/components/SessionHeader.tsx`
- **Line 18**: 검색 아이콘 위치 조정
  ```tsx
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
  ```

### `screens/UiHighCognitive/sections/ImageEditorSection/components/ImagePreviewArea.tsx`
- **Line 79**: 전체 오버레이 (포인터 이벤트 통과)
  ```tsx
  <div className="absolute w-full h-full top-0 left-0 pointer-events-none bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />
  ```
- **Line 81**: 우측 상단 아이콘 그룹
  ```tsx
  <div className="inline-flex items-start absolute top-4 right-4">
  ```
- **Line 105**: 하단 정보 영역 컨테이너
  ```tsx
  <div className="flex w-full p-4 absolute left-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)] flex-col items-start">
  ```

## 3. UiLowCognitive (초급 모드)

### `screens/UiLowCognitive/components/ImageResultCard.tsx`
- **Line 26**: 우측 상단 뱃지/버튼 스타일
  ```tsx
  className="absolute top-4 right-4 bg-[#00000066] text-white backdrop-blur-[2px] hover:bg-[#00000066] rounded-full px-3 py-1.5"
  ```
