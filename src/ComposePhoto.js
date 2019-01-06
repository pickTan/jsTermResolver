import { isDomObj,createCavans} from './utile'

export  default  class ComposePhoto{
  /**
     * 构造函数
     * @param cavans
     * @param webpRule
     */
  constructor({cavans,webpRule}){
    this.$cavans = isDomObj(cavans) ? cavans : createCavans(cavans);
    this.webpRule = webpRule;
  }

  

}
