(function (vue) {
    let EchartPie = {
        name: 'EchartPie',
        template: `
            <div ref="temp" :style="echart_styles"></div>
        `,
        props: {
            echart_data:{type:Object, default:{}},
            echart_styles:{type:String, default:"height:400px;"},
        },
        data() {
            return {
                chartObj : '',
            }
        },
        watch: {
            echart_data: function(newData, oldData) {
                this.showEchart(newData)
            },
        },
        methods: {
            showEchart: function(newData){

                field_label = newData.field_label;
                data_value_list = newData.data_value_list;
                selected = newData.selected;
                title = newData.title;

                series = [];
                //圆饼图
                series.push(
                    {label: {normal: {show: true,formatter: '{b} {d}%'}},name: field_label, type: 'pie',radius : '65%',center: ['50%', '50%'], animation:true, data: data_value_list, itemStyle: {emphasis: {shadowBlur: 10,shadowOffsetX: 0,shadowColor: 'rgba(0, 0, 0, 0.5)'}}}
                )

                formatter_str =  "{a} <br/>{b} : {c} ({d}%)";
                var option = {
                    title:{text:field_label,bottom:'bottom',left:'center'},
                    tooltip : {trigger: 'item',formatter: formatter_str},
                    legend: {x:'right',type: 'scroll', orient: 'vertical',right:10,top:20,bottom: 20,data: title, selected:selected},
                    series : series
                };

                this.chartObj = echarts.init(this.$refs.temp, 'wonderland');
                this.chartObj.setOption(option,true);
            },
        },
        mounted: function () {
        },
        created: function() {
        }
    }

    vue.component(EchartPie.name, EchartPie);
})(Vue)


/**
  调用：
    <echart-pie :echart_data="region_dis" echart_styles="height:400px;"></echart-pie>       //echart_styles是可选参数
  
    region_dis = {
        'field_label' : 'Regional Distribution',            //这个描述
        'data_value_list' : [
            {name:'China', value:10},
            {name:'America', value:20}
        ],                      //这是数据
        'selected' : {
            China: true,
            America: true,
        },                              //这是默认是否展示的数据项
        'title' : ['China', 'America']                             //这是数据项名字
    }
 *
 *
 *
 */



