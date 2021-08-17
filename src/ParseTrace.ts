import * as _ from "lodash";

export default class ParseTrace {
  private arr: Array<TraceItem> = [];
  constructor() {
    this.arr = [];
  }

  push(item: TraceItem) {
    this.arr.push(item);
    // if (item.value == '==') {
    //   this.arr.push({ type: 'value', value: '*' });
    // }
    console.log("After push :: ", this.arr);
  }

  clear() {
    this.arr = [];
  }

  getLastOperator() {
    return _.findLast(this.arr, (f) => f.type == "operator").value;
  }

  getLastCategory() {
    return _.findLast(this.arr, (f) => f.type == "category").value;
  }

  getLastTokenType() {
    if (this.arr.length <= 0) return null;
    console.log(this.arr, ' ;; Value & Operator');
    // if (_.last(this.arr).type === 'operator' && _.last(this.arr).value) {
    //   return this.push({ type: 'value', value: '*' });
    // } else {
    // }
    return _.last(this.arr).type;
  }

  pushOperator(operator: string) {
    this.push({ type: "operator", value: operator });
  }

  pushCategory(category: string) {
    this.push({ type: "category", value: category });
  }

  pushValue(value: string) {
    this.push({ type: "value", value: value });
  }
}

interface TraceItem {
  type: string;
  value: string;
}
