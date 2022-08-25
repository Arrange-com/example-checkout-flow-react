# 💳 **_How to implement checkout flow to your website?_**

## 1. **Get activities data**

First of all you need to get activities information, for this you should get _Authorization token_.

For this you need:

1. **Login to your account:** <br/> `POST https://devapi.arrange.com/controller/auth/user/login` <br/> `BODY { "email": "your@email.com", "password": "password" }` <br/>`RESPONSE {access_token}`
2. **If you have multiple organizations in your account, you need to login the organization:** <br/> `POST https://devapi.arrange.com/controller/auth/organization/login` <br/> `BODY { "organizationId": "some organization id" }`<br/>`HEADERS {"Authorization": "Bearer [access_token from previous step]"}` <br/>`RESPONSE {access_token}`<br/> Else skip this step.

After first/second step you will have `access_token` 🔑

**_Just for tests, you can use a test user:_** <br/>

```json

"email": "arrange.example@gmail.com",
"password": "1sQuAldEnTChr",
"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYTAxY2E4MS1hNGE0LTQ1MmEtYWZiNi02ZDliYWQ3Y2RmNGQiLCJwZXJtaXNzaW9uSWQiOiJhOGQwOGEyNy03NWRkLTRmZjAtOGEzMy0zMDk0OGM2NmJiODYiLCJpYXQiOjE2NjEzNzMxNTAsImV4cCI6MTY5MjkzMDc1MH0.d0Gf5TzA7z1w233qtTxM7CB41YdXBv33RE529SfvjTo4TkXFWCzmCf5UwuZwuky2PO98HzntFTg0DPE3KIAuQ_4ee2E3eFE6Jt_GLoFNKcY4Y-PuXmCIQqaihXlFIXUErHIKtEJvFvpRVm3FlsP_5Ra2NAKJHNSUWK1Io3De_o8"

```

Now you can get data about activities, for this you should:<br/>
`GET https://devapi.arrange.com/controller/activity/all`<br/>`HEADERS {"Authorization": "Bearer [access_token]"}`

## 🎉🎉🎉 Congratulations, you have received the required data 🎉🎉🎉

---

## 2. **Add checkout flow in your website**

Project in repository its example implementation the checkout in modal window.

For implementation checkout flow you need two parameters:

`activityLink`: link of the activity you need <br/>
`classId`: id of the class you need

```js

{
  id: "3e27c144-f4ae-423d-9b6f-410f5c0676b0",
  link: "zf2tg3dqg", /*📌 THIS activity link*/
  title: "Activity 1",
  status: "ACTIVE",
  description: "Description",
  organizationId: "c068274a-8710-4c4b-8c8b-5d029881a30c",
  activity_classes: [
      {
        id: "f0fbe1ba-87d3-43df-a975-b8b5f0ad96f6",  /*📌 THIS class id*/
        title: "Class Red",
        activityId: "3e27c144-f4ae-423d-9b6f-410f5c0676b0",
        timelines: [
            ...
        ],
        ...
      },
    ...
  ],
  ...
}

```

And for realization this functionality left insert link of the checkout page with parameters in the `iframe`<br/>

```json
"https://dev.arrange.com/checkout-page/${activityLink}?classId=${classId}&iframe=true"
```

And you will have 👇

<img src="./public/assets/readme-img1.png" width="624"/>

After successful payment you will get message from checkout component. For messages processing you should add `EventListener`

```js
window.addEventListener(
  "message",
  (ev) => {
    if (ev != null && ev.data === '{"status":"success"}') {
      console.log("Success ✔️");
    }
  },
  false
);
```

<img src="./public/assets/readme-img2.png" width="624"/>

You can look on the realization of checkout modal window on `react js` in project.
