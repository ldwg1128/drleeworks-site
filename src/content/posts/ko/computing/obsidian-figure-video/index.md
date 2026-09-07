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

Obsidian 실행 → `content` Vault 열기 → 왼쪽에서 `.md` 선택 → 글 작성 → 끝

여기서 Vault(볼트)는 Obsidian이 관리하는 하나의 최상위 폴더를 의미한다. 최상위 폴더를 연 후에는 직관적으로 원하는 문서를 선택하고 작성할 수 있다. 작성된 글은 Ctrl + S (VS Code와 동일)를 눌러 저장할수도 있지만 기본적으로 자동 저장이기 때문에 별도로 저장 버튼을 누를 필요가 없다.

## 그림 삽입하기

Obsidian에서 그림 삽입은 굉장히 편리하다. 그림파일을 본문의 삽입하고자 하는 위치에 드래그 앤 드롭 하여 바로 삽입할 수 있고, 캡쳐의 경우도 원하는 위치에 커서를 두고 붙여넣기를 하면 그림이 삽입되며 그림 파일이 자동으로 생성된다. 이 경우 그림 파일의 위치와 이름을 체계적으로 관리하는것이 더 중요하다고 할 수 있겠다.

![[제임스웹 이미지.png|442]]

MD 파일과 이미지 파일이 동일한 폴더에 있고 이미지 파일의 이름이 `제임스웹 이미지.PNG`인 경우, MD 본문에 아래와 같이 입력하여 이미지를 삽입할 수 있다. `./`는 현재 MD 파일이 위치한 폴더를 의미한다. Obsidian에서는 이 Markdown 문법을 편집 화면에서 이미지로 렌더링하여 보여주기 때문에 실제 게시물의 모습을 확인하면서 작성할 수 있다.

```md
![제임스웹 이미지](./제임스웹 이미지.PNG)
```


## 유튜브 업로드된 동영상 삽입하기

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

## 코드 삽입하기

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
