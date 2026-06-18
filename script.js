"use strict";

const FRIENDS=["Simin","Ziyin","Hongyan","Eric","Dawn"];

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

const HOST_KEY="light-dinner-host-results-v4";

const COLORS=[
 "#dcebd9",
 "#f5dfa0",
 "#f4b49f",
 "#cbdde5",
 "#f1e5c4",
 "#d9e6d2",
 "#ead7d1",
 "#d6e2f0"
];

const restaurants=[
 {
  id:"chin-chin",
  name:"津津餐室 Chin Chin Eating House",
  wheelName:"津津餐室",
  area:"Purvis Street / Bugis-City Hall",
  mrt:"Bugis / City Hall",
  cost:25,
  tags:["清淡一点","中餐 / 炒菜","离 MRT 近","Bugis"],
  dishes:"海南鸡、杂菜、豆腐、猪扒、清汤",
  weight:19
 },
 {
  id:"bugis-fish-head-steamboat",
  name:"武吉士鱼头炉 Bugis Fish Head Steamboat",
  wheelName:"武吉士鱼头炉",
  area:"Kelantan Lane / Bugis",
  mrt:"Jalan Besar / Bugis",
  cost:28,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"鱼头炉、蒙古排骨、炒青菜、豆腐",
  weight:21
 },
 {
  id:"nan-hwa-chong-fish-head",
  name:"南华昌鱼头炉 Nan Hwa Chong Fish Head Steamboat",
  wheelName:"南华昌鱼头炉",
  area:"North Bridge Road / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:35,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"鱼头炉、虾酱鸡、炒菜、豆腐",
  weight:17
 },
 {
  id:"fat-bird-bugis",
  name:"胖胖鸡 Fat Bird Chicken Hotpot",
  wheelName:"胖胖鸡",
  area:"Liang Seah Street / Bugis",
  mrt:"Bugis",
  cost:32,
  tags:["中餐 / 炒菜","椰子鸡 / 汤锅","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"鸡公煲、麻辣鸡煲、姜蓉鸡煲、蔬菜和豆腐",
  weight:21
 },
 {
  id:"ai-shang-fish-hotpot",
  name:"爱尚鱼捞 Ai Shang Fish Hotpot",
  wheelName:"爱尚鱼捞",
  area:"Liang Seah Street / Bugis",
  mrt:"Bugis",
  cost:38,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"鱼火锅、酸菜鱼汤底、手工丸类、时蔬",
  weight:18
 },
 {
  id:"seasons-coconut-chicken-bugis",
  name:"椰语四季 Seasons Coconut Chicken",
  wheelName:"椰语四季",
  area:"Bugis",
  mrt:"Bugis",
  cost:38,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近","Bugis"],
  dishes:"椰子鸡火锅、竹笙鸡汤、时蔬、豆腐",
  weight:22
 },
 {
  id:"three-coconuts-guoco-midtown",
  name:"三个椰子 3-Coconut Guoco Midtown",
  wheelName:"三个椰子",
  area:"Guoco Midtown / Bugis",
  mrt:"Bugis",
  cost:42,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近","Bugis"],
  dishes:"现砍椰子鸡、椰子汤底、蔬菜拼盘、菌菇",
  weight:20
 },
 {
  id:"chong-qing-grilled-fish-bugis",
  name:"重庆烤鱼 Chong Qing Grilled Fish",
  wheelName:"重庆烤鱼",
  area:"Liang Seah Street / Bugis",
  mrt:"Bugis",
  cost:42,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"重庆烤鱼、酸菜汤底、麻辣汤底、蔬菜配菜",
  weight:16
 },
 {
  id:"chef-china-bugis",
  name:"华厨 Chef China",
  wheelName:"华厨",
  area:"Bugis / Beach Road",
  mrt:"Bugis",
  cost:40,
  tags:["中餐 / 炒菜","离 MRT 近","Bugis"],
  dishes:"川湘小炒、辣子鸡、酸菜鱼、干锅菜",
  weight:16
 },
 {
  id:"shu-yan-sichuan-bugis",
  name:"蜀宴 Sichuan Cuisine",
  wheelName:"蜀宴",
  area:"Bugis / Liang Seah",
  mrt:"Bugis",
  cost:38,
  tags:["中餐 / 炒菜","离 MRT 近","Bugis"],
  dishes:"水煮鱼、辣子鸡、干锅、川味小炒",
  weight:15
 },
 {
  id:"ah-loy-thai-bugis",
  name:"阿来泰国菜 Ah Loy Thai",
  wheelName:"阿来泰国菜",
  area:"Tan Quee Lan Street / Bugis",
  mrt:"Bugis",
  cost:28,
  tags:["泰国菜","离 MRT 近","Bugis"],
  dishes:"Tom Yum、Pandan Chicken、Garlic Pork、Green Curry、Kang Kong",
  weight:20
 },
 {
  id:"sawadee-thai-bugis",
  name:"Sawadee 泰国菜 Sawadee Thai Cuisine",
  wheelName:"Sawadee泰国菜",
  area:"Tan Quee Lan Street / Bugis",
  mrt:"Bugis",
  cost:42,
  tags:["泰国菜","离 MRT 近","Bugis"],
  dishes:"Tom Kha Gai、Tom Yum、Thai Fish Cakes、Green Curry、Steamed Sea Bass",
  weight:15
 },
 {
  id:"yhingthai-palace",
  name:"樱泰宫 Yhingthai Palace",
  wheelName:"樱泰宫",
  area:"Purvis Street / Bugis-City Hall",
  mrt:"Bugis / City Hall",
  cost:45,
  tags:["泰国菜","离 MRT 近","Bugis"],
  dishes:"Pomelo Salad、Green Curry、Pad Thai、Tom Yum、Thai-Chinese dishes",
  weight:13
 },
 {
  id:"bumbu-bugis",
  name:"Bumbu Restaurant",
  wheelName:"Bumbu",
  area:"Kandahar Street / Bugis",
  mrt:"Bugis",
  cost:35,
  tags:["泰国菜","清淡一点","离 MRT 近","Bugis"],
  dishes:"Thai-style seafood、tahu telor、green curry、shared dishes",
  weight:14
 },
 {
  id:"co-hai-banh-mi",
  name:"Co Hai 越南粉 Co Hai Banh Mi & Pho",
  wheelName:"Co Hai越南粉",
  area:"Beach Road / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:22,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近","Bugis"],
  dishes:"Banh Mi、Pho、烤鸡檬粉、越南春卷、越南咖啡",
  weight:19
 },
 {
  id:"two-beo-vietnamese",
  name:"2 Béo 越南菜 2 Béo Vietnamese Restaurant",
  wheelName:"2 Béo越南菜",
  area:"Bussorah Street / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:24,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近","Bugis"],
  dishes:"Beef Pho、Banh Mi、Grilled Pork Rice、Summer Roll、越南咖啡",
  weight:18
 },
 {
  id:"mrs-pho-beach-road",
  name:"Mrs Pho 越南粉",
  wheelName:"Mrs Pho",
  area:"Beach Road / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:28,
  tags:["越南菜","清淡一点","面条 / 饺子","想喝汤 / 粥","离 MRT 近","Bugis"],
  dishes:"Beef Pho、spring rolls、grilled pork、越南咖啡",
  weight:16
 },
 {
  id:"kampong-glam-cafe",
  name:"Kampong Glam Café",
  wheelName:"甘榜格南咖啡",
  area:"Bussorah Street / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:20,
  tags:["清淡一点","离 MRT 近","Bugis"],
  dishes:"Nasi goreng、mee goreng、soups、local shared dishes",
  weight:12
 },
 {
  id:"yuanqi-yelin-chinatown",
  name:"元气椰林椰子鸡 Coconut Chicken Hot Pot",
  wheelName:"元气椰林",
  area:"Mosque Street / Chinatown",
  mrt:"Chinatown",
  cost:42,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近","Chinatown"],
  dishes:"招牌椰子鸡、竹荪鸡汤、腊味煲仔饭、时蔬",
  weight:22
 },
 {
  id:"kok-sen-chinatown",
  name:"国成餐室 Kok Sen Restaurant",
  wheelName:"国成餐室",
  area:"Keong Saik / Chinatown",
  mrt:"Outram Park / Chinatown",
  cost:42,
  tags:["中餐 / 炒菜","清淡一点","离 MRT 近","Chinatown"],
  dishes:"大虾河粉、砂锅酿豆腐、虾酱鸡、咕噜肉",
  weight:17
 },
 {
  id:"dong-bei-ren-jia",
  name:"东北人家 Dong Bei Ren Jia",
  wheelName:"东北人家",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:32,
  tags:["中餐 / 炒菜","面条 / 饺子","离 MRT 近","Chinatown"],
  dishes:"锅包肉、饺子、地三鲜、孜然羊肉、凉菜",
  weight:19
 },
 {
  id:"yum-cha",
  name:"饮茶酒楼 Yum Cha Restaurant",
  wheelName:"饮茶酒楼",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:32,
  tags:["清淡一点","想喝汤 / 粥","粤菜 / 点心","中餐 / 炒菜","离 MRT 近","Chinatown"],
  dishes:"虾饺、烧卖、蒸排骨、粥、肠粉",
  weight:17
 },
 {
  id:"spring-court-chinatown",
  name:"老字号中餐 Spring Court Restaurant",
  wheelName:"Spring Court",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:45,
  tags:["中餐 / 炒菜","粤菜 / 点心","离 MRT 近","Chinatown"],
  dishes:"薄饼、烧鸡、河粉、豆腐、虾类小菜",
  weight:13
 },
 {
  id:"jing-hua-xiao-chi",
  name:"京华小吃 Jing Hua Xiao Chi",
  wheelName:"京华小吃",
  area:"Neil Road / Chinatown",
  mrt:"Outram Park / Chinatown",
  cost:28,
  tags:["面条 / 饺子","中餐 / 炒菜","清淡一点","离 MRT 近","Chinatown"],
  dishes:"小笼包、锅贴、炸酱面、酸辣汤",
  weight:18
 },
 {
  id:"chinatown-seafood-restaurant",
  name:"牛车水海鲜 Chinatown Seafood Restaurant",
  wheelName:"牛车水海鲜",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:42,
  tags:["中餐 / 炒菜","粤菜 / 点心","离 MRT 近","Chinatown"],
  dishes:"辣椒蟹、黑椒蟹、炒饭、咕噜肉、海鲜小炒",
  weight:12
 },
 {
  id:"hong-kong-street-fish-head",
  name:"香港街鱼头炉 136 Hong Kong Street Fish Head Steamboat",
  wheelName:"香港街鱼头炉",
  area:"South Bridge Road / Chinatown",
  mrt:"Chinatown",
  cost:32,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Chinatown"],
  dishes:"鱼头炉、虾酱鸡、海鲜米粉、砂锅菜",
  weight:18
 },
 {
  id:"zhong-hua-steamboat",
  name:"中华火锅 Zhong Hua Steamboat",
  wheelName:"中华火锅",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:38,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近","Chinatown"],
  dishes:"火锅、海鲜、肉片、蔬菜、丸类",
  weight:14
 },
 {
  id:"old-chengdu-chinatown",
  name:"老成都川菜 Old Chengdu Sichuan Cuisine",
  wheelName:"老成都川菜",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:38,
  tags:["中餐 / 炒菜","离 MRT 近","Chinatown"],
  dishes:"川菜小炒、水煮鱼、辣子鸡、干锅",
  weight:15
 },
 {
  id:"may-pho-culture",
  name:"May Pho 越南粉 May Pho Culture",
  wheelName:"May Pho",
  area:"Fook Hai Building / Chinatown",
  mrt:"Chinatown",
  cost:22,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近","Chinatown"],
  dishes:"Beef Pho、Spring Rolls、Vietnamese Coffee、Bun dishes",
  weight:17
 },
 {
  id:"long-phung-chinatown",
  name:"Long Phung 越南菜 Long Phung Vietnamese Cuisine",
  wheelName:"Long Phung",
  area:"New Bridge Road / Chinatown",
  mrt:"Chinatown",
  cost:24,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近","Chinatown"],
  dishes:"Pho、Bun Thit Nuong、Spring Rolls、越南粉面饭",
  weight:16
 },
 {
  id:"hawker-chan-chinatown",
  name:"了凡油鸡饭 Hawker Chan",
  wheelName:"了凡油鸡饭",
  area:"Smith Street / Chinatown",
  mrt:"Chinatown",
  cost:18,
  tags:["清淡一点","中餐 / 炒菜","面条 / 饺子","离 MRT 近","Chinatown"],
  dishes:"油鸡饭、油鸡面、叉烧、烧肉",
  weight:13
 }
];

