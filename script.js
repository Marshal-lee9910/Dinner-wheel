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

const HOST_KEY="light-dinner-host-results-v2";

const COLORS=[
 "#dcebd9",
 "#f5dfa0",
 "#f4b49f",
 "#cbdde5",
 "#f1e5c4",
 "#d9e6d2"
];

const restaurants=[
 {
  id:"chin-chin",
  name:"Chin Chin Eating House",
  area:"Purvis Street / Bugis-City Hall",
  mrt:"Bugis / City Hall",
  cost:25,
  tags:["清淡一点","中餐 / 炒菜","离 MRT 近"],
  dishes:"海南鸡、杂菜、豆腐、猪扒、清汤",
  weight:18
 },
 {
  id:"yum-cha",
  name:"Yum Cha Restaurant",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:32,
  tags:["清淡一点","想喝汤 / 粥","粤菜 / 点心","中餐 / 炒菜","离 MRT 近"],
  dishes:"虾饺、烧卖、蒸排骨、粥、肠粉",
  weight:16
 },
 {
  id:"seasons-coconut-chicken-bugis",
  name:"Seasons Coconut Chicken 椰语四季",
  area:"Bugis",
  mrt:"Bugis",
  cost:38,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近"],
  dishes:"椰子鸡火锅、竹笙鸡汤、时蔬、豆腐",
  weight:22
 },
 {
  id:"three-coconuts-guoco-midtown",
  name:"3-Coconut Guoco Midtown 三个椰子",
  area:"Guoco Midtown / Bugis",
  mrt:"Bugis",
  cost:42,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近"],
  dishes:"现砍椰子鸡、椰子汤底、蔬菜拼盘、菌菇",
  weight:20
 },
 {
  id:"yuanqi-yelin-chinatown",
  name:"Coconut Chicken Hot Pot 元气椰林椰子鸡火锅",
  area:"Mosque Street / Chinatown",
  mrt:"Chinatown",
  cost:42,
  tags:["椰子鸡 / 汤锅","中餐 / 炒菜","想喝汤 / 粥","清淡一点","离 MRT 近"],
  dishes:"招牌椰子鸡、竹荪鸡汤、腊味煲仔饭、时蔬",
  weight:21
 },
 {
  id:"fat-bird-bugis",
  name:"Fat Bird Chicken Hotpot 胖胖鸡",
  area:"Liang Seah Street / Bugis",
  mrt:"Bugis",
  cost:32,
  tags:["中餐 / 炒菜","椰子鸡 / 汤锅","想喝汤 / 粥","离 MRT 近"],
  dishes:"鸡公煲、麻辣鸡煲、姜蓉鸡煲、蔬菜和豆腐",
  weight:20
 },
 {
  id:"ai-shang-fish-hotpot",
  name:"Ai Shang Fish Hotpot 爱尚鱼捞",
  area:"Liang Seah Street / Bugis",
  mrt:"Bugis",
  cost:38,
  tags:["中餐 / 炒菜","椰子鸡 / 汤锅","想喝汤 / 粥","离 MRT 近"],
  dishes:"鱼火锅、酸菜鱼汤底、手工丸类、时蔬",
  weight:18
 },
 {
  id:"bugis-fish-head-steamboat",
  name:"Bugis Fish Head Steamboat",
  area:"Kelantan Lane / Bugis",
  mrt:"Jalan Besar / Bugis",
  cost:28,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近"],
  dishes:"鱼头炉、蒙古排骨、炒青菜、豆腐",
  weight:19
 },
 {
  id:"nan-hwa-chong-fish-head",
  name:"Nan Hwa Chong Fish Head Steamboat Corner",
  area:"North Bridge Road / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:35,
  tags:["中餐 / 炒菜","想喝汤 / 粥","离 MRT 近"],
  dishes:"鱼头炉、虾酱鸡、炒菜、豆腐",
  weight:17
 },
 {
  id:"kok-sen-chinatown",
  name:"Kok Sen Restaurant",
  area:"Keong Saik / Chinatown",
  mrt:"Outram Park / Chinatown",
  cost:42,
  tags:["中餐 / 炒菜","清淡一点","离 MRT 近"],
  dishes:"大虾河粉、砂锅酿豆腐、虾酱鸡、咕噜肉",
  weight:16
 },
 {
  id:"dong-bei-ren-jia",
  name:"Dong Bei Ren Jia 东北人家",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:32,
  tags:["中餐 / 炒菜","面条 / 饺子","离 MRT 近"],
  dishes:"锅包肉、饺子、地三鲜、孜然羊肉、凉菜",
  weight:18
 },
 {
  id:"spring-court-chinatown",
  name:"Spring Court Restaurant",
  area:"Chinatown",
  mrt:"Chinatown",
  cost:45,
  tags:["中餐 / 炒菜","粤菜 / 点心","离 MRT 近"],
  dishes:"薄饼、烧鸡、河粉、豆腐、虾类小菜",
  weight:12
 },
 {
  id:"ah-loy-thai-bugis",
  name:"Ah Loy Thai",
  area:"Tan Quee Lan Street / Bugis",
  mrt:"Bugis",
  cost:28,
  tags:["泰国菜","离 MRT 近"],
  dishes:"Tom Yum、Pandan Chicken、Garlic Pork、Green Curry、Kang Kong",
  weight:19
 },
 {
  id:"sawadee-thai-bugis",
  name:"Sawadee Thai Cuisine",
  area:"Tan Quee Lan Street / Bugis",
  mrt:"Bugis",
  cost:42,
  tags:["泰国菜","离 MRT 近"],
  dishes:"Tom Kha Gai、Tom Yum、Thai Fish Cakes、Green Curry、Steamed Sea Bass",
  weight:15
 },
 {
  id:"yhingthai-palace",
  name:"Yhingthai Palace",
  area:"Purvis Street / Bugis-City Hall",
  mrt:"Bugis / City Hall",
  cost:45,
  tags:["泰国菜","离 MRT 近"],
  dishes:"Pomelo Salad、Green Curry、Pad Thai、Tom Yum、Thai-Chinese dishes",
  weight:13
 },
 {
  id:"co-hai-banh-mi",
  name:"Co Hai Banh Mi & Pho",
  area:"Beach Road / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:22,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近"],
  dishes:"Banh Mi、Pho、烤鸡檬粉、越南春卷、越南咖啡",
  weight:18
 },
 {
  id:"two-beo-vietnamese",
  name:"2 Béo Vietnamese Restaurant",
  area:"Bussorah Street / Bugis",
  mrt:"Bugis / Nicoll Highway",
  cost:24,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近"],
  dishes:"Beef Pho、Banh Mi、Grilled Pork Rice、Summer Roll、越南咖啡",
  weight:17
 },
 {
  id:"may-pho-culture",
  name:"May Pho Culture",
  area:"Fook Hai Building / Chinatown",
  mrt:"Chinatown",
  cost:22,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近"],
  dishes:"Beef Pho、Spring Rolls、Vietnamese Coffee、Bun dishes",
  weight:16
 },
 {
  id:"long-phung-chinatown",
  name:"Long Phung Vietnamese Cuisine",
  area:"New Bridge Road / Chinatown",
  mrt:"Chinatown",
  cost:24,
  tags:["越南菜","清淡一点","面条 / 饺子","离 MRT 近"],
  dishes:"Pho、Bun Thit Nuong、Spring Rolls、越南粉面饭",
  weight:15
 }
];
const $=s=>document.querySelector(s);
let selectedFriend="",selectedMood="",personalRotation=0,finalRotation=0,spinning=false,currentResult=null,currentShareLink="",hostResults=loadHostResults();

