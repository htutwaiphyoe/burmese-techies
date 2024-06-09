# Practical Functional Programming Series(Part 5) Function & Pure Function in Functional Programming

Functional programming language တွေက function concept က imperative အနွယ်ဝင် language တွေက function တွေနဲ. ကွဲပါတယ်။ ဘယ်က ဟာနဲ. တူလဲဆိုရင် Mathematics က function တွေကိုယူတာပါ။ Math က function ဆိုပါစို. + ဆိုတာ function တခုဆိုပါစို. သူ.မှာ parameter ၂ခုပါမယ် 2+3 သည် အမြဲတမ်း 5 ဖြစ်ပါတယ်။ ဆိုချင်တာက math မှာ function တွေသည် input တူတူပဲပေးလိုက်ရင် ဘယ်အချိန် run ပါစေ output တူတူထွက်ပါတယ်။ ဥပမာဆိုပါစို.

```js
function add( a, b )
{
return a+b;
}
```

အပေါ်က ကောင်သည် add မှာ input သာ တူရင် အဲ့ဒီ function ကို ဘယ်နှကြိမ် run run ဘယ်လိုအခြေအနေမှာပဲ run ပါစေ output တူပါမယ်၊ ဉပမာ add(2,3) ကို ဘယ်လို ခေါ်ခေါ် ဘယ်အချိန် ခေါ်ခေါ် 5 ပဲရမယ်။ တခြားတန်ဖိုးမရဘူး အဲ့တော add(2,3) ကို time t1, မှာ ခေါ်တာနဲ. နောက်ထပ် time t2 မှာခေါ်တာသည် မခြားနားဘူး အဖြေတူတူပဲရရမယ်။ ဒါပေမဲ့အောက်က imperative က function မျိုးကိုကြည့်ပါ။

```js
var b = 10;
function plusB(a)
{
    return a +b;
}
```

plusB ဆိုတဲ့ function ကို plusB(2) လို. ခေါ်တာချင်းအတူတူ ဘယ်အချိန်ခေါ်သလဲအပေါ်မူတည်ပြီး output ပြောင်းနိုင်ပါတယ်။
ဉပမာ

```js
plusB(3)// 13;
b = 2;
plusB(3)// now 5;
```

ပထမ plusB(3) သည် 13 ရမယ် ဒုတိယ plusB(3) သည် 5 ရမယ်။ ဆိုချင်တာက အရင် example add လို ဘယ်အချိန်ခေါ်ခေါ် input တူရင် output တူမယ်ဆိုတာမရှိတော့ဘူး ဘာလို.လဲဆိုတော့ plusB သည် external state ဖြစ်တဲ့ b ဆိုတဲ့ variable အပေါ်မူတည်နေသေးတယ်။ b ကို ကြိုက်တဲ့သူက ပြောင်းလို.ရတယ် ၊ b အပေါ်မူတည်တဲ့အတွက် သူ.ရဲ. output သည် ပထမတခါ plusB(3) နဲ. နောက်တခါ plusB(3) မတူတော့ဘူး

Functional programming မှာရှိတဲ့ function တွေသည် input တူရင် output တူရမယ်။ အဲ့လိုဖြစ်ဖို. pure function ဖြစ်ဖို.လိုတယ်။ Functional programming က function တွေသည် mapping ကိုလုပ်တာပဲ transformation ကိုလုပ်တာပဲဖြစ်တယ်။ ဆိုချင်တာက ဝင်လာတဲ့ input value အပေါ်မူတည်ပြီး အဖြေတွက်တယ် အဖြေထုတ်တယ်။ Input value ကိုပြောင်းတာမလုပ်ဘူး နောက် တခြား environment က (output သည်i nput value နဲ. constant မဟုတ်သော တခြား variable တွေအပေါ်မမူတည်ဘူး) variable တွေ အပေါ်မမူတည်ဘူး။ အဲ့လို input တူရင် output တူတဲ့ function တွေကို pure function လိုခေါ်တယ်၊ ဘာကောင်းလဲဆိုတော့ referential transparency ရှိတယ်လို.ဆိုတယ်။

## Pure Function

အပေါ်က add လို function မျိုးကို pure function လို.ခေါ်တယ်။ Pure Function ဆိုတာဘာလဲဆိုရင် function ရဲ. output(return value) သည် input parameter ရယ် နောက် constant တွေရယ်အပေါ်မှာပဲမူတည်တယ် တခြား variable တွေ environment state တွေအပေါ်မမူတည်ဘူး။ နောက် function သည် တခြား environment (memory, IO) အစရှိတာတွေကို မပြောင်းလဲရဘူး ဒါကို pure function လို.ခေါ်တယ်။ တနည်းအားဖြင့် side effect မရှိသော function ပေါ့။
Side effect ဆိုတာဘာလဲဆိုတော့