const $=s=>document.querySelector(s);
let selectedFriend="",selectedMood="",personalRotation=0,finalRotation=0,spinning=false,currentResult=null,currentShareLink="",hostResults=loadHostResults();

function init(){
 renderFriendPicker();
 renderMoodPicker();
 renderRestaurants();
 renderHostSlots();
 bindEvents();
 updateParticipantUI();
 drawPersonalPreview();
 drawFinalWheel();

 const imported=new URLSearchParams(location.search).get("result");

 if(imported){
  const ok=importResult(imported,true);
  if(ok){
   history.replaceState({},"",location.pathname+"#host");
   showView("host");
   showToast("已自动收下一份朋友结果。");
  }
 }else if(location.hash==="#host"){
  showView("host");
 }
}

function bindEvents(){
 $("#participantTab").addEventListener("click",()=>showView("participant"));
 $("#hostTab").addEventListener("click",()=>showView("host"));

 $("#budgetInput").addEventListener("input",()=>{
  $("#wheelBudget").textContent=`S$${getBudget()}`;
  drawPersonalPreview();
 });

 $("#spinButton").addEventListener("click",spinPersonalWheel);

 $("#copyLinkButton").addEventListener("click",()=>{
  copyText(currentShareLink,"结果链接已复制，发给主人吧。");
 });

 $("#copyCodeButton").addEventListener("click",()=>{
  copyText($("#resultCode").value,"结果码已复制。");
 });

 $("#importCodeButton").addEventListener("click",()=>{
  if(importResult($("#importCode").value)){
   $("#importCode").value="";
   showToast("已加入主持人汇总。");
  }
 });

 $("#resetHostButton").addEventListener("click",()=>{
  if(confirm("清空已经收集的五人结果？")){
   hostResults={};
   saveHostResults();
   renderHostSlots();
   drawFinalWheel();
   $("#finalResult").hidden=true;
   showToast("主持人汇总已清空。");
  }
 });

 $("#finalSpinButton").addEventListener("click",spinFinalWheel);

 window.addEventListener("resize",()=>{
  drawPersonalPreview();
  drawFinalWheel();
 });
}

