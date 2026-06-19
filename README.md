# Dinner Wheel / 今晚吃什么？五人饭局转盘

A lightweight, mobile-friendly dinner decision web app for a group of five friends in Singapore.
一个轻量级、适合手机打开的五人饭局选择网页，用来解决“今晚到底吃什么”的问题。

The app lets each person spin once, nominate one restaurant, and then the host runs a final group spin based on everyone’s results.
每个人都可以完成一次个人转盘，提名一家餐厅；主持人收集五个人的结果后，再进行最终转盘决定今晚吃哪家。

---

## Live Demo / 在线访问

If deployed with GitHub Pages, the live site will usually be available at:

```text
https://your-github-username.github.io/your-repository-name/
```

如果使用 GitHub Pages 发布，网页地址通常是：

```text
https://你的GitHub用户名.github.io/你的仓库名/
```

For this project, the expected format is:

```text
https://marshal-lee9910.github.io/Dinner-wheel/
```

---

## Project Overview / 项目简介

**Dinner Wheel / 今晚吃什么？五人饭局转盘** is designed for a five-person dinner group:

**Friends / 参与成员：**

* Simin
* Ziyin
* Hongyan
* Eric
* Dawn

The default restaurant pool focuses on central Singapore areas, especially:

默认餐厅池主要覆盖新加坡中部区域，尤其是：

* Bugis
* Chinatown
* City Hall
* Outram Park
* Jalan Besar
* Nicoll Highway / Beach Road area

Food categories include:

餐厅类型包括：

* Chinese food / 中餐
* Zi char / 炒菜
* Fish head steamboat / 鱼头炉
* Coconut chicken hotpot / 椰子鸡
* Thai food / 泰国菜
* Vietnamese food / 越南菜
* Dim sum / 点心
* Noodles and dumplings / 面条和饺子

The default budget is set to **S$50 per person**.
默认预算为 **人均 S$50**。

---

## Features / 功能亮点

### 1. Personal Spin / 每人一转

Each friend selects their name and mood, then spins once to get a personal restaurant result.

每个人先选择自己的名字和今晚口味，然后完成一次个人转盘，得到自己的餐厅提名。

Available mood options include:

当前口味选项包括：

* 清淡一点
* 想喝汤 / 粥
* 面条 / 饺子
* 粤菜 / 点心
* 中餐 / 炒菜
* 椰子鸡 / 汤锅
* 泰国菜
* 越南菜
* 离 MRT 近
* 随便都可以

---

### 2. 30 Default Restaurants / 30 家默认候选餐厅

The app includes a curated default restaurant pool of 30 restaurants around Bugis and Chinatown.

网页内置 30 家默认候选餐厅，主要集中在 Bugis 和 Chinatown 附近。

Each restaurant contains:

每家餐厅包含以下字段：

```javascript
{
  id: "unique-restaurant-id",
  name: "Full restaurant name / 餐厅完整名称",
  wheelName: "Short wheel display name / 转盘短名称",
  area: "Area / 区域",
  mrt: "Nearest MRT / 最近地铁站",
  cost: 38,
  tags: ["中餐 / 炒菜", "离 MRT 近", "Bugis"],
  dishes: "Recommended dishes / 推荐菜",
  weight: 20
}
```

---

### 3. Weighted Random Logic / 加权随机逻辑

The spin result is not completely random. It uses weighted random selection.

转盘不是完全随机，而是使用加权随机逻辑。

The app increases or decreases a restaurant’s probability based on:

网页会根据以下因素调整餐厅被抽中的概率：

* Whether the restaurant is within the budget / 是否在预算内
* Whether the restaurant is affordable / 是否相对便宜
* Whether the restaurant is in Bugis or Chinatown / 是否位于 Bugis 或 Chinatown
* Whether the restaurant matches the selected mood / 是否符合所选口味
* Whether the restaurant is near MRT / 是否靠近地铁
* Base weight of each restaurant / 餐厅基础权重

---

### 4. 8-Slot Personal Wheel / 个人转盘显示 8 格

Although the app has 30 default restaurants, the personal wheel displays only 8 restaurant slots at a time.

虽然餐厅池有 30 家，但个人转盘每次只显示 8 格。

