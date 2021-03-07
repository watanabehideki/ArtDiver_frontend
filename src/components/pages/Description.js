import React from 'react'
import './Description.css'

const Description = () => {
  return (
    <div className='description-container'>
      <div>
        <h2>ArtDiverとは</h2>
        <br></br>
          <h3>アートギャラリーや展覧会情報を閲覧できるプラットホームです。</h3>
        <br></br>
        <h3>サービス内容</h3> 
          <li>アートギャラリーの情報閲覧</li>
          <li>展覧会の情報閲覧</li>
          <li>各ギャラリーページから、ギャラリー宛にご意見やご感想などを送信できます。</li>
          <li>ユーザー登録して頂くと、各展覧会ページから感想などを投稿できます。</li>
      </div>
    </div>
  )
}

export default Description