function showView(mode){
 const host=mode==="host";
 $("#participantView").hidden=host;
 $("#hostView").hidden=!host;
 $("#participantTab").classList.toggle("is-active",!host);
 $("#hostTab").classList.toggle("is-active",host);
 location.hash=host?"host":"participant";

 if(host) drawFinalWheel();
 else drawPersonalPreview();

 window.scrollTo({top:0,behavior:"smooth"});
}

function renderFriendPicker(){
 const el=$("#friendPicker");
 el.innerHTML="";

 FRIENDS.forEach(friend=>{
  const b=document.createElement("button");
  b.type="button";
  b.className="friend-choice";
  b.textContent=friend;

  b.addEventListener("click",()=>{
   selectedFriend=friend;
   renderFriendPicker();
   updateParticipantUI();
  });

  if(friend===selectedFriend) b.classList.add("is-selected");

  el.append(b);
 });
}

function renderMoodPicker(){
 const el=$("#moodPicker");
 el.innerHTML="";

 MOODS.forEach(mood=>{
  const b=document.createElement("button");
  b.type="button";
  b.className="mood-choice";
  b.textContent=mood;

  b.addEventListener("click",()=>{
   selectedMood=mood;
   renderMoodPicker();
   updateParticipantUI();
   drawPersonalPreview();
  });

  if(mood===selectedMood) b.classList.add("is-selected");

  el.append(b);
 });
}