The actual winner is still selected from the full restaurant pool.
实际抽选仍然基于完整的 30 家餐厅池。

This keeps the wheel readable on mobile screens.
这样可以保证手机屏幕上的转盘文字不会太挤。

---

### 5. Chinese Wheel Labels / 中文转盘名称

Each restaurant can have a short Chinese display name through the `wheelName` field.

每家餐厅可以通过 `wheelName` 字段设置中文短名称，用于转盘展示。

Example / 示例：

```javascript
{
  name: "椰语四季 Seasons Coconut Chicken",
  wheelName: "椰语四季"
}
```

This makes the wheel easier to read during the spin.
这样转盘显示会更清晰，不会出现太长的英文餐厅名。

---

### 6. Host Mode / 主持汇总模式

After each friend gets a result, they can copy a result link or result code and send it to the host.

每个人完成个人转盘后，可以复制结果链接或结果码发给主人。

The host opens the links or manually pastes the result codes. The app then collects all five results.

主持人依次打开结果链接，或手动粘贴结果码，网页会自动汇总五个人的结果。

---

### 7. Final Group Spin / 最终一转

Once all five results are collected, the host can run the final group spin.

当五个人的结果都收齐后，主持人可以进行最终一转。

The final wheel uses the five nominated restaurants as the final candidate pool.

最终转盘只基于五个人各自提名的餐厅进行抽选。

This keeps everyone involved and avoids one person deciding for the whole group.

这样每个人都有参与感，也避免由一个人单方面决定。

---

### 8. Local Storage / 本地存储

Host results are saved in `localStorage`.

主持人收集到的结果会保存在浏览器的 `localStorage` 中。

This means refreshing the page will not immediately erase collected results.

这意味着刷新页面后，已收集的结果通常不会立即丢失。

The host can also click the reset button to clear the current round.

主持人也可以点击“清空”按钮重置当前汇总。

---

## Game Flow / 游戏流程

### English

1. Each person opens the page.
2. Select your name.
3. Select your dinner mood.
4. Spin once.
5. Copy your result link or result code.
6. Send the result to the host.
7. The host collects all five results.
8. The host runs the final group spin.
9. The final restaurant is displayed with area, MRT, estimated cost, and recommended dishes.

### 中文

1. 每个人打开网页。
2. 选择自己的名字。
3. 选择今晚想吃的口味。
4. 完成一次个人转盘。
5. 复制结果链接或结果码。
6. 把结果发给主人。
7. 主持人收集五个人的结果。
8. 主持人进行最终一转。
9. 网页显示最终餐厅、区域、最近 MRT、人均预算和推荐菜。

---

## File Structure / 文件结构

