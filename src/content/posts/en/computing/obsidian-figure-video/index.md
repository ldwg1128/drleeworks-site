---
title: Editing Markdown Documents with Obsidian
slug: obsidian-figure-video
translationKey: obsidian-figure-video
lang: en
published: 2026-09-07
category: Computing
tags:
  - Astro
  - Maintenance
author: DrLeeWorks
summary: How to edit Markdown documents in Obsidian and add images and YouTube videos.
recommended: true
draft: false
---

I currently build most of my software and websites using VS Code with Codex. However, writing Markdown (MD) documents in VS Code can be rather inconvenient, and there is also the risk of accidentally changing other code. Using a separate application for writing can therefore be a good idea.

Obsidian is a widely used, free application for editing Markdown documents.
https://obsidian.md/download

## Getting Started with Markdown Editing

When you first install Obsidian, its workflow can be confusing because it differs from a typical word processor. Double-clicking a document does not simply open it. Instead, use the option at the bottom left to open the folder containing the MD files you want to edit. This is similar to opening a folder in VS Code before starting work.

The basic workflow is:

> Launch Obsidian → Open the `content` vault → Select a `.md` file on the left → Write → Done

A vault is a top-level folder managed by Obsidian. Once you open it, you can select and edit the documents you need. You can press Ctrl + S to save, just as in VS Code, but Obsidian saves automatically by default, so there is no need to press a separate save button.

## Essential Markdown Syntax

Here are some common Markdown basics with simple examples. These are enough for most everyday writing and editing.

### 1) Headings and Subheadings

Place `#` before a line to make it a heading or subheading. More `#` characters indicate a lower heading level.

For example, write `# Largest Heading`, `## Large Heading`, `### Medium Heading`, or `#### Small Heading`.

They appear as follows:

# Largest Heading

## Large Heading

### Medium Heading

#### Small Heading

For ordinary articles, you will mostly use `##` and `###`. Leave a space between the `#` characters and the heading text.

### 2) Emphasis

Use `**` or `*` to emphasize part of a sentence.
For example, write `**bold text**`, `*italic text*`, or `~~strikethrough~~`.
They appear as follows:

> **bold text**     *italic text*      ~~strikethrough~~

In everyday writing, `**bold text**` is a convenient way to emphasize important information.

### 3) Lists

Place `-` before each item to create a list. Leave a space after the hyphen.

For example, write `- First item`, `- Second item`, and `- Third item`.

They appear as follows:

- First item
- Second item
- Third item

If the order matters, use numbers such as `1.`, `2.`, and `3.`.

1. First step
2. Second step
3. Third step

### 4) Links

Use `[display text](URL)` to link to another web page.
For example, `[GitHub](https://github.com)` creates a clickable [GitHub](https://github.com) link.

### 5) Images

Insert images using `![image description](image path)`.
Save images for the site in the designated image folder and enter the path to the file.

For example, write `![Application screen](./images/example.png)`.

`./` refers to the folder containing the current MD file. In this example, a file named example.png must be inside an images subfolder relative to that document.

If the filename contains spaces, enclose the path in `< >`.

Paths generated when pasting images into Obsidian may differ from those used by the site, so check them before publishing.

### 6) Tables

Use the `|` character to create tables. Obsidian also lets you edit tables directly, which is convenient for more complex tables.

For example:

| Item | Description | Status |
| --- | --- | --- |
| Software | Shorts Player | Complete |
| Documentation | User guide | In progress |

Tables are useful for comparing software features or organizing experimental conditions and results.

### 7) Code

Enclose short commands, filenames, or code in backticks (`` ` ``) to display them within a sentence.
(On a typical keyboard, the backtick key is directly below Esc. It is not the apostrophe next to Enter.)

For example, you can write `Ctrl + S`, `content`, or `index.md`.

To display multiple lines of code, place three backticks before and after the code.
(The actual markers are omitted here because they would turn this paragraph into a code block.)

Code blocks are useful for including software instructions, commands, or source code in an article.

## Examples of Adding Images, Videos, and Code

### 1) Adding Images

Adding images in Obsidian is very convenient. Drag and drop an image file into the desired position in the document to insert it. You can also place the cursor where you want a screenshot and paste it; Obsidian inserts the image and automatically creates the image file. This makes it especially important to keep image filenames and locations organized.

If the MD file and image are in the same folder and the image is named `제임스웹 이미지.png`, you can insert it with the following Markdown. As explained earlier, `./` refers to the folder containing the current MD file, and paths containing spaces should be enclosed in `< >`. Obsidian renders this Markdown as an image in the editor, so you can write while seeing how the article will look.

```md
![James Webb image](<./제임스웹 이미지.png>)
```

The image below shows the result. This English article references the same image file in the Korean article's folder.

![James Webb image](<../../../ko/computing/obsidian-figure-video/제임스웹 이미지.png>)
*James Webb Space Telescope – Webb’s First Deep Field (SMACS 0723)*  
*Image Credit: NASA, ESA, CSA, STScI*

### 2) Embedding YouTube Videos

You can embed a YouTube video directly in an article so that visitors can watch it without leaving the page. Paste the `<iframe>` code provided under **Share → Embed** on YouTube into the desired position in the Markdown body. Unlike Markdown image syntax, video embedding uses the HTML `iframe` tag.

For example, the following code places a YouTube player in the document:

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

Replace `VIDEO_ID` with the unique ID of the YouTube video you want to embed. For example, if the video URL is:

```
https://www.youtube.com/watch?v=kpTIeRqItoM
```

The video ID is `kpTIeRqItoM`, which you can use as shown below. This example is inside a code block so that the code itself is visible. Paste it directly into the MD body without a code block to display the video instead.

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

Entering the `<iframe>` code directly into the Markdown body in Obsidian displays a video player like the one below.

<iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/kpTIeRqItoM"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen>
</iframe>

To start playback at a specific time, append `?start=seconds` to the video URL. For example, to start at 27 seconds, use:

```
https://www.youtube.com/embed/kpTIeRqItoM?start=27
```

You can also embed video files directly, much as you would images. However, video files are large, so this is not recommended for running the website.

### 3) Adding Code

In Markdown, enclose code in three backticks (`` ` ``) to create a **code block**. Specify a programming language or shell immediately after the opening three backticks to apply **syntax highlighting** for that language. This site also displays the specified language name in the upper-right corner of the code block.

For example, write Python code as follows:

````
```python
message = "Hello, World!"
print(message)
```
````

It appears in the article as follows:

```
message = "Hello, World!"
print(message)
```

You can use the same approach for various programming languages and command-line examples.

Code blocks are useful for sharing code that readers can copy and use. The copy button in the upper-right corner means they do not need to select the entire block manually.

#### Common Code Blocks

Below are the Markdown source and rendered example for each programming language.
Do not use an arbitrary display name as the language identifier. An **unsupported language identifier**, such as `drleeworks`, may cause a build error or prevent proper syntax highlighting, depending on the current Astro/Shiki configuration.

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

To display plain text or commands without specifying a language, simply omit the language name after the opening backticks.

````
```
This text appears in a plain code block.
```
````
