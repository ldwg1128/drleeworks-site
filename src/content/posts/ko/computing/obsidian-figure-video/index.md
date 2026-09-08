---
title: Obsidian을 이용한 Markdown문서 편집하기
slug: obsidian-figure-video
translationKey: obsidian-figure-video
lang: ko
published: 2026-09-07
category: 컴퓨팅
tags:
  - Astro
  - 유지보수
author: DrLeeWorks
summary: Markdown 문서 편집에 Obsidian을 사용하면서 그림과 유튜브 동영상을 첨부하는 방법 정리.
recommended: true
draft: false
---

현재 대부분의 소프트웨어와 웹사이트를 VS Code + Codex 조합으로 구현하고 있지만, Markdown(MD) 문서를 VS Code로 작성하는건 꽤 불편하고 실수로 다른 코드를 건드릴 수도 있어 독립적인 프로그램을 사용하는 것도 좋은 아이디어이다.

Obsidian은 MD 문서의 편집에 널리 사용되는 무료 소프트웨어이다.
https://obsidian.md/download

## MD 문서 편집 시작하기

처음 Obsidian을 설치하면 일반적인 워드프로세서와 사용법이 달라 당황하기 쉽다. 문서를 더블클릭해도 그 문서가 열리지 않는다. 좌측 하단에서 본인이 편집하고자 하는 MD 파일들이 모여있는 폴더를 열어야 한다. 이는 VS Code가 특정 폴더를 연 후 작업을 하는 것과 비슷하다.

대략적인 사용 흐름은 아래와 같다.

> Obsidian 실행 → `content` Vault 열기 → 왼쪽에서 `.md` 선택 → 글 작성 → 끝

여기서 Vault(볼트)는 Obsidian이 관리하는 하나의 최상위 폴더를 의미한다. 최상위 폴더를 연 후에는 직관적으로 원하는 문서를 선택하고 작성할 수 있다. 작성된 글은 Ctrl + S (VS Code와 동일)를 눌러 저장할수도 있지만 기본적으로 자동 저장이기 때문에 별도로 저장 버튼을 누를 필요가 없다.


## 주요 Markdown 문법

Markdown 문서를 작성할 때 자주 사용하는 기본 문법을 간단한 예시와 함께 소개한다. 아래 문법만 익혀도 일반적인 글 작성과 편집에는 충분히 활용할 수 있다.

### 1) 제목과 소제목

글의 제목이나 소제목을 구분할 때는 문장 앞에 `#`을 사용한다. `#`의 개수가 많아질수록 하위 단계의 제목이 된다.

예를 들어 `# 가장 큰 제목`, `## 큰 제목`, `### 중간 제목`, `#### 작은 제목`과 같이 작성한다.

실제로 적용하면 다음과 같이 표시된다.

# 가장 큰 제목

## 큰 제목

### 중간 제목

#### 작은 제목

일반적인 글 작성에서는 `##`와 `###` 정도를 주로 사용하면 된다. `#` 뒤에는 한 칸을 띄우고 제목을 입력한다.


### 2) 글자 강조

문장에서 특정 내용을 강조하고 싶을 때는 `**` 또는 `*`를 사용한다.
예를 들어 `**굵은 글씨**`, `*기울임 글씨*`, `~~취소선~~`과 같이 작성한다.
실제로 적용하면 다음과 같이 표시된다.

> **굵은 글씨**     *기울임 글씨*      ~~취소선~~

일반적인 글에서는 중요한 내용을 강조할 때 `**굵은 글씨**`를 사용하는 것이 가장 편리하다.


### 3) 목록

여러 항목을 나열할 때는 문장 앞에 `-`를 사용한다. `-` 뒤에는 한 칸을 띄우고 내용을 입력한다.

예를 들어 `- 첫 번째 항목`, `- 두 번째 항목`, `- 세 번째 항목`과 같이 작성한다.

실제로 적용하면 다음과 같이 표시된다.

- 첫 번째 항목
- 두 번째 항목
- 세 번째 항목

순서가 중요한 경우에는 `1.`, `2.`, `3.`과 같이 숫자를 사용할 수 있다.

1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계


### 4) 링크

