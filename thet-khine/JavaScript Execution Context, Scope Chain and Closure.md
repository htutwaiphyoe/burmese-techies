# JavaScript Execution Context, Scope Chain and Closure

JS မှာ execution context ဆိုတာ တခြား language တွေမှာ method call stack ရဲ. stack frame ကိုရည်ညွန်းတာ။ ဘာလို. execution context လို.ပြောရသလဲဆိုရင် တခြား language တွေနဲ.မတူပဲ lexical scoping ပေးတာရယ် nested function ပေးတာရယ် နောက် first class function ပေးတာရယ်ကြောင့် တခြား language တွေရဲ. stack frame လိုမရှင်းပဲ တခြား information တွေလိုတဲ့အတွက် သူ.ကို execution context လို.ခေါ်တာ။ အဓိက ကတော့ function တခု execute လုပ်ပြီဆိုရင် အဲ့ function ကလိုတဲ့ scope chain ရယ်, function ထဲမှာ သုံးတဲ့ (parameter တွေရောပါတယ်) variable တွေရယ်၊ နောက် function အထဲမှာ ထပ်ရေးထားတဲ့ nested function တွေရယ်၊ this ရယ် ဒီသုံးမျိုးပါတာကို execution context လို.သတ်မှတ်တယ်။
Execution Context ၃မျိုးရှိတယ်။

1. Global context- Global code တွေ တခြား ဘယ် function အောက်မှာမှ မပါပဲနဲ. run တဲ့ကောင်တွေ
2. Function Context- Function တခုခုထဲမှာ run တဲ့ကောင်တွေ
3. Eval - Eval function ထဲမှာ run တဲ့ကောင်တွေ။

```js
function outer(){
  var counter = 20;
  return function inner() {
    counter ++;
    console.log("Counter ",counter);
  }
}
var func = outer();
func();
func();
```

အပေါ်က code မှာ inner ဆိုတဲ့ function က outer ဆိုတဲ့ function ထဲမှာရှိတာ။
variable counter ကို outer ထဲမှာကြေငြာထားတာ။ outer function ကနေ ဘာကို return ပြန်လဲဆိုတော့ inner function ကို return ပြန်ပြီးတော့ func ဆိုတဲ့ variable ထဲမှာသိမ်းတယ်။ ပထမတခါခေါ်တော့ 
Counter 21 ထွက်မယ်
နောက်တခေါက်ဖို.က Counter 22.
outer function ကနေပြန်လာတဲ့ inner ကို closure လို.ခေါ်တယ်။ Close over ကနေလာတာ။ inner function ကယူသုံးတဲ့ counter သည် သူ.ကိုယ်ပိုင် variable မဟုတ်ဘူး။ အပြင်က outer function က ကောင်ကိုယူသုံးတာ။ JavaScript က lexical scope ကိုပေးတယ်လို.ခေါ်ကြတယ်။ ဘာကိုဆိုလိုချင်တာလဲဆိုတော့ ခုနက inner ထဲမှာ
counter ++ လို.ခေါ်သုံးလိုက်တဲ့အခါ variable resolution (ခု counter က ဘယ်က variable ကိုရည်ညွန်းတာလဲ) ဆိုတာကို ဆုံးဖြတ်ဖို. သူ.ကို ငုံထားတဲ့ function ရဲ. variable တွေကိုလိုက်ရှာရတယ် ခု outer ပေါ့။ outer ထဲမှာ counter ကိုတွေ.တော့ယူသုံးတယ်။ ဒါကို lexical structure ပေါ်မူတည်ပြီး variable ကို resolve လုပ်လို. lexical scope လို.ခေါ်တာ။ calling sequence ကိုသာမူတည်ရင် dynamic scope လို.ခေါ်မယ်။
outer function ကိုခေါ်လိုက်တော့ inner ကို return ပြန်တယ်။ အဲ့တော့ inner က outer ရဲ. variable ကိုယူသုံးလို.၇တယ်ဆိုတော့ outer သည် သူ. function ပြီးသွားတာတောင် execution context stack (call stack) ကနေ ဖယ်လို.မရသေးဘူး။ ခုနက counter ကိုဘယ်လိုနည်းနဲ. လိုက်ရှာလဲဆိုတော့ inner ရဲ. execution context က variable ထဲမှာ လိုက်ရှာတယ်။ မတွေ.တော့ သူ. ရဲ. scope chain ထဲကနေ လိုက်ရှာတယ်။ဒီမှာ scope chain ဆိုတာ သူ.ကို ခေါ်တဲ့ parent ရဲ. execution context ထဲက variable တွေကိုပြောတာ။
မြင်သာအောင်ပြရရင် ဒီလိုရှိမယ်။

```js
outer execution context
{
scopeChain : [global execution Context]
variable : {
       counter;
}
this: ...
}
===============
inner execution context
{
scopeChain : [outer execution Context]
variable : {
}
this: ...
}
```

inner က counter ကို resolve လုပ်တဲ့အခါ သူ. execution context ထဲက variable ထဲမှာရှာတယ် မတွေ.ဘူးဆိုရင် scope chain ထဲက variable ထဲကိုကြည့်တယ် အဲ့မှာ သူ.ကိုခေါ်တဲ့ outer ရဲ. execution contextထဲက variable ကိုသွားတွေ.တယ်။ အဲ့တာနဲ.ယူသုံးတယ်။
Closure ကို private data တွေ ကာတဲ့နေရာ function currying လိုနေရာတွေမှာသုံးလို.ရတယ်။

```js
  function closureDemo()
        {
            var funcArr = [];
            for(var i=0;i< 3;i++)
            {
                funcArr.push(function ()
                {
                    alert(i);
                })
            }
            return funcArr;
        }
        var funcArr = closureDemo();
        funcArr[0]();
        funcArr[1]();
        funcArr[2]();
```

ခုနက အပေါ်က code မှာ funcArr[0]();ကို run လိုက်ရင် 3 ကိုထုတ်ပြပါလိမ့်မယ်။ ဘာလို.လဲဆိုတော့ alert(i) သည်  parent execution context ထဲကို bound ထားတာဖြစ်လို.ပါပဲ။