function init(){
 renderFriendPicker();renderMoodPicker();renderRestaurants();renderHostSlots();bindEvents();updateParticipantUI();drawPersonalPreview();drawFinalWheel();
 const imported=new URLSearchParams(location.search).get("result");
 if(imported){const ok=importResult(imported,true);if(ok){history.replaceState({},"",location.pathname+"#host");showView("host");showToast("已自动收下一份朋友结果。");}}
 else if(location.hash==="#host")showView("host");
}

function bindEvents(){
 $("#participantTab").addEventListener("click",()=>showView("participant"));$("#hostTab").addEventListener("click",()=>showView("host"));
 $("#budgetInput").addEventListener("input",()=>{$("#wheelBudget").textContent=`S$${getBudget()}`;drawPersonalPreview();});
 $("#spinButton").addEventListener("click",spinPersonalWheel);$("#copyLinkButton").addEventListener("click",()=>copyText(currentShareLink,"结果链接已复制，发给主人吧。"));$("#copyCodeButton").addEventListener("click",()=>copyText($("#resultCode").value,"结果码已复制。"));
 $("#importCodeButton").addEventListener("click",()=>{if(importResult($("#importCode").value)){$("#importCode").value="";showToast("已加入主持人汇总。");}});
 $("#resetHostButton").addEventListener("click",()=>{if(confirm("清空已经收集的五人结果？")){hostResults={};saveHostResults();renderHostSlots();drawFinalWheel();$("#finalResult").hidden=true;showToast("主持人汇总已清空。");}});
 $("#finalSpinButton").addEventListener("click",spinFinalWheel);
 window.addEventListener("resize",()=>{drawPersonalPreview();drawFinalWheel();});
}