다른 웹페이지로 연결되는 링크는 `[표시할 글자](주소)` 형식으로 작성한다.
예를 들어 `[GitHub](https://github.com)`와 같이 작성하면 [GitHub](https://github.com) 라는 글자를 클릭하여 해당 주소로 이동할 수 있다.


### 5) 이미지

이미지는 `![이미지 설명](이미지 경로)` 형식으로 삽입한다.
사이트에 사용할 이미지는 지정된 이미지 폴더에 저장하고 해당 파일의 경로를 입력한다.

예를 들어 `![프로그램 화면](./images/example.png)`과 같이 작성한다.

`./`는 현재 MD 파일이 위치한 폴더를 의미한다. 즉 현재 MD 파일이 있는 위치 기준으로 하위 폴더인 images에 example.png 라는 파일이 있어야 한다.

만약 파일명에 공백이 있으면 경로를 `< >`로 감싼다.

Obsidian에서 이미지를 붙여넣을 때 생성되는 경로가 사이트에서 사용하는 경로와 다를 수 있으므로 게시 전 확인하는 것이 좋다.


### 6) 표

표는 `|` 기호를 사용하여 작성할 수 있다. Obsidian에서는 표를 직접 편집할 수도 있으므로 복잡한 표는 편집 기능을 이용하는 것이 편리하다.

예시는 다음과 같다.

| 항목 | 설명 | 상태 |
| --- | --- | --- |
| 프로그램 | Shorts Player | 완료 |
| 문서 | 사용 설명서 | 작성 중 |

표는 프로그램의 기능 비교, 실험 조건 및 결과 등을 정리할 때 유용하다.


### 7) 코드

짧은 명령어나 파일명, 코드 등을 문장 안에서 표시할 때는 백틱(``'``)으로 감싼다.
(백틱은 키보드의 ESC 키 바로 밑에 있는 키이다. 엔터키 왼쪽의 작은 따옴표(')가 아니다.)

예를 들어 `Ctrl + S`, `content`, `index.md`와 같이 표시할 수 있다.

여러 줄의 코드를 표시하려면 코드의 앞뒤를 백틱 세 개로 감싼다.
(본문에서 보여주려고 하면 이 문단을 코드로 표시해버리기 때문에 제외하였다.)

코드 블록은 프로그램 사용법, 명령어 또는 소스코드 등을 게시물에 포함할 때 유용하다.


## 그림, 동영상 및 코드 삽입의 예시

### 1) 그림 삽입하기

Obsidian에서 그림 삽입은 굉장히 편리하다. 그림파일을 본문의 삽입하고자 하는 위치에 드래그 앤 드롭 하여 바로 삽입할 수 있고, 캡쳐의 경우도 원하는 위치에 커서를 두고 붙여넣기를 하면 그림이 삽입되며 동시에 그림 파일이 자동으로 생성된다. 이 경우 그림 파일의 위치와 이름을 체계적으로 관리하는것이 더 중요하다고 할 수 있겠다.

MD 파일과 이미지 파일이 동일한 폴더에 있고 이미지 파일의 이름이 `제임스웹 이미지.png`인 경우, MD 본문에 아래와 같이 입력하여 이미지를 삽입할 수 있다. 앞서 나온 설명을 반복하자면 `./`는 현재 MD 파일이 위치한 폴더를 의미하며, 파일명에 공백이 있으면 경로를 `< >`로 감싼다. Obsidian에서는 이 Markdown 문법을 편집 화면에서 이미지로 렌더링하여 보여주기 때문에 실제 게시물의 모습을 확인하면서 작성할 수 있다.

```md
![제임스웹 이미지](<./제임스웹 이미지.png>)
```

아래 이미지는 위 내용을 작성하였을 때 보여지는 이미지이다.

![제임스웹 이미지](<./제임스웹 이미지.png>)
*James Webb Space Telescope – Webb’s First Deep Field (SMACS 0723)*  
*Image Credit: NASA, ESA, CSA, STScI*

### 2) 유튜브 업로드된 동영상 삽입하기

유튜브에 업로드된 동영상은 게시물 안에 직접 삽입하여 페이지를 벗어나지 않고 재생할 수 있다. 유튜브 영상의 **공유 → 퍼가기**에서 제공하는 `<iframe>` 코드를 Markdown 본문의 원하는 위치에 입력하면 된다. 일반적인 Markdown 이미지 문법과 달리 동영상 삽입에는 HTML의 `iframe` 태그를 사용한다.

예를 들어 다음과 같은 코드를 MD 파일에 입력하면 해당 위치에 유튜브 플레이어가 표시된다.

```
<iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen>
</iframe>
```

여기서 `VIDEO_ID`에는 삽입하려는 유튜브 영상의 고유 ID를 입력한다. 예를 들어 영상 주소가 아래와 같다면,

```
https://www.youtube.com/watch?v=kpTIeRqItoM
```

영상 ID는 `kpTIeRqItoM`이며 다음과 같이 사용할 수 있다. 아래 코드는 설명을 위해 코드 블록 안에 작성했기 때문에 코드 자체가 표시되며, 실제 MD 본문에 코드 블록 없이 입력하면 유튜브 영상으로 표시된다.

```
<iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/kpTIeRqItoM"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Obsidian에서 위 `<iframe>` 코드를 Markdown 본문에 직접 입력하면 아래와 같이 동영상 플레이어로 표시된다.

<iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/kpTIeRqItoM"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen>
</iframe>

특정 시점부터 재생하고 싶은 경우에는 영상 주소 뒤에 `?start=초`를 추가할 수 있다. 예를 들어 27초부터 시작하려면 다음과 같이 작성한다.

```
https://www.youtube.com/embed/kpTIeRqItoM?start=27
```

이미지를 삽입하는 방식과 유사하게 동영상을 직접 삽입하는 것도 가능하지만, 이미지와 달리 동영상은 용량이 크기 때문에 웹사이트 운영에 활용하는 것은 권장되지 않는다.

### 3) 코드 삽입하기

MD에서는 백틱(`` ` ``) 3개로 코드를 감싸 **코드 블록**을 만들 수 있다. 시작하는 백틱 3개 바로 뒤에 프로그래밍 언어나 셸의 종류를 지정하면 해당 언어에 맞는 **문법 강조(Syntax Highlighting)**가 적용된다. 현재 사이트에서는 지정한 언어의 이름도 코드 블록 우측 상단에 표시된다.

예를 들어 Python 코드는 다음과 같이 작성한다.

````
```python
message = "Hello, World!"
print(message)
```
````

실제 게시물에서는 다음과 같이 표시된다.

```
message = "Hello, World!"
print(message)
```

같은 방법으로 다양한 언어와 명령줄 코드를 표현할 수 있다.

코드 블록은 누군가가 자신의 코드를 복사해가서 쓸 수 있도록 하는 용도로 사용하기에 좋다. 우측 상단을 보면 복사하기 버튼이 있어, 복사를 위해 코드 전체를 드래그 할 필요가 없기 때문이다.

#### 자주 사용하는 코드 블록

프로그래밍 언어별로 코드 블록을 생성하는 코드와 그 예시를 순차적으로 나열하였다.
**지원되지 않는 언어 식별자**를 넣으면, 현재 Astro/Shiki 설정에 따라 빌드 과정에서 `drleeworks`라는 언어를 인식하지 못해 오류가 발생하거나 정상적인 syntax highlighting을 적용하지 못할 수 있으므로 임의의 표시명을 적는 용도로 사용하면 안 된다.

**Python**

````
```python
import numpy as np

x = np.array([1, 2, 3])
print(x.mean())
```
````

```python
import numpy as np

x = np.array([1, 2, 3])
print(x.mean())
```

**PowerShell**

````
```powershell
npm run build
git status
```
````

```powershell
npm run build
git status
```

**JavaScript**

````
```javascript
const message = "Hello, World!";
console.log(message);
```
````

```javascript
const message = "Hello, World!";
console.log(message);
```

**TypeScript**

````
```typescript
const releaseChannel: string = "github-releases";
```
````

```typescript
const releaseChannel: string = "github-releases";
```

**HTML**

````
```html
<h1>DrLeeWorks</h1>
<p>Hello, World!</p>
```
````

```html
<h1>DrLeeWorks</h1>
<p>Hello, World!</p>
```

**CSS**

````
```css
.post-content {
  max-width: 800px;
}
```
````

```css
.post-content {
  max-width: 800px;
}
```

**JSON**

````
```json
{
  "name": "DrLeeWorks",
  "version": "1.0.0"
}
```
````

```json
{
  "name": "DrLeeWorks",
  "version": "1.0.0"
}
```

**Bash / Shell**

````
```bash
npm install
npm run build
```
````

```bash
npm install
npm run build
```

언어를 특별히 지정하지 않고 단순한 텍스트나 명령을 코드 블록으로 표시하려면 백틱 뒤에 언어 이름을 생략할 수도 있다.

````
```
이 내용은 일반 코드 블록으로 표시됩니다.
```
````
