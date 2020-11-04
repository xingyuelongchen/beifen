<!--
Template Name: 虾皮数据
Create author: qinglong
Create Time  : 2020-09-28
-->
<template>
  <div class="xipi" @click.stop.self="show=true">
    <div class="head top">
      <div class="left">
        <div class="logo">
          <svg viewBox="0 0 113 126" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08zM56.32 7.34c10.83 0 19.66 10.208 20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34zM97.44 125.687c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004z" fill-rule="evenodd"></path>
          </svg>
        </div>
        <span class="title">首页</span>
        <span class="el-icon-arrow-right"></span>
        <span class="path">賣家數據中心</span>
      </div>
      <div class="right">
        <div class="xipicart">
          <span class="icon">
            <img src="~@/assets/image/xipicart.jpg" alt="">
          </span>
          <span> {{formData.username}} </span>
        </div>
        <div class="info">
          <img src="~@/assets/image/xipiright.jpg" />
        </div>
      </div>
    </div>
    <div class="head bottom">
      <div class="body flex">
        <div class="left">
          <div class="item active">數據總覽</div>
          <div class="item">商品</div>
          <div class="item">銷售額</div>
          <div class="item">行銷活動</div>
          <div class="item">聊聊 </div>
          <div class="item">我的直播
            <span class="new-badge">新功能</span>
          </div>
          <div class="item">常見問題</div>
        </div>
        <div class="right"> 即時看板
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
    </div>
    <div class="body ">
      <div class="card flex position-sticky">
        <div class="header">
          <span>資料期間</span>
          <span class="time">
            <i>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>calender-alt</title>
                <path d="M26,2H23.5V1h-2V2h-11V1h-2V2H6A5,5,0,0,0,1,7V26a5,5,0,0,0,5,5H26a5,5,0,0,0,5-5V7A5,5,0,0,0,26,2ZM3,7A3,3,0,0,1,6,4H8.5V6h2V4h11V6h2V4H26a3,3,0,0,1,3,3V8H3ZM29,26a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V10H29ZM11,18H7V14h4Zm7,0H14V14h4Zm-7,7H7V21h4Zm14,0H21V21h4Zm0-7H21V14h4Zm-7,7H14V21h4Z"></path>
              </svg>
            </i>
            <span v-if="formData.selectTime === 1">今日此刻：今天直到 {{formData.date}}:00（GMT+8）</span>
            <span v-else-if="formData.selectTime === 2">昨日：{{formData.date}}（GMT+8）</span>
            <span v-else-if="formData.selectTime === 3">過去7天: {{formData.date}}（GMT+8） </span>
            <span v-else-if="formData.selectTime === 4">過去30天: {{formData.date}}（GMT+8） </span>
          </span>
          <span>訂單類型</span>
          <span>
            <el-select size="small" v-model="formData.type"></el-select>
          </span>
        </div>
        <div class="right">
          <i><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
              <path class="st0" d="M30.3,30.3h-28c-0.6,0-1-0.4-1-1v-8c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v7h26v-7c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1 v8C31.3,29.8,30.9,30.3,30.3,30.3z M17.1,24C17,24,17,24,17.1,24c-0.2,0.2-0.4,0.3-0.7,0.3c0,0,0,0,0,0c-0.3,0-0.5-0.1-0.7-0.3l-6-7 c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.3,5V5.3c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v15.3l4.3-5c0.4-0.4,1-0.4,1.4,0 c0.4,0.4,0.4,1,0,1.4L17.1,24z"></path>
            </svg></i>
          匯出數據
        </div>
      </div>
      <div class="card chart">
        <div class="title">關鍵指標</div>
        <div class="box">
          <template v-for="(item,i ) in rows">
            <div class="item active" v-if="item.prop!=='date'" :key="i" @click="selectItem(item)">
              <span class="border" :style="{background:item.check?colors[i]:''}"></span>
              <div class="a">{{item.label}}</div>
              <div class="b">{{item.type}}
                <span class="price">{{item.total}}</span>
                {{item.last}}
              </div>
              <div class="c flex">
                <span>vs {{formData.time}}</span>
                <span>{{item.top}}%
                  <i data-v-2c1fda86="" class="inline-svg-container icon" style="/* display: none; */"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>growth</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="growth" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M9.63538732,8.63974174 L9.63538732,12.749984 C9.63538732,13.0261264 9.4115297,13.249984 9.13538732,13.249984 L7.13538732,13.249984 C6.85924495,13.249984 6.63538732,13.0261264 6.63538732,12.749984 L6.63538732,8.65030508 L3.50176055,8.66133893 C3.36871984,8.66180739 3.24097818,8.60923459 3.14680765,8.51525609 C2.95134631,8.32019334 2.95102319,8.00361102 3.14608594,7.80814968 L7.79792255,3.14680765 C7.79811289,3.14661692 7.79830338,3.14642634 7.79849403,3.14623592 C7.99387253,2.95109021 8.31045497,2.95127892 8.50560069,3.14665742 L13.1287695,7.77534111 C13.2219777,7.86866056 13.2745379,7.99502891 13.2750023,8.12692314 C13.2759746,8.4030638 13.0529066,8.62770826 12.7767659,8.62868059 L9.63538732,8.63974174 Z" fill="#40D0BD"></path>
                      </g>
                    </svg></i>
                </span>
              </div>
            </div>
          </template>
        </div>
        <div class="charts">
          <div class="top">
            <div class="title">指標趨勢圖</div>
            <div>
              <template v-for="(item,index) in rows">
                <span v-if="item.check && item.prop !='date'" :key="index">
                  <i :style="{background:colors[index]}"></i>
                  {{item.label}}</span>
              </template>
              <span>已選擇指標 {{charts.columns.length-1}} /4</span>
            </div>
          </div>
          <ve-line :data="charts" height="300px" :colors="colors" :legend-visible="false" :judge-width="true" :settings="setting" :extend="setting" />
        </div>
      </div>
      <div class="card data">
        <div class="title">買家分析 (依付款時間計算)</div>
        <div class="box">
          <div class="a">
            <div class="info">
              <div>
                <span class="po"><em style="background:#ff6600"></em>新買家</span>
                <span><i>100</i>%</span>
              </div>
              <div>
                <span class="po"><em style="background:#367fe3"></em> 既有買家</span>
                <span><i>0</i>%</span>
              </div>
            </div>
            <div class="chartData">
              <ve-ring :data="chartData" :colors="['#ff6600','#367fe3']" height="200px" :settings="chartDataSettings" :extend="chartDataSettings" :legend-visible="false"></ve-ring>
            </div>
          </div>
          <div class="b">
            <div class="box">
              <template v-for="(item,index) in chartDataRows">
                <div class="li" :key="index">
                  <div class="li_title">
                    <span>{{item.label}}
                      <i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                        </svg></i>
                    </span>
                  </div>
                  <div class="li_num">{{formData[item.prop]}}</div>
                  <div class="li_lv">
                    <span>vs {{formData.time}}
                      {{(item.lv).toFixed(2)}}%
                      <i data-v-2c1fda86="" class="inline-svg-container icon" style="/* display: none; */"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>growth</title>
                          <desc>Created with Sketch.</desc>
                          <defs></defs>
                          <g id="growth" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M9.63538732,8.63974174 L9.63538732,12.749984 C9.63538732,13.0261264 9.4115297,13.249984 9.13538732,13.249984 L7.13538732,13.249984 C6.85924495,13.249984 6.63538732,13.0261264 6.63538732,12.749984 L6.63538732,8.65030508 L3.50176055,8.66133893 C3.36871984,8.66180739 3.24097818,8.60923459 3.14680765,8.51525609 C2.95134631,8.32019334 2.95102319,8.00361102 3.14608594,7.80814968 L7.79792255,3.14680765 C7.79811289,3.14661692 7.79830338,3.14642634 7.79849403,3.14623592 C7.99387253,2.95109021 8.31045497,2.95127892 8.50560069,3.14665742 L13.1287695,7.77534111 C13.2219777,7.86866056 13.2745379,7.99502891 13.2750023,8.12692314 C13.2759746,8.4030638 13.0529066,8.62770826 12.7767659,8.62868059 L9.63538732,8.63974174 Z" fill="#40D0BD"></path>
                          </g>
                        </svg></i></span>
                  </div>
                </div>
              </template>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="sort">
        <div class="card left">
          <div class="title flex">
            <span>商品排名 (依付款時間計算)</span>
            <span class="i">更多 <i class="el-icon-arrow-right"></i></span>
          </div>
          <div class="boxlist">
            <div class="item active">銷售額 <i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                </svg></i> </div>
            <div class="item">售出件數<i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                </svg></i> </div>
            <div class="item">頁面瀏覽數<i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                </svg></i> </div>
            <div class="item">付款訂單轉換率<i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                </svg></i> </div>
          </div>
          <ul class="theader">
            <li class="rank">排名</li>
            <li class="info">商品</li>
            <li class="sales">銷售額</li>
          </ul>
        </div>
        <div class="card right">
          <div class="title flex">
            <span>分類排名 (依付款時間計算)</span>
            <span class="i">更多 <i class="el-icon-arrow-right"></i></span>
          </div>
          <div class="boxlist">
            <div class="item active">銷售額 <i data-v-18e24846="" class="shopee-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                </svg></i>
            </div>
          </div>
          <ul class="theader">
            <li class="rank">排名</li>
            <li class="info">分類</li>
            <li class="sales">銷售額</li>
          </ul>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="show" title="数据设置" width="800px">
      <div style="height:500px">
        <el-scrollbar style="height:100%;width:100%">
          <mixForm v-model="formData" :fields="formFields" />
          <div style="height:300px">
            <mixTable v-model="charts.rows" :fields="tableFields" />
          </div>
        </el-scrollbar>
      </div>
      <el-button type="primary" @click="show=false">确定</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { FormatDate } from "@/api";