function updateParticipantUI(){
 const btn=$("#spinButton");
 btn.disabled=!selectedFriend||!selectedMood||spinning;

 if(!selectedFriend) btn.textContent="先选择你的名字";
 else if(!selectedMood) btn.textContent="再选择今晚的口味";
 else btn.textContent=`${selectedFriend} 的个人一转`;
}

function getBudget(){
 return Math.max(15,Number($("#budgetInput").value)||50);
}

function calculateWeights(){
 const budget=getBudget();

 return restaurants.map(r=>{
  let weight=r.weight;

  if(r.cost<=budget) weight+=8;
  else weight-=10;

  if(r.cost<=30) weight+=4;

  if(r.tags.includes("Bugis")||r.tags.includes("Chinatown")) weight+=5;

  if(selectedMood&&r.tags.includes(selectedMood)) weight+=12;

  if(selectedMood==="清淡一点") weight+=5;

  if(selectedMood==="离 MRT 近"&&r.tags.includes("离 MRT 近")) weight+=6;

  if(selectedMood==="随便都可以") weight+=Math.random()*4;

  return{
   restaurant:r,
   weight:Math.max(1,weight)
  };
 });
}

function weightedPick(weighted){
 let roll=Math.random()*weighted.reduce((s,x)=>s+x.weight,0);

 for(const item of weighted){
  roll-=item.weight;
  if(roll<=0) return item.restaurant;
 }

 return weighted.at(-1).restaurant;
}

