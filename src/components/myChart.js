/**
 * 
 * @param {String} canvas 画布id
 * @param {String} type 图表类型
 * @param {Array} data 生成图表的数据
 * @param {Object} options 图表参数 可选参数
 */

function sChart(canvas, type, data, options) {
    // this.canvas = document.getElementById(canvas);
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.type = type;
    this.data = data; //存放图表数据
    this.dataLength = this.data.length; // 图表数据的长度    
    this.width = this.canvas.width; // canvas 宽度
    this.height = this.canvas.height; // canvas 高度
    this.padding = 50; // canvas 内边距
    this.yEqual = 5; // y轴分成5等分
    this.yLength = 0; // y轴坐标点之间的真实长度
    this.xLength = 0; // x轴坐标点之间的真实长度
    this.yFictitious = 0; // y轴坐标点之间显示的间距
    this.yRatio = 0; // y轴坐标真实长度和坐标间距的比
    this.bgColor = '#ffffff'; // 默认背景颜色
    this.fillColor = '#1E9FFF'; // 默认填充颜色
    this.axisColor = '#666666'; // 坐标轴颜色
    this.contentColor = '#eeeeee'; // 内容横线颜色
    this.titleColor = '#000000'; // 图表标题颜色
    this.title = ''; // 图表标题
    this.titlePosition = 'top'; // 图表标题位置: top / bottom
    this.unit = ''; //纵坐标单位
    this.looped = null; // 是否循环
    this.current = 0; // 当前加载柱状图高度的百分数
    this.init(options);
}
sChart.prototype = {
    init: function (options) {
        if (options) {
            for (var key in options) {
                this[key] = options[key];
            }
        }
        this.yLength = Math.floor((this.height - this.padding * 3 - 10) / this.yEqual);
        this.xLength = Math.floor((this.width - this.padding * 1.5 - 10) / this.dataLength);
        this.yFictitious = this.getYFictitious(this.data);
        this.yRatio = this.yLength / this.yFictitious;
        this.looping();
    },
    /**
     * 循环生成动画效果
     */
    looping: function () {
        this.looped = window.requestAnimationFrame(this.looping.bind(this));
        if (this.current < 100) {
            this.current = (this.current + 3) > 100 ? 100 : (this.current + 3);
            this.drawAnimation();
        } else {
            window.cancelAnimationFrame(this.looped);
            this.looped = null;
        }
    },
    /**
     * 绘制动画，被循环函数调用生成动画
     */
    drawAnimation: function () {
        for (var i = 0; i < this.dataLength; i++) {
            var x = Math.ceil(this.data[i].value * this.current / 100 * this.yRatio);
            var y = this.height - this.padding - x;
            this.data[i].left = this.padding + this.xLength * (i + 0.25);
            this.data[i].top = y;
            this.data[i].right = this.padding + this.xLength * (i + 0.75);
            this.data[i].bottom = this.height - this.padding;
            this.drawBarUpdate();
        }
    },
    /**
     * 绘制完整的柱状图或折线图
     */
    drawBarUpdate: function () {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height); //清空
        this.drawAxis();
        this.drawPoint();
        this.drawTitle();
        this.drawUnit();
        this.drawBarChart();
    },
    /**
     * 把数据绘制出柱状或折线
     */
    drawBarChart: function () {
        this.ctx.fillStyle = this.fillColor;
        this.ctx.strokeStyle = this.fillColor;
        for (var i = 0; i < this.dataLength; i++) {
            // 绘制折线
            if (this.type === 'line') {
                this.ctx.beginPath();
                this.ctx.arc(this.data[i].left + this.xLength / 4, this.data[i].top, 4, 0, 2 * Math.PI, true);
                // this.ctx.fill();
                if (i !== this.dataLength - 1) {
                    this.ctx.moveTo(this.data[i].left + this.xLength / 4, this.data[i].top);
                    this.ctx.lineTo(this.data[i + 1].left + this.xLength / 4, this.data[i + 1].top);
                }
                this.ctx.stroke();
            } else if (this.type === 'bar') {
                // 绘制柱状
                this.ctx.fillRect(
                    this.data[i].left,
                    this.data[i].top,
                    this.data[i].right - this.data[i].left,
                    this.data[i].bottom - this.data[i].top
                );
            }

            this.ctx.font = '12px Arial'
            // this.ctx.fillText(
            //     this.data[i].value * this.current / 100,
            //     this.data[i].left + this.xLength / 4,
            //     this.data[i].top - 5
            // );
        }
    },
    /**
     * 绘制坐标轴
     */
    drawAxis: function () {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.axisColor;
        // y轴线, +0.5是为了解决canvas画1像素会显示成2像素的问题
        this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
        this.ctx.lineTo(this.padding + 0.5, this.padding * 2 + 0.5);
        // x轴线
        this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
        this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding + 0.5);
        this.ctx.stroke();
    },
    /**
     * 绘制坐标轴上的点和值
     */
    drawPoint: function () {
        // x轴坐标点
        this.ctx.beginPath();
        this.ctx.font = '12px Microsoft YaHei';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = this.axisColor;
        for (var i = 0; i < this.dataLength; i++) {
            var name = this.data[i].name;
            var xlen = this.xLength * (i + 1);
            this.ctx.moveTo(this.padding + xlen + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.padding + xlen + 0.5, this.height - this.padding + 5.5);
            this.ctx.fillText(name, this.padding + xlen - this.xLength / 2, this.height - this.padding + 15);
        }
        this.ctx.stroke();

        // y轴坐标点
        this.ctx.beginPath();
        this.ctx.font = '12px Microsoft YaHei';
        this.ctx.textAlign = 'right';
        this.ctx.fillStyle = this.axisColor;
        this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
        this.ctx.lineTo(this.padding - 4.5, this.height - this.padding + 0.5);
        this.ctx.fillText(0, this.padding - 10, this.height - this.padding + 5);
        for (var i = 0; i < this.yEqual; i++) {
            var y = this.yFictitious * (i + 1);
            var ylen = this.yLength * (i + 1);
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.axisColor;
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5);
            this.ctx.lineTo(this.padding - 4.5, this.height - this.padding - ylen + 0.5);
            this.ctx.stroke();
            this.ctx.fillText(y, this.padding - 10, this.height - this.padding - ylen + 5);
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.contentColor;
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5)
            this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding - ylen + 0.5);
            this.ctx.stroke();
        }
    },
    /**
     * 绘制图表标题
     */
    drawTitle: function () {
        if (this.title) {
            this.ctx.beginPath();
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.titleColor;
            this.ctx.font = '16px Microsoft YaHei';
            if (this.titlePosition === 'bottom' && this.padding >= 40) {
                this.ctx.fillText(this.title, this.width / 2, this.height - 5)
            } else {
                this.ctx.fillText(this.title, this.width / 2, this.padding / 2)
            }
        }
    },
    /**
     * 绘制纵坐标单位
     */
    drawUnit: function () {
        if (this.unit) {
            this.ctx.beginPath();
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.titleColor;
            this.ctx.font = '16px Microsoft YaHei';
            this.ctx.fillText(this.unit, this.padding, this.padding);
            this.ctx.beginPath();
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.titleColor;
            this.ctx.font = '16px Microsoft YaHei';
            let u = this.unit.split('/')[0];
            this.ctx.fillText(u, this.width - this.padding, this.padding);
            this.ctx.fillStyle = this.fillColor;
            this.ctx.strokeStyle = this.fillColor;
            var textWidth = this.ctx.measureText(u).width;
            this.ctx.beginPath();
            this.ctx.arc(this.width - this.padding - textWidth, this.padding - 6, 6, 0, 2 * Math.PI, true);
            this.ctx.fill();
        }
    },
    /**
     * y轴坐标点之间显示的间距
     * @param data 生成图表的数据
     * @return y轴坐标间距
     */
    getYFictitious: function (data) {
        var arr = data.slice(0);
        arr.sort(function (a, b) {
            return -(a.value - b.value);
        });
        var len = Math.ceil(arr[0].value / this.yEqual);
        var pow = len.toString().length - 1;
        pow = pow > 2 ? 2 : pow;
        return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow);
    },
}
// module.exports = sChart;
export default sChart;