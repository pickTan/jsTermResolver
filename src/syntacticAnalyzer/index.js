//语法分析器
//语法的分析则是利用词法分析的结果作为输入来分析是否符合语法规则并且进行语法制导下的语义分析，
// 最后产生四元组(中间代码)，进行优化（可有可无）之后最终生成目标代码
//编译的2种形式：从上往下编译(高级语法匹配到低级，递归)，从下往上编译（低级语法匹配到高级，回溯）
//此处采取从上往下编译
//一个简易的非典型的语法分析
//语法规则
//1. 从左往右执行分权重,切割执行串递归每个执行项，作为一个树结构
//字符串为root
//1.1 首字符为(，
// 规则： 首个字符'（'计数为0，每遇到一个（计数+1，每遇到一个）计数-1，当计数为-为0是此部分为一个子项
//1.2 若首字符不为(，
// 规则：1.2.1找到计数为0的连接符号（对比符号，>,||等），作为一个项，并用真实js连接符号连接前后2个子项
// 1.2.2 如果为 ||此项返回值为true,则父项返回为true
//1.3 若上诉都未找到，
//找到计数为0的运算符号(+,-,*,/)之前的作为一个项
//1.4 若此时子项为一个单词
// 1.4.1 判断是否为对象变量，如果是则进行变量赋值；
// 1.4.2 判断是否为字符串，是则进行转译字符串转译；
// 1.4.3 判断是否为数字，是则进行数字的判断；
// 1.4.4 判断是否为window对象、属性和方法，是则进行相应window对象、属性和方法转译；
// 最终返回整体字符串的值

