import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>My Tunes</h1>
        <div className="container">
          <img className="profilePic"src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/images/methode/2018/03/28/8c0e085e-2e78-11e8-aca1-e0fd24c4b573_972x_111713.JPG"/>
            <div className="subContainer">
              <h2>Leslie Cheung's album</h2>
                <input type="checkbox" id="accordion1"/>
                <label for ="accordion1" >Most Beloved</label>
                  <div class="content">
                    <ol>
                        <li><a href="https://www.youtube.com/watch?v=HcSE3cQH-Ic&ab_channel=%E6%BB%BE%E7%9F%B3%E5%94%B1%E7%89%87ROCKRECORDS" target="_blank">Chase</a></li>
                        <li>Endless Embrace</li>
                        <li>Midnight Singer</li>
                        <li>In This Lifetime</li>
                      </ol>
                  </div>

                <input type="checkbox" id="accordion2"/>
                <label for ="accordion2" >Summer Romance</label>
                  <div class="content">
                    <ol>
                      <li><a href="https://www.youtube.com/watch?v=57k7Q4NZHEY&ab_channel=ThemeMV" target="_blank">Sleepless Night</a></li>
                      <li>Enough</li>
                      <li>Where Are You?</li>
                      <li>Invisible Lock</li>
                    </ol>
                  </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