function visualShortlist(winner){
 const ranked=calculateWeights()
  .sort((a,b)=>b.weight-a.weight)
  .map(x=>x.restaurant);

 const list=winner
  ? [winner,...shuffle(ranked.filter(r=>r.id!==winner.id)).slice(0,7)]
  : ranked.slice(0,8);

 return winner?shuffle(list):list;
}

function drawPersonalPreview(){
 drawWheel($("#personalWheel"),visualShortlist(),personalRotation);
}

function spinPersonalWheel(){
 if(spinning||!selectedFriend||!selectedMood) return;

 const weighted=calculateWeights();
 const winner=weightedPick(weighted);
 const items=visualShortlist(winner);
 const index=items.findIndex(r=>r.id===winner.id);

 spinning=true;
 updateParticipantUI();

 $("#spinHint").textContent="正在从 30 家 Bugis / Chinatown 饭店里抽取 8 格个人转盘…";

 animateWheel(
  $("#personalWheel"),
  items,
  index,
  personalRotation,
  r=>personalRotation=r,
  ()=>{
   spinning=false;
   currentResult={
    v:4,
    friend:selectedFriend,
    mood:selectedMood,
    restaurantId:winner.id,
    restaurantName:winner.name,
    wheelName:winner.wheelName||winner.name,
    area:winner.area,
    mrt:winner.mrt,
    cost:winner.cost,
    ts:Date.now()
   };

   showPersonalResult(winner);
   updateParticipantUI();
  }
 );
}

