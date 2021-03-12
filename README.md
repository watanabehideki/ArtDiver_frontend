# ArtDiver

 ArtDiverはアートギャラリーや展覧会情報を閲覧できるプラットホームです。

## 作成理由

アート好きな人とアートギャラリーとの繋がりを増やし、また深める為に作成しました。
多くのアートギャラリーには展覧会場に芳名帳が置かれていて、芳名帳には来訪者が氏名や連絡先などを記入します。
しかし、ほとんどの場合その芳名帳は誰でも見れる様な体裁で置かれている為、個人情報が悪用される恐れがあり、中には記入しない人もいます。
これはギャラリーにとって、マーケティングのチャンスを逃し、また次回展覧会のお知らせが出来ない為、来訪者との繋がりの妨げになっています。
この問題を解決し、安心安全にアート好きな人とアートギャラリーとの繋がりをつくることが出来ます。



## 【機能一覧】

クライアント
・ユーザーアカウント登録、ログイン機能(devise, devise_token_auth)
・ユーザー感想投稿機能(ReactHooks)
・メール送信機能(AWS SES, EmailJS)

管理者
・管理者ログイン(devise)
・データ管理(Active Admin)
・画像アップロード(carrierwave, AWS S3)

## 【E-R図】

![2021-03-07 22 24 29](https://user-images.githubusercontent.com/76731152/110887501-c8c43180-832d-11eb-9a4c-476d05eee8c3.png)

## 【使用技術】

### インフラ構成図

![2021-03-07 22 24 29](https://user-images.githubusercontent.com/76731152/110887424-a6caaf00-832d-11eb-8a32-acb40f062b49.png)

### インフラ

・AWS
  - ECS Fargate
  - ECR 
  - RDS
  - S3
  - ALB
  - Route53
  - ACM (SSL証明書)
  - SES
  - SSM
・EmailJS

### フロントエンド

・Nginx 1.17.8-alpine
・node 14.11.0
・React.js (create-react-up)
・ReactRouter
・ReactHooks
・Material-UI
・axios

### バックエンド

・Nginx 1.16
・Ruby 2.7.1
・Ruby on Rails 6.0.0
  gem 'jbuilder'
  gem 'rack-cors'
  gem 'devise'
  gem 'devise_token_auth'
  gem 'aws-ses'
  gem 'aws-sdk-rails'
  gem 'dotenv-rails' 
  gem 'carrierwave'
  gem 'fog-aws'
  ...etc
・Puma
・MySQL 5.7.30

### 管理画面

・Nginx 1.16
・Ruby 2.7.1
・Ruby on Rails 6.0.0
  gem 'devise'
  gem 'activeadmin'
  gem 'active_admin_flat_skin'
  gem 'carrierwave'
  gem 'fog-aws'

  ...etc
・Puma
・MySQL 5.7.30

### その他

・VSCode
・Docker/Docker-compose
・Soucetree
・draw.io
