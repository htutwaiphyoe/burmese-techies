# Database Normalization

Database တစ်ခုကို create လုပ်ရပြီဆိုတာနဲ့ တွဲရက်ပါလာလေ့ ရှိတာက normalization ဖြစ်ပါတယ်။ ဒီ normalization စဉ်းစားပုံ မှားပြီဆိုတာနဲ့ ပရိုဂရမ် ရေးတဲ့နေရာမှာ ငါးပါးမှောက်တော့တာပါပဲ။ ဦးကနင်း ပဲ့ကထောင်၊ ပဲ့ကနင်း ဦးကထောင်နဲ့ ကသောင်းကနင်းတွေ ဖြစ်ပြီး မဆုံးနိုင်တဲ့ error တွေနဲ့ ရင်ဆိုင် ဖြေရှင်းရတော့မှာ သေချာပါတယ်။

Normalization လုပ်ထားတဲ့ database တစ်ခုမှာ key မဟုတ်တဲ့ attribute value တစ်မျိုးဟာ တစ်နေရာတည်းမှာ တစ်ခုတည်းသာ ရှိပါတယ်။ ကျန်တဲ့နေရာတွေက လိုအပ်လာယင် ဒီတစ်ခုတည်းသော attribute value ကိုပဲ reference လုပ်ထားတဲ့ key value တွေကတစ်ဆင့် ဆွဲထုတ်ပြီး သုံးနေကြတာ ဖြစ်ပါတယ်။ ဒါကို database အသုံးအနှုန်းအားဖြင့် data integrity and consistency ဖြစ်တယ်လို့ ပြောကြပါတယ်။

Key တစ်ခုအဖြစ် မသတ်မှတ်ထားတဲ့ attribute value တစ်မျိုးဟာ database ထဲမှာ တစ်နေရာထက် ပိုပြီး ပါဝင်နေပြီ ဆိုယင်တော့ data redundancy ဖြစ်နေတယ်လို့ ပြောလေ့ ရှိကြပါတယ်။ အဲဒီလို data redundancy ဖြစ်နေပြီဆိုယင် ဖြစ်လာနိုင်တာတွေကတော့ attribute value တစ်မျိုးတည်းကိုပဲ ထပ်ခါထပ်ခါ ထည့်နေရတာတွေ၊ ပြင်ချင် ဖျက်ချင်တဲ့ အခါမှာလည်း အဲဒီ redundant attribute value ရှိနေတဲ့ နေရာအားလုံးကို လိုက်ပြင် လိုက်ဖျက်နေရတာတွေ အဲ့ဒီလို လုပ်တဲ့ နေရာမှာ တစ်နေရာရာ လွတ်ကျန်ခဲ့ရင် attribute value ဟာ တစ်နေရာနဲ့ တစ်နေရာ မတူညီပဲ ကွဲလွဲနေတာတွေ စတဲ့ မလိုလားအပ်တဲ့ အကျိုးဆက်တွေ ကြုံတွေ့လာရမှာ ဖြစ်ပါတယ်။

ဒီလိုမျိုး မလိုလားအပ်တဲ့ အကျိုးဆက်တွေ ကြုံတွေ့မလာရအောင် normalization ကို မှန်မှန်ကန်ကန် လုပ်နိုင်ဖို့ အရေးကြီးပါတယ်။ ဒီ Normalization ဆိုတာကို အတိုဆုံးနဲ့ အရှင်းဆုံး ပြောပါဆိုယင် removing data redundancy လို့ ပြောနိုင်ပါတယ်။

Normalization လုပ်တာကို ကျောင်းသင်ရိုးညွှန်းတမ်းတွေမှာ ၆ ဆင့်အထိ ထည့်ထားလေ့ ရှိပေမယ့် လက်တွေ့လောကမှာတော့ third normal form ၃ ဆင့် အထိသာ အများဆုံး သုံးကြပါတယ်။ မလိုအပ်တာကလဲ တစ်ကြောင်း၊ normalization များများလုပ်လေ database ရဲ့ performance ကျလေ ဖြစ်တာက တစ်ကြောင်းကြောင့် ဖြစ်ပါတယ်။

Normalization လုပ်ရတာ ခက်သလားဆိုတော့ မခက်လှပါဘူး။ ဒါပေမယ့် မှန်မှန်ကန်ကန် လုပ်တတ်တဲ့ လူကတော့ နည်းပါတယ်။ ဒါကြောင့် Normalization ဘယ်လိုလုပ်ရသလဲ ဆိုတာကို အလွယ်ကူဆုံးနဲ့ အမြင်သာဆုံး ဖြစ်အောင် တတ်နိုင်သလောက် ရှင်းပြပေးချင်ပါတယ်။

အောက်မှာ ပြထားတဲ့ un-normalized database table တစ်ခုကို စဉ်းစားကြည့်ပါ။

```sql
rollNo
studentName
courseID
courseName
teacherName
teacherTel
courseFee
```

အပေါ်မှာ ပြထားတဲ့ un-normalized database table မျိုးထဲမှာ data တွေ ထည့်မယ်ဆိုရင် key value ဖြစ်မနေတဲ့ ကျောင်းသားတွေရဲ့ နာမည်ဟာ course တစ်ခုအတွက် ကျောင်းသားစာရင်း သွင်းတိုင်းသွင်းတိုင်း ထပ်ခါထပ်ခါ ပါနေမှာကို အလွယ်တကူ မြင်နိုင်ပါတယ်။ ဒီတော့ အဲ့ဒီလို မဖြစ်အောင် Normalization လုပ်ဖို့ လိုပါတယ်။ ဘယ်လိုလုပ်ရမလဲဆိုတော့ ဒီလိုပါ။

