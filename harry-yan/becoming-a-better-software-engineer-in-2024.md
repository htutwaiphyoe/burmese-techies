# Becoming A Better Software Engineer in 2024

Developer ဘဝနောက်တဆင့် မြှင့်တင်ဖို့၊ industry ထဲအလုပ်ကောင်းကောင်းရဖို့ ဘာတွေ လေ့လာရမလဲ။ ကိုယ့်လုပ်သက်ကလည်း တနှစ်လောက် ရှိလာပြီ။ တာဝန်တွေလည်း နိုင်နင်းလာပြီဆိုရင် တနေ့တနေ့ Code ရေးတယ်။ အိမ်ပြန်တယ်။ ဒီလိုနဲ့ပဲ ဖာသိဖာသာ မနေပဲ ငယ်တုန်းမှာ ဒီကဏ္ဍတွေကို လေ့လာထားတာ အကောင်းဆုံးပါပဲ။ ဒါမှ နောက်ကျမကျန်ခဲ့မှာပါ။

## 1. Cloud Computing

ဒီနေ့ကစပြီး Cloud Computing လေ့လာထားပါ။ Cloud ဆိုတာ System Admin တွေသုံးဖို့ မဟုတ်ပါဘူး။ Cloud Computing ဆိုတာ ဘာလဲလို့ မြင်သာအောင် ပြောပြရရင် server တွေ၊ storage တွေ၊ proxy တွေကို ကိုယ့်ဟာကိုယ် hardware ဝယ်ပြီး မဆင်ပဲ အင်တာနက်ပေါ်ကတဆင့် ငှားသုံးလိုက်တာပါပဲ။ Amazon Web Service တို့၊ Microsoft Azure တို့ဆိုတာ အဲသလို ငှားပေးတဲ့ vendor တွေပေါ့။

vendor တွေပေးတဲ့ free training တွေ ရှိသလို YouTube ပေါ်မှာလည်း tutorial တွေ အများကြီးရှိတာမို့ ဖြေးဖြေးချင်း လေ့လာသွားကြည့်ပါ။ အခုမှ စလေ့လာမယ်ဆိုရင် AWS ကတော့ resource အပေါဆုံးပါပဲ။

## 2. Operating System

Developer အများစုက Operating System ကို ထိပ်မထိကြတာ များတယ်။ အဲဒီလိုမလုပ်ပါနဲ့။ အနည်းဆုံး ကိုယ် code ရေးမယ့် development environment ကိုတော့ ကိုယ့်ဟာကိုယ် ဆင်တတ်ဖို့လုပ်ပါ။ Operating System ကို ဘယ်လောက်ပဲ မထိချင်ဘူးပြောပြော နောက်ဆုံး ကိုယ်ရေးတဲ့ application တွေက ဒီ OS ပေါ်ပဲ ရောက်တာပါ။ Backend နဲ့ Frontend app အများစုက Linux OS (Linux Server) ပေါ်ကတဆင့် host ထားတာပါပဲ။ OS လေ့လာဖို့ပြောတယ်ဆိုတာနဲ့ OS Administrator လောက် သိရမယ် မဟုတ်ပါဘူး။ Filesystem, Process, Package Manager နဲ့ Command Line လောက် သိရင်ပဲ မဆိုးပါဘူး။

## 3. Containerization

Application ကို ဒီနေ့ခေတ်မှာ OS ပေါ် ပလိန်းကြီး မတင်ကြတော့ပါဘူး။ OS ပေါ် တိုက်ရိုက်တင်ရင် dependency version တစုံပဲ ရှိလို့ရမယ် (python ရဲ့ venv လိုမျိုး မသုံးရင်ပေါ့) ဒါပေမယ့် virtual environment လေးတွေအဖြစ် ခွဲထားပြီး တင်ရင်လည်း security အရ မလုံခြုံပြန်ဘူး။ ဒီပြဿနာတွေကို ကျွန်တော်တို့ container တွေနဲ့ ဖြေရှင်းခဲ့တယ်။

