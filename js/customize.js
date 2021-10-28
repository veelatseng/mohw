// 自行加入的JS請寫在這裡
$(function() {
  $('.mpSlider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: 'ease'
  });
  $('.course>ul').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });
    // lazyload  
    //可以指定你想要的元素做lazyload
    // $("img").lazyload({ effect: "fadeIn" });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      pauseOnFocus: true,
      focusOnSelect: true,
      accessibility: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }]
    });
    $('.cp_slider').slickLightbox({
      caption: 'caption',
      useHistoryApi: 'true',
      lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.Slider-nav',
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true
    });
    $('.Slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.Slider-for',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      infinite: true,
    });
  });
// $(function(){
//   $('.topic_title>a').click(function(e){
//     $(this).next('.topic_content').slideDown();
//     e.preventDefault();
//   });
//   $('.topic_content .close a').click(function(e){
//     $('.topic_content').slideUp();
//     e.preventDefault();
//   });
// });
$(function(){
  $(".hero_block .video .close").click(function(e){
    $('.hero_block .video').hide();
    e.preventDefault();
  });
})
$(function () {
    // chart1 近年護理人員統計
    $('.chart1 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      style: {
        color: '#555',
        fontSize: "12px",
        fontWeight: "blod",
        fontFamily: "Courier new",
      },
      chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'          
      },
      title: {
        text: '近年護理人員統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        min: 0,
        title: {
          text: '數量'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          }
        }
      },
      series: [{
        name: '案件數',
        data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
        color: "#ff6633"
      }],
    });
    // chart2 案件分析-縣市別
    $('.chart2 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        inverted: true,
        backgroundColor:'rgba(255, 255, 255, 0)'
      },
      title: {
        text: '案件分析-縣市別'
      },
      subtitle: {
        text: '共有16縣市機構通報(107.2.1-11.30)'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: '案件數'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          }
        }
      },
      series: [{
        name: '案件數',
        colorByPoint: true,
        data: [{
          name: '1',
          y: 33,
          color:"#335498"
        }, {
          name: '2',
          y: 20,
          color:"#008bc0"
        }, {
          name: '3',
          y: 19,
          color:"#0099d8"
        }, {
          name: '4',
          y: 18,
          color:"#5cb9ed"
        }, {
          name: '5',
          y: 9,
          color:"#00a39b"
        }, {
          name: '6',
          y: 7,
          color:"#00bc9c"
        }, {
          name: '7',
          y: 7,
          color:"#56cc9b"
        }, {
          name: '8',
          y: 5,
          color:"#913589"
        }, {
          name: '9',
          y: 4,
          color:"#9145aa"
        }, {
          name: '10',
          y: 4,
          color:"#9e59b3"
        }, {
          name: '11',
          y: 3,
          color:"#f07d26"
        }, {
          name: '12',
          y: 3,
          color:"#fa7752"
        }, {
          name: '13',
          y: 3,
          color:"#fab35b"
        }, {
          name: '14',
          y: 2,
          color:"#ebca56"
        }, {
          name: '15',
          y: 1,
          color:"#aab7b7"
        }, {
          name: '16',
          y: 1,
          color:"#d3d2d2"
        }, {
          name: '17',
          y: 1,
          color:"#571a0d"
        }, {
          name: '18',
          y: 1,
          color:"#ad3b1f"
        }, {
          name: '19',
          y: 1,
          color:"#e85212"
        }, {
          name: '20',
          y: 1,
          color:"#e79217"
        }, {
          name: '21',
          y: 1,
          color:"#cd9b2a"
        }, {
          name: '22',
          y: 1,
          color:"#c1c82d"
        }]
      }],
    });
    // chart3 近年專科護理師領證數統計
    $('.chart3 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      style: {
        color: '#555',
        fontSize: "12px",
        fontWeight: "blod",
        fontFamily: "Courier new",
      },
      chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'          
      },
      title: {
        text: '近年專科護理師領證數統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        min: 0,
        title: {
          text: '數量'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          }
        }
      },
      series: [{
        name: '案件數',
        data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
        color: "#ff6633"
      }],
    });
    // chart4 案件分析-爭議別
    $('.chart4 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'pie',
        spacing : [40, 0 , 40, 0],
        backgroundColor:'rgba(255, 255, 255, 0)'
      },
      title: {
        text: '內外科專科護理師領證人數比'
      },
      subtitle: {
        text: '107年2-11月'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        type: 'pie',
        innerSize: '50%',
        name: '內外科專科護理師領證人數比',
        data: [{
          name:'內科',
          y: 54,
          color:"#ff6633"
        },{
          name:'外科',
          y: 46,
          color:"#b04fad"
        }]
      }],
      legend: {
        layout: "horizontal"
      }
    });
    // chart5 評鑑護理機構各類型比例
    $('.chart5 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'pie',
        spacing : [40, 0 , 40, 0],
        backgroundColor:'rgba(255, 255, 255, 0)'  
      },
      title: {
        text: '勞基法相關案件-病房/單位類別'
      },
      subtitle: {
        text: '107年2-11月'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        type: 'pie',
        innerSize: '50%',
        name: '病房/單位類別',
        data: [{
          name:'醫院/門診',
          y: 75,
          color:"#ab2aa7"
        },{
          name:'醫院/急診',
          y: 4,
          color:"#b04fad"
        },{
          name:'醫院/病房',
          y: 4,
          color:"#ca69c7"
        },{
          name:'醫院/其他單位',
          y: 19,
          color:"#e391e0"
        },{
          name:'診所',
          y: 3,
          color:"#5d4fb0"
        },{
          name:'護理機構',
          y: 16,
          color:"#ff6633"
        },{
          name:'其他',
          y: 5,
          color:"#aab7b7"
        }]
      }],
      legend: {
        layout: "horizontal"
      }
    });
    // chart6 原鄉離島公費生養成身份與籍屬
    $('.chart6 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        backgroundColor:'rgba(255, 255, 255, 0.1)'            
      },
      title: {
        text: '原鄉離島公費生養成身份與籍屬'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['醫師','牙醫師','護理人員','其他' ]
      },
      yAxis: {
        min: 0,
        title: {
          text: '件數'
        },
        stackLabels: {
          enabled: true,
        }
      },       
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '籍屬原住民',
        data: [253, 35, 84, 68],
        color:"#ff6633"
      }, {
        name: '籍屬離島地區',
        data: [258, 39, 167, 45],
        color:"#b04fad"
      }]
    });
    $('.chart7 .chart').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      style: {
        color: '#555',
        fontSize: "12px",
        fontWeight: "blod",
        fontFamily: "Courier new",
      },
      chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'          
      },
      title: {
        text: '近年專科護理師領證數統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        min: 0,
        title: {
          text: '數量'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          }
        }
      },
      series: [{
        name: '案件數',
        data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
        color: "#ff6633"
      }],
    });
    // chart8 一般護理之家
    $('#chart8').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'bar',
        inverted: true,
        backgroundColor:'rgba(255, 255, 255, 0)'
      },
      title: {
        text: '近三年評鑑家數'
      },
      xAxis: {
        categories: ['109', '108', '107'],
        title: {
          text: '評鑑年度'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '評鑑家數'
        },
        stackLabels: {
          enabled: true,
        }
      },
      legend: {
        reversed: true
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '不合格',
        data: [5, 5, 5],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [70, 177, 300],
        color:"#c49be5"
      }]
    });
    // chart9 各縣市評鑑統計
    $('#chart9').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        backgroundColor:'rgba(255, 255, 255, 0.1)'            
      },
      title: {
        text: '各縣市評鑑統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','屏東縣','宜蘭縣','花蓮縣','台東縣','澎湖縣','連江縣' ]
      },
      yAxis: {
        min: 0,
        title: {
          text: '有效家數'
        },
        stackLabels: {
          enabled: true,
        }
      },       
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '尚未評鑑',
        data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2,1,1,0,0,1,2,0,2,0,0,0],
        color:"#434343"
      },{
        name: '不合格',
        data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1,0,0,1,1,0,0,0,0,0,0,0],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10,40,16,12,13,13,20,8,3,4,2,1],
        color:"#c49be5"
      }]
    });
    // chart10 一般護理之家
    $('#chart10').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'bar',
        inverted: true,
        backgroundColor:'rgba(255, 255, 255, 0)'
      },
      title: {
        text: '近三年評鑑家數'
      },
      xAxis: {
        categories: ['109', '108', '107'],
        title: {
          text: '評鑑年度'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '評鑑家數'
        },
        stackLabels: {
          enabled: true,
        }
      },
      legend: {
        reversed: true
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '復業／開業未滿一年',
        data: [5, 5, 5],
        color:"#18489a"
      },{
        name: '不合格',
        data: [5, 5, 5],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [70, 177, 300],
        color:"#c49be5"
      }]
    });
    // chart11 各縣市評鑑統計
    $('#chart11').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        backgroundColor:'rgba(255, 255, 255, 0.1)'            
      },
      title: {
        text: '各縣市評鑑統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','屏東縣','宜蘭縣','花蓮縣','台東縣','澎湖縣','連江縣' ]
      },
      yAxis: {
        min: 0,
        title: {
          text: '有效家數'
        },
        stackLabels: {
          enabled: true,
        }
      },       
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '尚未評鑑',
        data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2,1,1,0,0,1,2,0,2,0,0,0],
        color:"#434343"
      },{
        name: '不合格',
        data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1,0,0,1,1,0,0,0,0,0,0,0],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10,40,16,12,13,13,20,8,3,4,2,1],
        color:"#c49be5"
      }]
    });
    // chart12 一般護理之家
    $('#chart12').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'bar',
        inverted: true,
        backgroundColor:'rgba(255, 255, 255, 0)'
      },
      title: {
        text: '近三年評鑑家數'
      },
      xAxis: {
        categories: ['109', '108', '107'],
        title: {
          text: '評鑑年度'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '評鑑家數'
        },
        stackLabels: {
          enabled: true,
        }
      },
      legend: {
        reversed: true
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '不合格',
        data: [5, 5, 5],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [70, 177, 300],
        color:"#c49be5"
      }]
    });
    // chart13 各縣市評鑑統計
    $('#chart13').highcharts({
      exporting: { 
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        backgroundColor:'rgba(255, 255, 255, 0.1)'            
      },
      title: {
        text: '各縣市評鑑統計'
      },
      subtitle: {
        text: '107年2-11月'
      },
      xAxis: {
        categories: ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','屏東縣','宜蘭縣','花蓮縣','台東縣','澎湖縣','連江縣' ]
      },
      yAxis: {
        min: 0,
        title: {
          text: '有效家數'
        },
        stackLabels: {
          enabled: true,
        }
      },       
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [{
        name: '尚未評鑑',
        data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2,1,1,0,0,1,2,0,2,0,0,0],
        color:"#434343"
      },{
        name: '不合格',
        data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1,0,0,1,1,0,0,0,0,0,0,0],
        color:"#fc6578"
      }, {
        name: '合格',
        data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10,40,16,12,13,13,20,8,3,4,2,1],
        color:"#c49be5"
      }]
    });
  });  

jQuery('img.svg').each(function() {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});