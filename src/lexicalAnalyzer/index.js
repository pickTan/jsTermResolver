//词法分析器
//词法分析面向的对象是单个的字符，目的是把它们组成有效的单词（字符串）
//标识符（变量）、保留字(window对象、属性和方法)、常数、运算符(+,-,*,/,>,<,^)、界符((),",')
//分析字符串是否符合js 条件判断规则
//流程
//1. 词法分析字符串
//2. 对读取的文件进行预处理,从头到尾进行扫描,去除一些无用的、影响程序执行的符号如换行符、回车符、制表符等
//3. 对源文件从头到尾进行扫描,排除空格；
//4.最终形成一条转译后的从左往有的抽象语法树
//例如：
// 字符串 'new Data().getTime() > 5000 || state.now'进行词法分析
// 传入 var state =  {now:'hahaha'};
// 通过词法分析成[{number:1546771382750},{contrast:'>'},{link:'||'},string:'hahaha']
//