## First Normal Form (1NF)

လုပ်ဆောင်ရန်။     ။ ပြောင်းလဲခြင်း မရှိသော attribute value များနှင့် ထပ်ခါထပ်ခါ  ပြောင်းလဲနေသည့် attribute value များကို သီးခြား table များ အဖြစ် ခွဲထုတ်ရမည်။

ဥပမာအဖြစ် ပေးထားသော un-normalized database table တွင် ကျောင်းသားတစ်ဦး၏ ခုံအမှတ်နှင့် အမည်သည် ထိုကျောင်းသားနှင့် သက်ဆိုင်သော record အသစ်တစ်ခု ထည့်တိုင်းထည့်တိုင်း ပြောင်းလဲခြင်း မရှိပဲ ထပ်ခါထပ်ခါ ပြောင်းလဲသွားသည်မှာ courseID, courseName, teacherName, teacherTel, courseFee တို့သာ ဖြစ်သည်။
ထို့ကြောင့် 1NF ၏ အဆိုအရ အောက်ပါအတိုင်း ခွဲထုတ်နိုင်သည်။

```sql
Table 1 (Non-repeating group table)
           rollNo
          studentName
Table 2 (Repeating group table and related with RollNo from Table 1)
          rollNo
          courseID
          courseName
          teacherName
          teacherTel
          courseFee
```

## Second Normal Form (2NF)

လုပ်ဆောင်ရန်။     ။ Key အဖြစ် သတ်မှတ်၍ မရနိုင်သော attributes (non-key columns) များနှင့် key အဖြစ် သတ်မှတ်၍ ရနိုင်သော attribute (key column) တို့၏ ဆက်စပ်မှု (functional dependency) ကို လိုက်ရှာပါ။ တွေ့လျှင် သီးခြား table များအဖြစ် ထပ်မံ၍ ခွဲထုတ်ပါ။ တစ်နည်းအားဖြင့် non-key columns များသည် သူတို့နှင့် ဆက်စပ်လျက် ရှိပြီး primary key အဖြစ် သတ်မှတ်နိုင်သော column ရှိခဲ့ပါက အဆိုပါ primary key column ဖြင့်သာ တွဲလျက် သီးခြား တည်ရှိရမည်။

1NF မှ ရလာသော table 2 တွင် courseID သည် key column အဖြစ် သတ်မှတ်၍ ရနိုင်ပြီး key column အဖြစ် မသတ်မှတ်နိုင်သော courseName နှင့် courseFee columns များဖြင့် ဆက်စပ်မှု ရှိနေသည်ကို ကောင်းစွာ တွေ့ရှိနိုင်သည်။ ထို့ကြောင့် အောက်ပါအတိုင်း ထပ်မံ ခွဲထုတ်နိုင်သည်။

```sql
Table 1 (Non-repeating group table)
           rollNo
           studentName
Table 2 (Extract functionally dependant table)
           courseID
           courseName
           courseFee
Table 3
           rollNo
           courseID
           teacherName
           teacherTel
```

## Third Normal Form (3NF)

လုပ်ဆောင်ရန်။     ။ Key အဖြစ် သတ်မှတ်၍ မရနိုင်သော attribute (non-key column) များသည် တစ်ခုနှင့် တစ်ခု ဆက်စပ်မှီခို နေခြင်းမျိုး မရှိစေရ၊ တစ်နည်းအားဖြင့် mutually independent ဖြစ်နေရမည်။ အကယ်၍ တစ်ခုနှင့် တစ်ခု ဆက်စပ်မှီခိုခြင်း ရှိနေပါက သီးခြား table အဖြစ် ထပ်မံ ခွဲထုတ်ရမည်။

2NF မှ ရလာသော Table 3 တွင် teacherName နှင့် teacherTel columns များသည် တစ်ခုနှင့် တစ်ခု ဆက်စပ်မှီခို နေကြကြောင်း တွေ့နိုင်သည်။ teacherName column value အပေါ် မူတည်၍ teacherTel column value သည်လည်း လိုက်ပါ ပြောင်းလဲနေမည်ကို အလွယ်တကူ တွေ့မြင်နိုင်သည်။
ထိုကြောင့် 3NF ၏ အဆိုအတိုင်း သီးခြား table အဖြစ် ထပ်မံ ခွဲထုတ်လိုက်လျှင် အောက်ပါအတိုင်း ရလာမည် ဖြစ်ပါသည်။

```sql
Student Table
            rollNo
           studentName
Course Table
            courseID
            courseName
           courseFee
Teacher Table
          teacherName
          teacherTel
Attendance Table
          rollNo
          courseID
          teacherName
```

ဒီလောက်ဆို Database တစ်ခု create လုပ်တဲ့အခါမှာ Normalization ဆိုတာကို ဘယ်လိုစဉ်းစားပြီး ဘယ်လိုလုပ်ရမလဲဆိုတဲ့ idea တစ်ခုခု ရသွားကြလိမ့်မယ်လို့ မျှော်လင့်ပါတယ် ခင်ဗျာ။

Original Article: [https://www.facebook.com/sunthurainmoe/posts/pfbid02nsxZq3gYNXZ8DQbrcXre6ZPSoKrfd8LxjdbbjWik53qY2Y34bXk6sPG5wo4XpiQXl](https://www.facebook.com/sunthurainmoe/posts/pfbid02nsxZq3gYNXZ8DQbrcXre6ZPSoKrfd8LxjdbbjWik53qY2Y34bXk6sPG5wo4XpiQXl)