export default {
  name: "Xipi",
  data() {
    return {
      chartDataSettings: {
        tooltip: {
          show: false
        },
        hoverAnimation: false,
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        offsetY: "50%",
        radius: [50, 80]
      },
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 }
        ]
      },
      chartDataRows: [
        { label: "全部買家", prop: "all", lv: Math.random() * 10 },
        { label: "新買家", prop: "new", lv: Math.random() * 10 },
        { label: "既有買家", prop: "you", lv: Math.random() * 10 },
        { label: "潛在買家", prop: "qian", lv: Math.random() * 10 },
        { label: "回購率", prop: "hui", lv: Math.random() * 10 }
      ],
      show: false,
      formData: {
        username: "asnsfb",
        time: "",
        type: "全部訂單",
        maxSacle: 200,
        maxOrder: 10,
        maxNoRepeatVisitors: 50,
        maxPageViews: 200,
        selectTime: 1,
        all: 100,
        new: 21,
        you: 79,
        qian: 30,
        hui: "11.2%"
      },
      formFields: [
        { labelWidth: 120, label: "用户名", prop: "username", type: "text" },
        { labelWidth: 120, label: "全部买家", prop: "all", type: "text" },
        { labelWidth: 120, label: "新买家", prop: "new", type: "text" },
        { labelWidth: 120, label: "既有买家", prop: "you", type: "text" },
        { labelWidth: 120, label: "潜在买家", prop: "qian", type: "text" },
        { labelWidth: 120, label: "回购率", prop: "hui", type: "text" },
        {
          labelWidth: 120,
          label: "选择数据区间",
          prop: "selectTime",
          type: "select",
          options: [
            { label: "今日此刻", value: 1 },
            { label: "昨天", value: 2 },
            { label: "过去七天", value: 3 },
            { label: "过去30天", value: 4 }
          ]
        },
        {
          labelWidth: 120,
          label: "随机金额上限",
          prop: "maxSacle",
          type: "number"
        },
        {
          labelWidth: 120,
          label: "随机订单上限",
          prop: "maxOrder",
          type: "number"
        },
        {
          labelWidth: 120,
          label: "不重复访客上限",
          prop: "maxNoRepeatVisitors",
          type: "number"
        },
        {
          labelWidth: 120,
          label: "随机浏览上限",
          prop: "maxPageViews",
          type: "number"
        },
        {
          labelWidth: 120,
          label: "增加一行数据",
          type: "button",
          click: this.addRows
        }
      ],
      tableFields: [
        {
          type: "input",
          change: this.tableChange,
          label: "时间",
          prop: "date"
        },
        {
          type: "input",
          change: this.tableChange,
          label: "销售额",
          prop: "sacle"
        },
        {
          type: "input",
          change: this.tableChange,
          label: "訂單",
          prop: "order"
        },
        {
          type: "input",
          change: this.tableChange,
          label: "不重複訪客數",
          prop: "noRepeatVisitors"
        },
        {
          type: "input",
          change: this.tableChange,
          label: "商品頁面瀏覽數",
          prop: "pageViews"
        },
        {
          type: "button",
          label: "操作",
          options: [{ label: "删除", style: "danger", click: this.delRows }]
        }
      ],
      colors: [
        "#c23531",
        "rgb(54, 127, 227)",
        "rgb(246, 189, 22)",
        "rgb(35, 170, 171)",
        "rgb(88, 183, 241)",
        "rgb(251, 115, 75)",
        "rgb(148, 95, 185)",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3"
      ],
      setting: {
        tooltip: {
          trigger: "axis",
          show: true,
          // formatter: "{a0}: {b0}<br />{a1}: {b1}"
          formatter: this.formatter_a
        },
        xAxis: {
          type: "time",
          axisLabel: {
            show: true,
            formatter: this.formatter
          },
          splitLine: {
            show: false
          },
          axisTick: {
            //决定是否显示坐标刻度
            axisTick: {
              lineStyle: { type: "solid" }
            }
          }
        },
        yAxis: {
          offset: 20,
          axisLabel: {
            show: true,
            formatter: function() {
              return "";
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        labelMap: {
          date: "时间",
          sacle: "銷售額",
          order: "訂單",
          transform: "下單轉換率",
          average: "平均訂單金額",
          noRepeatVisitors: "不重複訪客數",
          pageViews: "商品頁面瀏覽數"
        },
        grid: {
          top: "2%",
          right: "30px",
          bottom: "3%",
          containLabel: true
        },
        series: {
          smooth: false
        }
      },
      rows: [
        {
          top: (Math.random() * 10).toFixed(2),
          type: "",
          check: true,
          total: 0,
          prop: "date",
          label: "时间"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          type: "$",
          check: true,
          total: 0,
          prop: "sacle",
          label: "銷售額"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          type: "",
          check: false,
          total: 0,
          prop: "order",
          label: "訂單"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          last: "%",
          check: false,
          total: 0,
          prop: "transform",
          label: "下單轉換率"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          type: "$",
          check: false,
          total: 0,
          prop: "average",
          label: "平均訂單金額"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          type: "",
          check: false,
          total: 0,
          prop: "noRepeatVisitors",
          label: "不重複訪客數"
        },
        {
          top: (Math.random() * 10).toFixed(2),
          type: "",
          check: false,
          total: 0,
          prop: "pageViews",
          label: "商品頁面瀏覽數"
        }
      ],
      charts: {
        columns: ["date", "sacle"],
        rows: []
      }
    };
  },
  watch: {
    "formData.selectTime"() {
      this.charts.rows = [];
    }
  },
  methods: {
    formatter_a(params) {
      let str = "";
      let time = "";
      for (let index = 0; index < params.length; index++) {
        let name = params[index].seriesName + ": ";
        let val = params[index].value[params[index].encode.y[0]];
        if (this.formData.selectTime <= 2) {
          time =
            "<div class='date'>时间：" +
            FormatDate(params[index].value[0], "YYYY-MM-DD hh:mm") +
            "</div>";
        } else {
          time =
            "<div class='date'>日期：" +
            FormatDate(params[index].value[0], "YYYY-MM-DD") +
            "</div>";
        }
        if (params[index].seriesName == "下單轉換率") {
          val = val.toFixed(2) + "%";
        } else if (params[index].seriesName == "平均訂單金額") {
          val = "$" + val.toFixed(2);
        } else if (params[index].seriesName == "銷售額") {
          val = "$" + val.toFixed(2);
        }
        str += `<div class="item"><span class="name"><i style="background:${
          this.colors[index + 1]
        }"></i>${name}</span><span>${val}</span></div>`;
      }
      return `<div class="tooltip">  ${time}${str}</div>`;
    },
    formatter(val) {
      if (this.formData.selectTime <= 2) {
        let hh = new Date(val).getHours();
        let mm = new Date(val).getMinutes();
        hh = hh < 10 ? "0" + hh : hh;
        mm = mm < 10 ? "0" + mm : mm;
        return hh + ":" + mm;
      } else {
        return FormatDate(val, "MM-DD");
      }
    },
    tableChange() {
      let sacle = 0,
        order = 0,
        transform = 0,
        average = 0,
        noRepeatVisitors = 0,
        pageViews = 0;

      this.charts.rows.map(e => {
        sacle += e.sacle * 1;

        order += e.order * 1;

        let num = (e.order / e.noRepeatVisitors) * 100;
        transform += num;
        e.transform = num;

        let num1 = (e.sacle * 1) / e.order;
        average = num1;
        e.average = num1;

        noRepeatVisitors += e.noRepeatVisitors * 1;

        pageViews += e.pageViews * 1;
        return e;
      });

      transform = (transform / this.charts.rows.length).toFixed(2);
      average = (sacle / order).toFixed(2);

      this.rows[1].total = sacle;
      this.rows[2].total = order;
      this.rows[3].total = transform;
      this.rows[4].total = average;
      this.rows[5].total = noRepeatVisitors;
      this.rows[6].total = pageViews;
    },
    selectItem(item) {
      let arr = item.prop;
      if (this.charts.columns.includes(arr)) {
        if (this.charts.columns.length == 2) return;
        this.charts.columns = this.charts.columns.filter(e => e != arr);
      } else {
        if (this.charts.columns.length >= 5) return;
        this.charts.columns.push(arr);
      }
      item.check = !item.check;
    },
    delRows(item) {
      this.charts.rows = this.charts.rows.filter(e => e.date != item.date);
    },
    addRows() {
      let time = this.charts.rows.length;
      time = time < 10 ? "0" + time : time;
      time = time == 24 ? "23:59" : time + ":00";
      let date = new Date();
      switch (this.formData.selectTime) {
        case 1:
          // 按照一天每个小时产生数据
          this.formData.time = "昨天 00:00-" + time;
          this.formData.date = "00:00 - " + time;
          if (this.charts.rows.length == 25) return;
          date = FormatDate(new Date(), "YYYY-MM-DD") + " " + time;
          break;
        case 2:
          // 按照一天每个小时产生数据
          this.formData.time = "前一天";
          this.formData.date = FormatDate(
            new Date(Date.now() - 1 * 60 * 24 * 60 * 1000),
            "YYYY-MM-DD"
          );
          date = `${FormatDate(
            new Date(Date.now() - 1 * 60 * 24 * 60 * 1000),
            "YYYY-MM-DD"
          )}  ${time}`;
          if (this.charts.rows.length == 25) return;
          break;
        case 3:
          // 按照最近一星期，每天产生数据；
          this.formData.time = "前 7 天";
          this.formData.date =
            FormatDate(
              new Date(Date.now() - 7 * 60 * 24 * 60 * 1000),
              "YYYY-MM-DD"
            ) +
            " - " +
            FormatDate(
              new Date(Date.now() - 1 * 60 * 24 * 60 * 1000),
              "YYYY-MM-DD"
            );
          date = FormatDate(
            new Date(
              Date.now() - (7 - this.charts.rows.length) * 60 * 24 * 60 * 1000
            ),
            "YYYY-MM-DD"
          );
          if (this.charts.rows.length >= 7) return;
          break;
        case 4:
          this.formData.time = "前 30 天";
          this.formData.date =
            FormatDate(
              new Date(Date.now() - 30 * 60 * 24 * 60 * 1000),
              "YYYY-MM-DD"
            ) +
            " - " +
            FormatDate(
              new Date(Date.now() - 1 * 60 * 24 * 60 * 1000),
              "YYYY-MM-DD"
            );
          date = FormatDate(
            new Date(
              Date.now() - (30 - this.charts.rows.length) * 60 * 24 * 60 * 1000
            ),
            "YYYY-MM-DD"
          );
          if (this.charts.rows.length >= 30) return;
          break;
      }
      let sacle = Math.ceil(Math.random() * (this.formData.maxSacle * 1)),
        order = Math.ceil(Math.random() * (this.formData.maxOrder * 1)),
        noRepeatVisitors = Math.ceil(
          Math.random() * (this.formData.maxNoRepeatVisitors * 1)
        ),
        pageViews = Math.ceil(Math.random() * (this.formData.maxPageViews * 1)),
        transform = Math.ceil((order / noRepeatVisitors) * 100),
        average = Math.ceil(sacle / order);
      let rows = {
        date,
        sacle,
        order,
        transform,
        average,
        noRepeatVisitors,
        pageViews
      };
      this.charts.rows.push(rows);
      this.tableChange();
    }
  }
};
</script>
<style lang='less' scoped>
.xipi {
  color: #333;
  position: relative;
  background: #f6f6f6;

  .head {
    height: 58px;
    overflow: hidden;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    &.top {
      position: relative;
      z-index: 999;
      .left {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        .logo {
          width: 25px;
          height: 28px;
          svg {
            fill: #ee4d2d;
          }
        }
        .title,
        .el-icon-arrow-right {
          font-size: 18px;
          color: #999;
          padding-left: 10px;
        }
        .path {
          font-size: 18px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .xipicart {
          display: flex;
          align-items: center;
          padding-right: 30px;
          border-right: 1px solid #ccc;
          .icon {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
              display: flex;
            }
          }
        }
        .info {
          padding-left: 30px;
        }
      }
    }
    &.bottom {
      .left {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        .item {
          min-width: 85px;
          position: relative;
          text-align: center;
          font-size: 14px;
          &:hover,
          &.active {
            color: #ee4d2d;
            cursor: pointer;
            &::after {
              position: absolute;
              bottom: -20px;
              content: "";
              display: block;
              height: 3px;
              width: 100%;
              background: #ee4d2d;
            }
          }
          &:last-child {
            border-left: 1px solid #ccc;
            margin-left: 10px;
          }
          .new-badge {
            display: inline-block;
            margin-top: -4px;
            padding: 0 4px;
            height: 16px;
            line-height: 16px;
            color: #fff;
            font-size: 10px;
            background-image: linear-gradient(270deg, #fe9373 9%, #ee4d2d 91%);
            border-radius: 9px 2px 9px 9px;
          }
        }
      }
      .right {
        font-size: 14px;
        font-weight: var(--font-weight);
        color: #ee4d2d;
        line-height: 20px;
        font-weight: bold;
        span {
          font-weight: bold;
        }
      }
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    width: 1268px;
    margin: 0 auto;
    .title {
      font-size: 18px;
      margin-bottom: 20px;
      line-height: 20px;
      font-weight: bold;
    }
    .flex {
      .right {
        border: 1px solid #ccc;
        // height: 30px;
        padding: 5px 10px;
        border-radius: 5px;
        i {
          width: 15px;
          height: 15px;
          display: inline-block;
        }
      }
      .header {
        display: inline-block;
        span {
          display: inline-block;
          margin: 0 5px;
        }
        .time {
          height: 30px;
          border: 1px solid #ccc;
          border-radius: 5px;
          display: inline-block;
          line-height: 30px;
          padding: 0 10px;

          i {
            width: 15px;
            height: 15px;
            display: inline-block;
          }
        }
        .el-select {
          /deep/ .el-input__inner {
            border-color: #ccc;
          }
        }
      }
    }
    .card {
      margin: 20px 0;
      padding: 20px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 10px;
      background: #fff;
    }
    .chart {
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        .item {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 15px 15px;
          flex: 1;
          margin: 0 5px;
          font-size: 14px;
          position: relative;
          overflow: hidden;
          .b {
            height: 50px;
            line-height: 50px;
            .price {
              font-size: 22px;
            }
          }
          .c {
            > * {
              font-size: 12px !important ;
              color: #999;
            }
            span:last-child {
              color: #444;
            }
            i {
              width: 12px;
              height: 12px;
              display: inline-block;
              vertical-align: sub;
            }
          }
        }
      }
      .charts {
        height: 350px;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          span {
            padding: 0 10px;
            font-size: 14px;
          }
          span:last-child {
            color: #999;
          }
          i {
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
        }
      }
    }
    .border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: transparent;
    }
  }
  .sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card {
      * {
        font-size: 18px;
        .i {
          font-size: 14px;
          color: #2673dd;
        }
      }
      flex: 1;
      &.left {
        margin-right: 10px;
      }
      &.right {
        margin-left: 10px;
      }
    }
    .boxlist {
      border-bottom: 1px solid #ccc;
      .item {
        display: inline-block;
        font-size: 14px;
        text-align: center;
        padding: 0 15px;
        height: 45px;
        vertical-align: top;
        border-bottom: 2px solid transparent;
        i {
          display: inline-block;
          width: 15px;
          vertical-align: middle;
          color: #ccc;
          margin-left: 5px;
        }
        &:hover,
        &.active {
          border-color: #ee4d2d;
          color: #ee4d2d;
        }
      }
    }
  }
  .position-sticky {
    position: sticky;
    background: #fff;
    z-index: 99;
    top: 0px;
    font-size: 14px;
  }
  .theader {
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    color: #666;
    border-color: #eee;
    background: #f6f6f6;
    border-radius: 4px 4px 0 0;
    border-top: none;
    display: flex;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    list-style-type: disc;
    list-style: none;
    & > * {
      font-size: 14px !important;
    }
    .rank {
      width: 84px;
      text-align: center;
      flex-shrink: 0;
      padding: 0 16px;
      box-sizing: border-box;
    }
    .info {
      flex: 1;
      padding: 0 8px;
    }
    .sales {
      padding: 0 16px;
      flex-shrink: 0;
      text-align: right;
    }
  }
  /deep/ .tooltip {
    margin: -8px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 12px;
    background: #fefefe;
    color: #444;
    overflow: hidden;
    font-family: Roboto;
    font-size: 14px;
    color: #333;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    .date {
      padding: 0 12px 0px 12px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      background-color: #f6f6f6;
      color: #666;
      text-align: left;
    }
    .item {
      padding: 0 12px 0px 12px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 10px;
        & > i {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: chocolate;
          margin-right: 10px;
        }
      }
    }
  }
  .data {
    .box {
      display: flex;
      justify-content: space-between;
    }
    .a {
      width: 480px;
      height: 215px;
      border: 1px solid #ccc;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      .info {
        flex: 1;
        margin-right: 50px;
        padding-left: 80px;
        span {
          display: block;
          margin: 10px;
          position: relative;
          &.po {
            em {
              position: absolute;
              content: "";
              width: 10px;
              height: 10px;
              border-radius: 50%;
              overflow: hidden;
              top: 0;
              bottom: 0;
              margin: auto;
              left: -20px;
            }
          }
          i {
            font-style: normal;
            font-size: 22px;
          }
        }
      }
      .chartData {
        width: 200px;
        height: 200px;
        overflow: hidden;
      }
    }
    .b {
      flex: 1;
      font-size: 14px;
      .box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        height: 237px;
        overflow: hidden;

        .li {
          width: 33.33%;
          box-sizing: border-box;
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
          padding-top: 20px;
          .li_num {
            font-size: 22px;
            margin: 7px 0;
          }
          .li_lv {
            font-size: 12px;
            display: flex;
            align-items: center;
            span {
              padding-right: 10px;
            }
          }
        }
        .shopee-icon {
          width: 15px;
          height: 15px;
          display: inline-block;
          color: #eeeeee;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>