```text
Dinner-wheel/
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Main page structure.

网页主结构文件，包含：

* Header / 页面标题
* Participant mode / 个人选择模式
* Host mode / 主持汇总模式
* Personal result section / 个人结果区
* Final result section / 最终结果区
* Canvas elements for wheels / 转盘 Canvas

### `style.css`

Visual styling file.

页面视觉样式文件，控制：

* Mobile layout / 手机端布局
* Buttons / 按钮
* Mood grid / 口味选项布局
* Restaurant list / 餐厅列表
* Wheel layout / 转盘区域
* Result cards / 结果卡片
* Toast messages / 提示消息
* Confetti animation / 彩纸动画

### `script.js`

Main app logic.

网页核心逻辑文件，包含：

* Friend list / 朋友名单
* Mood list / 口味列表
* Restaurant data / 餐厅数据
* Weighted random selection / 加权随机
* Personal spin / 个人转盘
* Result encoding and decoding / 结果码生成与解析
* Host result collection / 主持人汇总
* Final spin / 最终转盘
* Canvas wheel drawing / Canvas 转盘绘制
* Copy-to-clipboard / 一键复制

---

## How to Use Locally / 本地使用方法

### English

1. Download the project files.
2. Make sure these three files are in the same folder:

```text
index.html
style.css
script.js
```

3. Double-click `index.html`.
4. The app will open in your browser.

### 中文

1. 下载项目文件。
2. 确保以下三个文件放在同一个文件夹里：

```text
index.html
style.css
script.js
```

3. 双击打开 `index.html`。
4. 网页会在浏览器中运行。

No backend or build tool is required.
不需要后端，也不需要构建工具。

---

## How to Deploy with GitHub Pages / 如何用 GitHub Pages 发布

### English

1. Create a GitHub repository.
2. Upload these files to the repository root:

```text
index.html
style.css
script.js
README.md
```

3. Go to **Settings**.
4. Go to **Pages**.
5. Set source to **Deploy from a branch**.
6. Select branch: `main`.
7. Select folder: `/root`.
8. Save.
9. Wait a few minutes.
10. Open the GitHub Pages URL.

### 中文

1. 创建一个 GitHub 仓库。
2. 把以下文件上传到仓库最外层：

```text
index.html
style.css
script.js
README.md
```

3. 进入 **Settings**。
4. 找到 **Pages**。
5. Source 选择 **Deploy from a branch**。
6. Branch 选择 `main`。
7. Folder 选择 `/root`。
8. 保存。
9. 等待几分钟。
10. 打开 GitHub Pages 提供的网址。

---

## Cache Busting / 缓存处理

The project uses version query strings to avoid browser cache issues.

项目使用版本号参数来避免浏览器缓存旧文件。

Example:

```html
<link rel="stylesheet" href="style.css?v=11">
<script src="script.js?v=11"></script>
```

When updating `style.css` or `script.js`, increase the version number.

当你更新 `style.css` 或 `script.js` 后，可以把版本号提高。

Example:

```html
<link rel="stylesheet" href="style.css?v=12">
<script src="script.js?v=12"></script>
```

Then commit and refresh the page.

然后提交代码并刷新网页。

If the page still looks old, use:

如果页面仍然没有变化，可以使用：

```text
Ctrl + F5
```

or open the site with a new query string:

或者在网址后面加新的参数：

```text
https://your-site-url/?v=12
```

---

## How to Customize Restaurants / 如何修改餐厅池

Restaurants are stored in the `restaurants` array inside `script.js`.

餐厅数据保存在 `script.js` 文件里的 `restaurants` 数组中。

To add a new restaurant, add a new object:

如果要新增餐厅，可以添加一个新的 object：

```javascript
{
  id:"new-restaurant-id",
  name:"餐厅完整名称 Full Restaurant Name",
  wheelName:"转盘短名",
  area:"Bugis / Chinatown",
  mrt:"Nearest MRT",
  cost:35,
  tags:["中餐 / 炒菜","离 MRT 近","Bugis"],
  dishes:"推荐菜 1、推荐菜 2、推荐菜 3",
  weight:18
}
```

### Field Explanation / 字段说明

| Field       | Meaning                   | 中文说明      |
| ----------- | ------------------------- | --------- |
| `id`        | Unique restaurant ID      | 餐厅唯一 ID   |
| `name`      | Full restaurant name      | 餐厅完整名称    |
| `wheelName` | Short name shown on wheel | 转盘上显示的短名称 |
| `area`      | Location area             | 餐厅区域      |
| `mrt`       | Nearest MRT station       | 最近地铁站     |
| `cost`      | Estimated cost per person | 预计人均消费    |
| `tags`      | Matching rules for moods  | 用于匹配口味的标签 |
| `dishes`    | Recommended dishes        | 推荐菜       |
| `weight`    | Base selection weight     | 基础抽中权重    |

---

## How to Customize Friends / 如何修改朋友名单

The friend list is defined at the top of `script.js`.

朋友名单在 `script.js` 顶部定义：

```javascript
const FRIENDS=["Simin","Ziyin","Hongyan","Eric","Dawn"];
```

To change the group members, edit this array.

如果要修改参与人员，直接改这个数组即可。

Example:

```javascript
const FRIENDS=["Alice","Bob","Charlie","David","Eve"];
```

If the number of friends changes, some final collection logic may also need adjustment.

如果人数不再是五个人，最终汇总逻辑也可能需要一起调整。

---

## How to Customize Moods / 如何修改口味选项

Mood options are defined in `script.js`.

口味选项在 `script.js` 中定义：

```javascript
const MOODS=[
 "清淡一点",
 "想喝汤 / 粥",
 "面条 / 饺子",
 "粤菜 / 点心",
 "中餐 / 炒菜",
 "椰子鸡 / 汤锅",
 "泰国菜",
 "越南菜",
 "离 MRT 近",
 "随便都可以"
];
```

To add a new mood, add it to the array and make sure restaurant tags use the same text.

如果要新增口味，需要把它加入数组，并确保餐厅 `tags` 里也使用同样的文字。

Example:

```javascript
"烧烤 / 烤肉"
```

Then add this tag to relevant restaurants:

```javascript
tags:["烧烤 / 烤肉","离 MRT 近","Bugis"]
```

---

## Weighted Selection Logic / 加权规则

The app calculates adjusted weights before each personal spin.

每次个人转盘前，网页会重新计算餐厅权重。

Current logic includes:

当前逻辑包括：

* If the restaurant is within budget, it gets extra weight.
* If the estimated cost is S$30 or below, it gets extra weight.
* If the restaurant is in Bugis or Chinatown, it gets extra weight.
* If the restaurant matches the selected mood, it gets extra weight.
* If the user selects “离 MRT 近”, MRT-friendly restaurants get extra weight.
* If the user selects “随便都可以”, a small random bonus is added.

中文说明：

* 餐厅在人均预算内，会增加权重。
* 人均 S$30 或以下，会增加额外权重。
* 餐厅位于 Bugis 或 Chinatown，会增加权重。
* 餐厅标签符合所选口味，会增加权重。
* 如果选择“离 MRT 近”，靠近地铁的餐厅会增加权重。
* 如果选择“随便都可以”，会增加一点随机加成。

---

## Personal Spin vs Final Spin / 个人转盘与最终转盘

### Personal Spin / 个人转盘

* Uses the full 30-restaurant pool.
* Displays 8 wheel slots for readability.
* Saves one result for each friend.

中文：

* 使用完整 30 家餐厅池。
* 为了可读性，转盘只显示 8 格。
* 每个人生成一个提名结果。

### Final Spin / 最终转盘

* Uses only the five collected nominations.
* Each friend contributes one restaurant.
* The final result is selected from these five restaurants.

中文：

* 只使用五个人的提名结果。
* 每个人贡献一家餐厅。
* 最终结果从这五家里抽选。

---

## Browser Support / 浏览器支持

This project uses standard frontend technologies:

本项目使用标准前端技术：

* HTML
* CSS
* Vanilla JavaScript
* Canvas API
* LocalStorage
* Clipboard API

Recommended browsers:

推荐浏览器：

* Chrome
* Edge
* Safari
* Firefox

Mobile browsers are supported.

支持手机浏览器打开。

---

## Notes / 注意事项

* Estimated cost is for internal game logic only and may not reflect actual restaurant pricing.
* Restaurant opening hours and availability are not checked automatically.
* Users should confirm opening hours, queue situation, and booking requirements before going.
* The app does not use a backend.
* The app does not send personal data to a server.
* Results are stored locally in the browser.

中文：

* 人均价格只是网页内部逻辑估算，不代表实际价格。
* 网页不会自动检查营业时间或是否需要订位。
* 出发前建议自行确认营业时间、排队情况和订位要求。
* 本项目没有后端。
* 本项目不会把个人数据发送到服务器。
* 汇总结果主要保存在浏览器本地。

---

## Future Improvement Ideas / 后续可改进方向

Possible future improvements:

后续可以考虑增加：

* Add restaurant editing UI / 新增餐厅编辑界面
* Add delete or disable restaurant option / 增加删除或停用餐厅功能
* Add Google Maps link / 增加 Google Maps 链接
* Add opening hours reminder / 增加营业时间提醒
* Add reservation role assignment / 增加订位负责人分配
* Add WhatsApp message generator / 增加 WhatsApp 消息生成
* Add QR code sharing / 增加二维码分享
* Add multi-language switch / 增加中英文切换
* Add group size customization / 支持不同人数饭局

---

## License / 许可

This is a personal fun project for dinner decision-making.

这是一个用于朋友聚餐决策的个人趣味项目。

You may customize it for your own dinner group.

你可以根据自己的饭局需求自由修改。
