//词法分析器
//对读取的css规则进行预处理
//1. 去除 一些无用的、影响程序执行的符号
//2. 通过权重去合并css规则
//3. 最终形成一条有效的词句传入语法分析器
export default class ExicalAnalyzer {
    //cavans支持的css属性值
    static   RESERVEWORD = [
        'position',
        'display',
        'fontSize',
        'fontFamily',
        'margin',
        'marginTop',
        'marginLeft',
        'marginRight',
        'marginBottom',
        'padding',
        'paddingTop',
        'paddingLeft',
        'paddingRight',
        'paddingBottom',
        'width',
        'height'
    ]

    constructor({styles}){
        this.styles = styles;
    }


    //界符
    // static  delimiters = []


}