function showView(mode){const host=mode==="host";$("#participantView").hidden=host;$("#hostView").hidden=!host;$("#participantTab").classList.toggle("is-active",!host);$("#hostTab").classList.toggle("is-active",host);location.hash=host?"host":"participant";if(host)drawFinalWheel();else drawPersonalPreview();window.scrollTo({top:0,behavior:"smooth"});}

function renderFriendPicker(){const el=$("#friendPicker");el.innerHTML="";FRIENDS.forEach(friend=>{const b=document.createElement("button");b.type="button";b.className="friend-choice";b.textContent=friend;b.addEventListener("click",()=>{selectedFriend=friend;renderFriendPicker();updateParticipantUI();});if(friend===selectedFriend)b.classList.add("is-selected");el.append(b);});}
function renderMoodPicker(){const el=$("#moodPicker");el.innerHTML="";MOODS.forEach(mood=>{const b=document.createElement("button");b.type="button";b.className="mood-choice";b.textContent=mood;b.addEventListener("click",()=>{selectedMood=mood;renderMoodPicker();updateParticipantUI();drawPersonalPreview();});if(mood===selectedMood)b.classList.add("is-selected");el.append(b);});}
function updateParticipantUI(){const btn=$("#spinButton");btn.disabled=!selectedFriend||!selectedMood||spinning;if(!selectedFriend)btn.textContent="先选择你的名字";else if(!selectedMood)btn.textContent="再选择今晚的口味";else btn.textContent=`${selectedFriend} 的清淡一转`;}
function getBudget(){return Math.max(15,Number($("#budgetInput").value)||50);}

function calculateWeights(){const budget=getBudget();return restaurants.map(r=>{let weight=r.weight;if(r.cost<=budget)weight+=8;else weight-=10;if(r.cost<=30)weight+=4;if(selectedMood&&r.tags.includes(selectedMood))weight+=12;if(selectedMood==="清淡一点")weight+=5;if(selectedMood==="随便都可以")weight+=Math.random()*4;return{restaurant:r,weight:Math.max(1,weight)};});}
function weightedPick(weighted){let roll=Math.random()*weighted.reduce((s,x)=>s+x.weight,0);for(const item of weighted){roll-=item.weight;if(roll<=0)return item.restaurant;}return weighted.at(-1).restaurant;}
function visualShortlist(winner){const ranked=calculateWeights().sort((a,b)=>b.weight-a.weight).map(x=>x.restaurant),list=winner?[winner,...shuffle(ranked.filter(r=>r.id!==winner.id)).slice(0,5)]:ranked.slice(0,6);return winner?shuffle(list):list;}

function drawPersonalPreview(){drawWheel($("#personalWheel"),visualShortlist(),personalRotation);}
function spinPersonalWheel(){if(spinning||!selectedFriend||!selectedMood)return;const weighted=calculateWeights(),winner=weightedPick(weighted),items=visualShortlist(winner),index=items.findIndex(r=>r.id===winner.id);spinning=true;updateParticipantUI();$("#spinHint").textContent="正在寻找今晚最舒服的一餐…";animateWheel($("#personalWheel"),items,index,personalRotation,r=>personalRotation=r,()=>{spinning=false;currentResult={v:1,friend:selectedFriend,mood:selectedMood,restaurantId:winner.id,restaurantName:winner.name,area:winner.area,mrt:winner.mrt,cost:winner.cost,ts:Date.now()};showPersonalResult(winner);updateParticipantUI();});}