1. Input parameter ဒါမှမဟုတ် constant မဟုတ်ပဲ တခြား သော variable တွေကိုယူသုံးတာ သွားပြီးတော့ ပြောင်းလဲပစ်တာ(write လုပ်တာပေါ့)
2. File, read, write, IO (console.log ပါလဲ side effect လို.ပြောလို.ရတယ် ဒါသည် environment ကိုပြောင်းစေလို.
3. ခြုံပြောရရင် ဒီ function သည် input parameter, constant နဲ. တခြား function တွေကိုပဲသုံးမယ် IO မထိရဘူး

Side effect မရှိတဲ့ function တွေကို pure function လိုခေါ်တယ်။ Haskell လို Pure functional programming တွေမှာ IO တွေကိုသုံးမယ်ဆိုရင် (IO သည် side effect) monad လိုကောင်တွေကိုသုံးရတယ်? impure ဖြစ်တဲ့ side effect ပါတဲ့ ကောင်တွေကို wrap လုပ်ပြီးသုံးတယ်ပြောရမယ်။

1. functional programming မှာ pure function နဲ.ရေးထားရင် add(2,3) ဘယ်နေရာတွေ.တွေ. 5 နဲ.အစားထိုးလိုက်လို.ရတယ် ။ ပြန်တွက်စရာမလိုဘူ းအဲ့တော့ cache လုပ်ထားလို.ရတယ်။referential transparency ဆိုတာ pure function တခုကို input တူရင် ဘယ်နေရာမှာသုံးသုံး output ကိုအစားထိုးပလိုက်လို.ရတယ်။

2. Logical reasoning မှာကောင်းတယ် ဆိုချင်တာက imperative မှာ trace, debug လုပ်ဖူးရင်သိပါလိမ့်မယ် function တွေသည် တခြား variable ရဲ. state ကိုမှီခိုတဲ့အခါ အဲ့ဒီ variable တွေကို ဘယ်သူတွေက သုံးထားလဲ ဘယ်နေရာပြောင်းထားလဲပါ လိုက်စစ်ရတယ်။ အဲ့တာမျိုး FP မှာမလိုဘူး ပိုကောင်းတယ်ပေါ့။

3. Composition လုပ်လို.လွယ်တယ် ဆိုချင်တာက function တခုနဲ.တခု အဆင့်ဆင့်ပေါင်းပြီးလုပ်သွားတာ (နောက်မှ တပိုင်းသက်သက်ထပ်ရေးရမယ်)

4. Parallelization လုပ်လို.လွယ်တယ်။ ဆိုပါစို. 2+3+4+5 ဆိုပါစို. သူ.ကို 2+3 ကိုခွဲလုပ်မယ် 4+5 ကိုသက်သက်လုပ်မယ် အဲ့တာတွေလုပ်လဲကိစ္စမရှိဘူးဘာလို.လဲဆိုတော့ အပြင် state အပေါ်မမူတည်တဲ့အတွက် time order ကိုကြည့်စရာမလိုဘူး၊ (imperative မှာ ဒါမျိုးမရဘူး)

5 Test ရေးလို.ကောင်းတယ် input က တူရင် output တူတော့ဘယ်အခြေအနေရောက်မှ test က မှန်မယ်ဆိုတာမျိုးမရှိဘူး (precondition မလိုဘူး)

Imperative က function တွေနဲ. FP က function တွေ မတူတဲ့နောက်တခုက FP က function တွေသည် return value ကိုအမြဲပြန်တယ်။ function သည် input  ကနေ output ကို mapping လုပ်တာသာဖြစ်တယ် ။ အဲ့ဒီတော့ state ကိုသိမ်းထားခွင့်မရှိဘူး အဲ့တော့ return မပြန်ရင် state လဲသိမ်းမရတဲ့အတွက် ဘာမှအသုံးမဝင်ဘူးဖြစ်လိမ့်မယ်။ အဲ့တော့ input ရှိမယ် (input ကလဲ imperative paradigm မှာမရှိလဲရတယ် FP မှာတော့မရဘူး ဘာလို.ဆိုတော့ side effect မရှိလို.) output ပြန်ရမယ်။ parameter ကတော့ ကြိုက်သလောက် ထားလို.ရတယ် return ကတော့ တခုပဲပြန်ကြတယ်။ များသောအားဖြင့် parameter ကို တခုတည်းထားရေးတာမျိုးရှိတယ်(ဘာကြောင့်လဲဆိုတာ နောက်အပိုင်းတွေကျမှ သက်သက်အခန်းခွဲရေးရမယ်)
အချုပ်ပြောရရင် FP က function တွေသည် math ကလိုပဲ ဖြစ်တယ်. input တူရင် output တူတယ်။ input , output အမြဲရှိရတယ်။ pure ဖြစ်တယ်။