container ဆိုတာ တင်စားပြောတာပါ။ တကယ်က Linux kernel ထဲက namespace နဲ့ cgroup စတာတွေကို သုံးပြီး Kernel level မှာ environment လေးတွေ ခွဲလိုက်တာပဲ။

ရလာတဲ့ environment တခုချင်းစီက သီးသန့် process tree ကိုယ်ပိုင် filesystem ခွဲတမ်းရတဲ့ resource usage (CPU, Disk, Memory etc) သူ့လုပ်ပိုင်ခွင့်နဲ့သူ ဖြစ်သွားမယ်။ ဒါပေမယ့် ကျွန်တော်တို့ Developer တွေ အဓိက လေ့လာထားရမှာက container image တွေပါ။ containerization ပေါ့။ အဲဒီအတွက် Docker လေ့လာထားပါ။

## 4. Container Orchestration

Container တွေက တလုံးနှစ်လုံးတည်းဆိုရင် ကိုင်တွယ်ရ တာ ကိစ္စမရှိပါဘူး။ ဒါပေမယ့် software system တွေမှာ application service တခုထက်မက ရှိကြတယ်။ service တခုကို container တလုံး ထားမယ်ဆိုရင်တောင် service 12 ခုရှိရင် container 12 လုံးဖြစ်နေမှာပါ။ service တခုချင်းစီကို ထပ်ပွားရပြီဆိုရင် container အရေအတွက်က ဒါဇင်နဲ့ချီသွားမယ်။ နောက်ပြီး service အလိုက် version အသစ် ထွက်တဲ့အခါ container တွေကို အတင်အချ လုပ်ဖို့လိုမယ်။ ပိုဆိုးတာက အကြောင်းအမျိုးမျိုးကြောင့် ရပ်သွားတဲ့ container တွေကိုလည်း ကိုင်တွယ်ဖို့ လိုဦးမယ်။ ဒီအတွက် container orchestration software လိုအပ်ပါတယ်။

ဒီခေတ်မှာ ကုမ္ပဏီ ကြီးကြီးခန့်ခန့်ဖြစ်ပြီး Orchestration Platform မသုံးတာမျိုး ကျွန်တော် မကြားဖူးသေးပါဘူး။ ဒါကြောင့် အချိန်ရရင် Kubernetes ဒါမှမဟုတ် Docker Swarm လေ့လာပါ။

## 5. Infrastructure as Code

Cloud Computing လေ့လာရင်း အသားကျလာပြီဆိုရင် IaC သုံးတတ်အောင် သင်ပါ။ Computing platform တွေပေါ်မှာ ရှုပ်ထွေးတဲ့ application တွေ တင်ထားချင်လာပြီဆိုရင် UI ပေါ် ဟိုနှိပ်ဒီနှိပ် လုပ်နေလို့က တခုမဟုတ်တခု ကျိန်းသေ မှားပါလိမ့်မယ်။ ဒါကြောင့် အခေါက်တိုင်းမှာ ပြန်အသုံးချလို့ရမယ့် script တွေ ရှိထားဖို့ လိုပါတယ်။

ဒါပေမယ့် script တွေကို plain မဆန်ပဲ သုံးလို့ကောင်းတဲ့ အနေအထားဖြစ်အောင် ရေးထားရမှာ မလွယ်ပါဘူး။ IaC tool တွေကတော့ feature အစုံ တခါတည်း ပါပြီးသားပါ။ Cloud vendor အလိုက် AWS Cloud Formation, GCP မှာ Cloud Deployment Manager စသဖြင့် ရှိထားကြပေမယ့် IaC အတွက် Terraform ဒါမှမဟုတ် Pulumi လေ့လာထားဖို့ အကြံပေးချင်ပါတယ်။

## 6. CI/CD Pipelines