function showPersonalResult(r){
 const code=encodeResult(currentResult);
 const base=location.href.split(/[?#]/)[0];

 currentShareLink=`${base}?result=${encodeURIComponent(code)}#host`;

 $("#personalResultTitle").textContent=`${selectedFriend} 选中了：${r.name}`;

 $("#personalResultMeta").innerHTML=`
  <div><span>口味</span><b>${escapeHtml(selectedMood)}</b></div>
  <div><span>预计人均</span><b>S$${r.cost}</b></div>
  <div><span>区域</span><b>${escapeHtml(r.area)}</b></div>
  <div><span>最近 MRT</span><b>${escapeHtml(r.mrt)}</b></div>
 `;

 $("#resultCode").value=code;
 $("#personalResult").hidden=false;
 $("#spinHint").textContent="这一转完成了，把结果交给主人。";
 $("#personalResult").scrollIntoView({behavior:"smooth",block:"start"});
}

function encodeResult(data){
 const bytes=new TextEncoder().encode(JSON.stringify(data));
 let binary="";

 bytes.forEach(b=>binary+=String.fromCharCode(b));

 return "LDR1."+btoa(binary)
  .replace(/\+/g,"-")
  .replace(/\//g,"_")
  .replace(/=+$/g,"");
}

function decodeResult(input){
 let raw=String(input||"").trim();

 try{
  if(raw.includes("?result=")){
   raw=new URL(raw).searchParams.get("result")||"";
  }

  raw=decodeURIComponent(raw);

  if(!raw.startsWith("LDR1.")) throw new Error();

  let body=raw.slice(5)
   .replace(/-/g,"+")
   .replace(/_/g,"/");

  body+="=".repeat((4-body.length%4)%4);

  const binary=atob(body);
  const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
  const data=JSON.parse(new TextDecoder().decode(bytes));

  if(
   ![1,2,3,4].includes(data.v)||
   !FRIENDS.includes(data.friend)||
   !restaurants.some(r=>r.id===data.restaurantId)
  ){
   throw new Error();
  }

  return data;
 }catch{
  return null;
 }
}

function importResult(input,silent=false){
 const data=decodeResult(input);

 if(!data){
  if(!silent) showToast("这个结果码无法识别，请重新复制。");
  return false;
 }

 hostResults[data.friend]=data;
 saveHostResults();
 renderHostSlots();
 drawFinalWheel();

 return true;
}

function loadHostResults(){
 try{
  return JSON.parse(localStorage.getItem(HOST_KEY))||{};
 }catch{
  return{};
 }
}

function saveHostResults(){
 localStorage.setItem(HOST_KEY,JSON.stringify(hostResults));
}

function renderHostSlots(){
 const el=$("#hostSlots");
 el.innerHTML="";

 FRIENDS.forEach(friend=>{
  const r=hostResults[friend];
  const row=document.createElement("div");

  row.className=`host-slot ${r?"is-filled":""}`;

  row.innerHTML=`
   <strong>${friend}</strong>
   <p>${r?escapeHtml(r.wheelName||r.restaurantName):"等待结果链接"}</p>
   <div>${r?'<button class="remove-result" type="button">移除</button>':'<span class="slot-state">未收到</span>'}</div>
  `;

  if(r){
   row.querySelector("button").addEventListener("click",()=>{
    delete hostResults[friend];
    saveHostResults();
    renderHostSlots();
    drawFinalWheel();
   });
  }

  el.append(row);
 });

 const validCount=getFinalItems().length;

 $("#hostCountBadge").textContent=validCount;
 $("#finalCount").textContent=`${validCount} / 5`;
 $("#finalSpinButton").disabled=validCount<5||spinning;
 $("#finalSpinButton").textContent=validCount<5?"收齐五人后最终一转":"最终一转，今晚就吃它";
 $("#hostHint").textContent=validCount<5?`还差 ${5-validCount} 份结果。`:"五个人都到齐了，可以最终一转。";
}

function getFinalItems(){
 return FRIENDS
  .map(f=>hostResults[f])
  .filter(Boolean)
  .map(x=>restaurants.find(r=>r.id===x.restaurantId))
  .filter(Boolean);
}

function drawFinalWheel(){
 drawWheel($("#finalWheel"),getFinalItems(),finalRotation);
}

function spinFinalWheel(){
 const items=getFinalItems();

 if(items.length<5||spinning) return;

 const index=Math.floor(Math.random()*items.length);
 const winner=items[index];

 spinning=true;
 renderHostSlots();

 $("#hostHint").textContent="正在汇总五个人的提名…";

 animateWheel(
  $("#finalWheel"),
  items,
  index,
  finalRotation,
  r=>finalRotation=r,
  ()=>{
   spinning=false;
   renderHostSlots();
   showFinalResult(winner);
   showConfetti();
  }
 );
}

function showFinalResult(winner){
 const nominators=FRIENDS.filter(f=>hostResults[f]?.restaurantId===winner.id);

 $("#finalResult").innerHTML=`
  <p class="kicker">FINAL DINNER</p>
  <h3>今晚就吃：${escapeHtml(winner.name)}</h3>
  <p><b>提名人：</b>${nominators.join("、")}</p>
  <p><b>区域 / MRT：</b>${escapeHtml(winner.area)} · ${escapeHtml(winner.mrt)}</p>
  <p><b>预计人均：</b>S$${winner.cost}，五人约 S$${winner.cost*5}</p>
  <p><b>推荐菜：</b>${escapeHtml(winner.dishes)}</p>
  <p class="decision">五个人的选择已经汇总，今晚不再纠结。</p>
 `;

 $("#finalResult").hidden=false;
 $("#finalResult").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderRestaurants(){
 $("#restaurantList").innerHTML=restaurants.map(r=>`
  <article class="restaurant-row">
   <div>
    <h3>${escapeHtml(r.name)}</h3>
    <p>${escapeHtml(r.area)} · ${escapeHtml(r.dishes)}</p>
   </div>
   <b>S$${r.cost}</b>
  </article>
 `).join("");
}

function drawWheel(canvas,items,rotation=0){
 const ctx=canvas.getContext("2d");
 const size=canvas.width;
 const c=size/2;
 const r=size*.42;

 ctx.clearRect(0,0,size,size);

 if(!items.length){
  ctx.beginPath();
  ctx.arc(c,c,r,0,Math.PI*2);
  ctx.fillStyle="#f1eee5";
  ctx.fill();
  ctx.strokeStyle="#d9ddd5";
  ctx.lineWidth=3;
  ctx.stroke();

  ctx.fillStyle="#8b938b";
  ctx.font="600 21px sans-serif";
  ctx.textAlign="center";
  ctx.fillText("等待五份结果",c,c-r*.55);

  drawPointer(ctx,c,r);
  return;
 }

 const slice=Math.PI*2/items.length;

 items.forEach((item,i)=>{
  const start=rotation-Math.PI/2+i*slice;
  const end=start+slice;
  const mid=start+slice/2;

  ctx.beginPath();
  ctx.moveTo(c,c);
  ctx.arc(c,c,r,start,end);
  ctx.closePath();

  ctx.fillStyle=COLORS[i%COLORS.length];
  ctx.fill();

  ctx.strokeStyle="#fffefa";
  ctx.lineWidth=5;
  ctx.stroke();

  const x=c+Math.cos(mid)*r*.66;
  const y=c+Math.sin(mid)*r*.66;

  ctx.fillStyle="#27332b";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.font=`700 ${items.length>6?14:18}px sans-serif`;

  ctx.fillText(shortName(item.wheelName||item.name),x,y,r*.5);
 });

 ctx.beginPath();
 ctx.arc(c,c,r,0,Math.PI*2);
 ctx.strokeStyle="#eef0e9";
 ctx.lineWidth=3;
 ctx.stroke();

 drawPointer(ctx,c,r);
}

function drawPointer(ctx,c,r){
 ctx.beginPath();
 ctx.moveTo(c-21,c-r-16);
 ctx.lineTo(c+21,c-r-16);
 ctx.lineTo(c,c-r+19);
 ctx.closePath();
 ctx.fillStyle="#2f7d4a";
 ctx.fill();
}

function animateWheel(canvas,items,index,startRotation,onUpdate,onDone){
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
 const duration=reduce?300:3800;
 const slice=Math.PI*2/items.length;
 const targetNorm=-(index+.5)*slice;
 const turns=Math.PI*2*(reduce?1:6);
 const target=startRotation+turns+normalize(targetNorm-startRotation);
 const start=performance.now();

 function frame(now){
  const p=Math.min(1,(now-start)/duration);
  const ease=1-Math.pow(1-p,4);
  const rot=startRotation+(target-startRotation)*ease;

  onUpdate(rot);
  drawWheel(canvas,items,rot);

  if(p<1) requestAnimationFrame(frame);
  else onDone();
 }

 requestAnimationFrame(frame);
}

function normalize(v){
 while(v<0) v+=Math.PI*2;
 while(v>=Math.PI*2) v-=Math.PI*2;
 return v;
}

function shortName(name){
 const clean=String(name||"")
  .replace(/ Restaurant| Vietnamese Cuisine| Vietnamese Restaurant| Fish Head Steamboat Corner| Coconut Chicken Hot Pot| Chicken Hotpot| Eating House| Cuisine| Banh Mi & Pho| Guoco Midtown| Steamboat| Grilled Fish/gi,"")
  .trim();

 return clean.length>8?`${clean.slice(0,8)}…`:clean;
}

async function copyText(text,message){
 try{
  await navigator.clipboard.writeText(text);
 }catch{
  const t=document.createElement("textarea");
  t.value=text;
  document.body.append(t);
  t.select();
  document.execCommand("copy");
  t.remove();
 }

 showToast(message);
}

let toastTimer;

function showToast(message){
 const el=$("#toast");
 el.textContent=message;
 el.classList.add("is-visible");

 clearTimeout(toastTimer);

 toastTimer=setTimeout(()=>{
  el.classList.remove("is-visible");
 },2600);
}

function showConfetti(){
 if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;

 const canvas=$("#confetti");
 const ctx=canvas.getContext("2d");

 canvas.width=innerWidth*devicePixelRatio;
 canvas.height=innerHeight*devicePixelRatio;

 const pieces=Array.from({length:70},()=>({
  x:Math.random()*canvas.width,
  y:-20-Math.random()*200,
  vx:(Math.random()-.5)*3,
  vy:2+Math.random()*4,
  s:5+Math.random()*7,
  c:COLORS[Math.floor(Math.random()*COLORS.length)]
 }));

 let f=0;

 (function tick(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  pieces.forEach(p=>{
   p.x+=p.vx;
   p.y+=p.vy;
   ctx.fillStyle=p.c;
   ctx.fillRect(p.x,p.y,p.s,p.s*.6);
  });

  if(f++<160) requestAnimationFrame(tick);
  else ctx.clearRect(0,0,canvas.width,canvas.height);
 })();
}

function shuffle(arr){
 return [...arr].sort(()=>Math.random()-.5);
}

function escapeHtml(v){
 return String(v??"").replace(/[&<>'"]/g,c=>({
  "&":"&amp;",
  "<":"&lt;",
  ">":"&gt;",
  "'":"&#39;",
  '"':"&quot;"
 })[c]);
}

document.addEventListener("DOMContentLoaded",init);
