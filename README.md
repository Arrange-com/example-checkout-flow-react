# 💳 **_How to implement checkout flow to your website?_**

## 1. **Get activities data**

First of all you need to get activities information, for this you should get _Authorization token_.

For this you need:

1. **Login to your account:** <br/> `POST https://devapi.arrange.com/controller/auth/user/login` <br/> `BODY { "email": "your@email.com", "password": "password" }` <br/>`RESPONSE {access_token}`
2. **If you have multiple organizations in your account, you need to login the organization:** <br/> `POST https://devapi.arrange.com/controller/auth/organization/login` <br/> `BODY { "organizationId": "some organization id" }`<br/>`HEADERS {"Authorization": "Bearer [access_token from previous step]"}` <br/>`RESPONSE {access_token}`<br/> Else skip this step.

After first/second step you will have `access_token` 🔑

**_Just for tests, you can use a test user:_** <br/>
<code>
email: arrange.example@gmail.com <br>
password: 1sQuAldEnTChr <br>
token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYTAxY2E4MS1hNGE0LTQ1MmEtYWZiNi02ZDliYWQ3Y2RmNGQiLCJwZXJtaXNzaW9uSWQiOiJhOGQwOGEyNy03NWRkLTRmZjAtOGEzMy0zMDk0OGM2NmJiODYiLCJpYXQiOjE2NjEzNzMxNTAsImV4cCI6MTY5MjkzMDc1MH0.d0Gf5TzA7z1w233qtTxM7CB41YdXBv33RE529SfvjTo4TkXFWCzmCf5UwuZwuky2PO98HzntFTg0DPE3KIAuQ_4ee2E3eFE6Jt_GLoFNKcY4Y-PuXmCIQqaihXlFIXUErHIKtEJvFvpRVm3FlsP_5Ra2NAKJHNSUWK1Io3De_o8
</code>

---