ကိုယ့် laptop ထဲက source code ကို Git Repository ထဲ push တယ်။ ပြီးရင် server ထဲ SSH ဝင်ပြီး clone တယ်။ အခုထိ အဲလိုနည်းနဲ့ deployment လုပ်နေသေးတယ်ဆိုရင် CI/CD pipeline တွေကို လေ့လာဖို့ လိုအပ်နေပါပြီ။ ကိုယ့် code quality စစ်ဖို့၊ Test တွေ run ဖို့၊ program build ဖို့နဲ့ deploy ဖို့စတာတွေကို pipeline ထဲ ဘယ်လိုလုပ်သွားလဲ နားလည်ထားသင့်ပါတယ်။

Developer တွေရဲ့အလုပ်က code ရေးဖို့ ဖြစ်တဲ့အတွက် တနေကုန် တနေခမ်း pipeline တွေ ထိုင်ဆင်နေဖို့ မလိုပါဘူး။ ဒါပေမယ့် ကိုယ်ရေးလိုက်တဲ့ code က pipeline တလျှောက် ဘာဖြစ်သွားမယ်ဆိုတာ သိထားမှပဲ မှန်ကန်တဲ့ feature တွေကို နည်းလမ်းတကျ ရေးတတ်မှာပါ။ CI/CD အတွက် Jenkins ဒါမှမဟုတ် GitHub Action ကို အခြေခံလောက် လေ့လာထားသင့်ပါတယ်။

အခုပြောသွားတာတွေက DevOps မဟုတ်ပါဘူး။ အဲလိုထင်နေရင်ပေါ့။ အခုထိ မှားယွင်း မှတ်ထားတတ်ကြတဲ့ တချက်က ဒီဟာတွေကို DevOps တာဝန်လို့တွေးကြတာပါပဲ။ DevOps ဆိုတာ ထင်နေကြသလို role တခုမဟုတ်ပါဘူး။

ကုမ္ပဏီတွေက DevOps လို့ပြောပြီး ခန့်ကြတာ ဟုတ်ပါတယ်။ ဒါပေမယ့် သူတို့ တကယ်တမ်း ဆိုလိုချင်တာက Operation ပါပဲ။ ဒါပေမယ့် DevOps ဆိုတာ Operation ကိုနာမည်လှလှပေးလိုက်တာ မဟုတ်သလို DevOps ဆိုတာ Ops ပိုင်းကသူတွေပဲ သိရမယ့်ဟာလည်း မဟုတ်ပါဘူး။

DevOps ဆိုတာ software development ရဲ့ ယဥ်ကျေးမှုကျင့်ထုံးတခုဖြစ်တယ်။ အပေါ်မှာ ပြောသွားတဲ့ tool တွေက DevOps ယဥ်ကျေးမှုကို ​ထောက်ကန်ပေးနေတယ်ဆိုတာအပြင် ဘာမှမပိုပါဘူး။ Software Engineer (Dev) ​ရော၊ Operation Engineer (Ops) နှစ်ခုလုံးက DevOps ဖြစ်နေရပါမယ်။

အခုအကြောင်းအရာတွေကို အသေးစိတ် လေ့လာချင်တယ်ဆိုရင် ကျွန်တော် ရေးထားတဲ့စာအုပ် ရှိပါတယ်။ စာအုပ်ရဲ့ နာမည်က The Journey to DevOps ပါ။

AWS, Docker, Linux, Kubernetes, Terraform နဲ့ GitHub Action တွေကို အသုံးချပြီး ခေါင်းစဥ်တခုချင်းကို တခါမှ မထိတွေ့ဖူးတဲ့ beginner တွေအသာဖတ်သွားလို့ရအောင် ခွဲရေးထားပါတယ်။ စိတ်ဝင်စားရင် အောက်က link မှာ ဝယ်လို့ရပါတယ်ခင်ဗျာ။

[https://leanpub.com/thejourneytodevops](https://leanpub.com/thejourneytodevops)