function showPersonalResult(r){const code=encodeResult(currentResult),base=location.href.split(/[?#]/)[0];currentShareLink=`${base}?result=${encodeURIComponent(code)}#host`;$("#personalResultTitle").textContent=`${selectedFriend} 选中了：${r.name}`;$("#personalResultMeta").innerHTML=`<div><span>口味</span><b>${escapeHtml(selectedMood)}</b></div><div><span>预计人均</span><b>S$${r.cost}</b></div><div><span>区域</span><b>${escapeHtml(r.area)}</b></div><div><span>最近 MRT</span><b>${escapeHtml(r.mrt)}</b></div>`;$("#resultCode").value=code;$("#personalResult").hidden=false;$("#spinHint").textContent="这一转完成了，把结果交给主人。";$("#personalResult").scrollIntoView({behavior:"smooth",block:"start"});}

function encodeResult(data){const bytes=new TextEncoder().encode(JSON.stringify(data));let binary="";bytes.forEach(b=>binary+=String.fromCharCode(b));return"LDR1."+btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");}
function decodeResult(input){let raw=String(input||"").trim();try{if(raw.includes("?result="))raw=new URL(raw).searchParams.get("result")||"";raw=decodeURIComponent(raw);if(!raw.startsWith("LDR1."))throw new Error();let body=raw.slice(5).replace(/-/g,"+").replace(/_/g,"/");body+="=".repeat((4-body.length%4)%4);const binary=atob(body),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0)),data=JSON.parse(new TextDecoder().decode(bytes));if(data.v!==1||!FRIENDS.includes(data.friend)||!restaurants.some(r=>r.id===data.restaurantId))throw new Error();return data;}catch{return null;}}
function importResult(input,silent=false){const data=decodeResult(input);if(!data){if(!silent)showToast("这个结果码无法识别，请重新复制。");return false;}hostResults[data.friend]=data;saveHostResults();renderHostSlots();drawFinalWheel();return true;}
function loadHostResults(){try{return JSON.parse(localStorage.getItem(HOST_KEY))||{};}catch{return{};}}
function saveHostResults(){localStorage.setItem(HOST_KEY,JSON.stringify(hostResults));}

function renderHostSlots(){const el=$("#hostSlots");el.innerHTML="";FRIENDS.forEach(friend=>{const r=hostResults[friend],row=document.createElement("div");row.className=`host-slot ${r?"is-filled":""}`;row.innerHTML=`<strong>${friend}</strong><p>${r?escapeHtml(r.restaurantName):"等待结果链接"}</p><div>${r?'<button class="remove-result" type="button">移除</button>':'<span class="slot-state">未收到</span>'}</div>`;if(r)row.querySelector("button").addEventListener("click",()=>{delete hostResults[friend];saveHostResults();renderHostSlots();drawFinalWheel();});el.append(row);});const count=Object.keys(hostResults).length;$("#hostCountBadge").textContent=count;$("#finalCount").textContent=`${count} / 5`;$("#finalSpinButton").disabled=count<5||spinning;$("#finalSpinButton").textContent=count<5?"收齐五人后最终一转":"最终一转，今晚就吃它";$("#hostHint").textContent=count<5?`还差 ${5-count} 份结果。`:"五个人都到齐了，可以最终一转。";}
function getFinalItems(){return FRIENDS.map(f=>hostResults[f]).filter(Boolean).map(x=>restaurants.find(r=>r.id===x.restaurantId));}
function drawFinalWheel(){drawWheel($("#finalWheel"),getFinalItems(),finalRotation);}
function spinFinalWheel(){const items=getFinalItems();if(items.length<5||spinning)return;const index=Math.floor(Math.random()*items.length),winner=items[index];spinning=true;renderHostSlots();$("#hostHint").textContent="命运正在汇总五个人的选择…";animateWheel($("#finalWheel"),items,index,finalRotation,r=>finalRotation=r,()=>{spinning=false;renderHostSlots();showFinalResult(winner);showConfetti();});}
function showFinalResult(winner){const nominators=FRIENDS.filter(f=>hostResults[f]?.restaurantId===winner.id);$("#finalResult").innerHTML=`<p class="kicker">FINAL DINNER</p><h3>今晚就吃：${escapeHtml(winner.name)}</h3><p><b>提名人：</b>${nominators.join("、")}</p><p><b>区域 / MRT：</b>${escapeHtml(winner.area)} · ${escapeHtml(winner.mrt)}</p><p><b>预计人均：</b>S$${winner.cost}，五人约 S$${winner.cost*5}</p><p><b>推荐清淡菜：</b>${escapeHtml(winner.dishes)}</p><p class="decision">五个人的选择已经汇总，今晚不再纠结。</p>`;$("#finalResult").hidden=false;$("#finalResult").scrollIntoView({behavior:"smooth",block:"start"});}

function renderRestaurants(){$("#restaurantList").innerHTML=restaurants.map(r=>`<article class="restaurant-row"><div><h3>${escapeHtml(r.name)}</h3><p>${escapeHtml(r.area)} · ${escapeHtml(r.dishes)}</p></div><b>S$${r.cost}</b></article>`).join("");}

function drawWheel(canvas,items,rotation=0){const ctx=canvas.getContext("2d"),size=canvas.width,c=size/2,r=size*.42;ctx.clearRect(0,0,size,size);if(!items.length){ctx.beginPath();ctx.arc(c,c,r,0,Math.PI*2);ctx.fillStyle="#f1eee5";ctx.fill();ctx.strokeStyle="#d9ddd5";ctx.lineWidth=3;ctx.stroke();ctx.fillStyle="#8b938b";ctx.font="600 21px sans-serif";ctx.textAlign="center";ctx.fillText("等待五份结果",c,c-r*.55);drawPointer(ctx,c,r);return;}const slice=Math.PI*2/items.length;items.forEach((item,i)=>{const start=rotation-Math.PI/2+i*slice,end=start+slice,mid=start+slice/2;ctx.beginPath();ctx.moveTo(c,c);ctx.arc(c,c,r,start,end);ctx.closePath();ctx.fillStyle=COLORS[i%COLORS.length];ctx.fill();ctx.strokeStyle="#fffefa";ctx.lineWidth=5;ctx.stroke();const x=c+Math.cos(mid)*r*.66,y=c+Math.sin(mid)*r*.66;ctx.fillStyle="#27332b";ctx.textAlign="center";ctx.textBaseline="middle";ctx.font=`700 ${items.length>6?15:18}px sans-serif`;ctx.fillText(shortName(item.name),x,y,r*.5);});ctx.beginPath();ctx.arc(c,c,r,0,Math.PI*2);ctx.strokeStyle="#eef0e9";ctx.lineWidth=3;ctx.stroke();drawPointer(ctx,c,r);}
function drawPointer(ctx,c,r){ctx.beginPath();ctx.moveTo(c-21,c-r-16);ctx.lineTo(c+21,c-r-16);ctx.lineTo(c,c-r+19);ctx.closePath();ctx.fillStyle="#2f7d4a";ctx.fill();}
function animateWheel(canvas,items,index,startRotation,onUpdate,onDone){const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,duration=reduce?300:3800,slice=Math.PI*2/items.length,targetNorm=-(index+.5)*slice,turns=Math.PI*2*(reduce?1:6),target=startRotation+turns+normalize(targetNorm-startRotation),start=performance.now();function frame(now){const p=Math.min(1,(now-start)/duration),ease=1-Math.pow(1-p,4),rot=startRotation+(target-startRotation)*ease;onUpdate(rot);drawWheel(canvas,items,rot);if(p<1)requestAnimationFrame(frame);else onDone();}requestAnimationFrame(frame);}
function normalize(v){while(v<0)v+=Math.PI*2;while(v>=Math.PI*2)v-=Math.PI*2;return v;}
function shortName(name){const clean=name.replace(/ Restaurant| @ .+| Noodle & Congee House| La Mian Xiao Long Bao/gi,"").trim();return clean.length>12?`${clean.slice(0,11)}…`:clean;}

async function copyText(text,message){try{await navigator.clipboard.writeText(text);}catch{const t=document.createElement("textarea");t.value=text;document.body.append(t);t.select();document.execCommand("copy");t.remove();}showToast(message);}
let toastTimer;function showToast(message){const el=$("#toast");el.textContent=message;el.classList.add("is-visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("is-visible"),2600);}
function showConfetti(){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const canvas=$("#confetti"),ctx=canvas.getContext("2d");canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;const pieces=Array.from({length:70},()=>({x:Math.random()*canvas.width,y:-20-Math.random()*200,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,s:5+Math.random()*7,c:COLORS[Math.floor(Math.random()*COLORS.length)]}));let f=0;(function tick(){ctx.clearRect(0,0,canvas.width,canvas.height);pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;ctx.fillStyle=p.c;ctx.fillRect(p.x,p.y,p.s,p.s*.6);});if(f++<160)requestAnimationFrame(tick);else ctx.clearRect(0,0,canvas.width,canvas.height);})();}
function shuffle(arr){return[...arr].sort(()=>Math.random()-.5);}
function escapeHtml(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c]);}

document.addEventListener("DOMContentLoaded",init);
